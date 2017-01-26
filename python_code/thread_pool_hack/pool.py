from __future__ import print_function

import datetime
import inspect
import multiprocessing
import os
import threading
from Queue import Queue

import sqlalchemy as db
from concurrent.futures import ThreadPoolExecutor
from concurrent.futures.thread import _WorkItem
from naga import assoc
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


Base = declarative_base()

# you need to define your own config :)
engine = create_engine(config.SQLALCHEMY_DATABASE_URI, isolation_level='SERIALIZABLE')


class ProcessRegistry(Base):
    """This is the model used to store all of our thread information."""
    __tablename__ = 'procreg'
    id = db.Column(db.Integer, primary_key=True)
    procname = db.Column(db.String(32))
    tid = db.Column(db.BigInteger)
    pid = db.Column(db.Integer)
    timestamp = db.Column(db.DateTime)
    lastseen = db.Column(db.DateTime)
    status = db.Column(db.String(16))

    def __init__(self, procname, tid, pid, timestamp, lastseen, status):
        self.pid = pid
        self.tid = tid
        self.procname = procname
        self.timestamp = timestamp
        self.lastseen = lastseen
        self.status = status


class SessionManager(object):
    def __init__(self, engine):
        self.engine = engine
        self.session = None

    def __enter__(self):
        if self.session != None:
            raise Exception("Session already in use!")

        self.session = sessionmaker(bind=self.engine, expire_on_commit=False)()
        return self.session

    def __exit__(self, exc_type, exc_val, exc_tb):
        try:
            self.session.commit()
        except Exception as e:
            self.session.rollback()
            raise
        finally:
            self.session.close()
            self.session = None


def sm():
    return SessionManager(engine=engine)

def register(fname):
    register_thread(fname, sm, models.ProcessRegistry)

def register_thread(fname, sm, procreg):
    tid = threading.current_thread().ident
    pid = multiprocessing.current_process().pid
    ctime = datetime.datetime.utcnow()
    fname = os.path.split(fname)[-1]
    status = 'runnning'

    with sm() as session:
        proc = procreg(
            procname=fname,
            pid=pid,
            tid=tid,
            timestamp=ctime,
            lastseen=ctime,
            status=status)
        session.add(proc)


class Register(object):
    def __init__(self, name):
        self.name = name

    def __get__(self, instance, owner):
        instance.tid = instance.get_tid()
        instance.pid = instance.get_pid()
        register(instance.name)
        return super(owner, instance).run


class Worker(_WorkItem):
    run = Register("run")

    def __init__(self, future, fn, args, kwargs, name):
        super(Worker, self).__init__(future, fn, args, kwargs)
        self.tid = self.get_tid()
        self.pid = self.get_pid()
        self.name = name

    def get_pid(self):
        return multiprocessing.current_process().pid

    def get_tid(self):
        return threading.current_thread().ident


class SelfRegisteringQueue(Queue, object):
    def __init__(self, fname):
        super(SelfRegisteringQueue, self).__init__()
        self.fname = fname

    def put(self, item, block=True, timeout=None):
        if isinstance(item, _WorkItem):
            args_ = assoc({k: v for k, v in item.__dict__.items() if
                           k in inspect.getargs(item.__init__.__func__.func_code).args},
                          'name', self.fname)
            worker = Worker(**args_)
            super(SelfRegisteringQueue, self).put(worker, block, timeout)
        else:
            super(SelfRegisteringQueue, self).put(item, block, timeout)


class LogPool(ThreadPoolExecutor):
    def __init__(self, max_workers, fname=None):
        super(LogPool, self).__init__(max_workers=max_workers)
        self.fname = fname if fname is not None else __file__
        self._work_queue = SelfRegisteringQueue(self.fname)


if __name__ == '__main__':
    def printit(item):
        print(item)
    with LogPool(2, 'justatest') as pool:
        pool.submit(printit, 5)
