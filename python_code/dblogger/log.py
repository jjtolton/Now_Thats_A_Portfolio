# coding=utf-8
"""This logging module does some great formatting, plus if automatically logs everything to a SQL Table :) """
import datetime
import logging
import os
import subprocess
from logging import handlers

from naga import valmap, compose
from sqlalchemy.exc import InternalError
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import sqlalchemy as db
Base = declarative_base()

class Log(Base):
    """This is the class you would use for your ORM to recieve the logging messages created by custom logger

asctime	    %(asctime)s	Human-readable time when the LogRecord was created. By default this is of the form ‘2003-07-08 16:49:45,896’ (the numbers after the comma are millisecond portion of the time).
created	    %(created)f	Time when the LogRecord was created (as returned by time.time()).
filename	%(filename)s	Filename portion of pathname.
funcName	%(funcName)s	Name of function containing the logging call.
levelname	%(levelname)s	Text logging level for the message ('DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL').
levelno	    %(levelno)s	Numeric logging level for the message (DEBUG, INFO, WARNING, ERROR, CRITICAL).
lineno	    %(lineno)d	Source line number where the logging call was issued (if available).
module	    %(module)s	Module (name portion of filename).
msecs	    %(msecs)d	Millisecond portion of the time when the LogRecord was created.
message	    %(message)s	The logged message, computed as msg % args. This is set when Formatter.format() is invoked.
name	    %(name)s	Name of the logger used to log the call.
pathname	%(pathname)s	Full pathname of the source file where the logging call was issued (if available).
process	    %(process)d	Process ID (if available).
processName	%(processName)s	Process name (if available).
thread	    %(thread)d	Thread ID (if available).
threadName	%(threadName)s	Thread name (if available).
    """
    __tablename__ = 'logs'
    id = db.Column(db.BigInteger, primary_key=True)
    date = db.Column(db.DateTime)
    module = db.Column(db.String(64))
    funcname = db.Column(db.String(64))
    fname = db.Column(db.Text)
    level = db.Column(db.String(16))
    levelno = db.Column(db.Integer)
    lineno = db.Column(db.Integer)
    pathname = db.Column(db.Text)
    process = db.Column(db.Integer)
    thread_ = db.Column(db.BigInteger)
    threadname = db.Column(db.String(64), nullable=True)
    message = db.Column(db.Text)

    def __init__(self,
                 date=None,
                 module=None,
                 fname=None,
                 level=None,
                 levelno=None,
                 lineno=None,
                 pathname=None,
                 process=None,
                 thread_=None,
                 threadname=None,
                 funcname=None,
                 message=None):
        self.date = date
        self.module = module
        self.fname = fname
        self.level = level
        self.levelno = levelno
        self.lineno = lineno
        self.pathname = pathname
        self.process = process
        self.thread_ = thread_
        self.threadname = threadname
        self.funcname = funcname
        self.message = message

def relative_url(path):
    def check_in_path(path, fname):
        # { find . > files_and_folders 2> >(grep -v 'Permission denied' >&2); }
        cmd = '{{ find {} 3>&2 2>&1 1>&3 | grep -v \'Permission denied\' >&3; }} 3>&2 2>&1 | egrep "{}$"'
        _path = compose([
            lambda s: s.replace(r'/', r'[/]'),
            lambda s: s.replace(r'.', r'[.]')],
            fname)
        try:
            cmd_format = cmd.format(path, _path)
            p = subprocess.Popen(cmd_format, shell=True, stdout=subprocess.PIPE)
            c, e = p.communicate()
            if c:
                return c.split('\n')[0].strip()
            else:
                return False
        except StopIteration as e:
            return False

    fname = path
    path = os.getcwd()
    while path:
        res = check_in_path(path, fname)
        if res:
            return res
        path = os.path.split(path)[0]
    return False


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
    # need to define your own engine instance :)
    return SessionManager(engine=engine)


class LoggerFormatter(logging.Formatter):
    def __init__(self,
                 fmt='[+] %(asctime)s [PID:%(process)s] |%(levelname)s| %(module)s: ~|~%(message)s',
                 datefmt='[%02d/%s/%04d:%02d:%02d:%02d]'):
        super(LoggerFormatter, self).__init__(fmt=fmt, datefmt=datefmt)

    def formatTime(self, record, datefmt=None):
        return self.time()

    def time(self):
        """Return now() in Apache Common Log Format (no timezone)."""
        now = datetime.datetime.now()
        monthnames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun',
                      'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
        month = monthnames[now.month - 1].capitalize()
        return ('[%02d/%s/%04d:%02d:%02d:%02d]' %
                (now.day, month, now.year, now.hour, now.minute, now.second))

    def format(self, record, sep='~|~'):
        fmt = super(LoggerFormatter, self).format(record)
        if len(fmt) > 2001:
            fmt = ''.join([fmt[:1000],
                           '\n\t... \n\t<snip>\n\t...\n',
                           fmt[-1000:]])

        vals, rst = fmt.split(sep)
        stuff = map(lambda s: s.strip(), vals.split())
        name = stuff[-1].upper()
        fst = stuff[:-1]
        otherstuff, lvl = ' '.join(fst[:-1]), fst[-1]
        fst_str = '{}{:-<12}>'.format(otherstuff, lvl)
        tofmt = ' '.join([fst_str, name]), rst
        res = '{:.<80}{}'.format(*tofmt)
        return res


loggers = {}


class DatabaseFormatter(logging.Formatter):
    def __init__(self):
        """
asctime	    %(asctime)s	Human-readable time when the LogRecord was created. By default this is of the form ���2003-07-08 16:49:45,896��� (the numbers after the comma are millisecond portion of the time).
created	    %(created)f	Time when the LogRecord was created (as returned by time.time()).
exc_info	You shouldn���t need to format this yourself.	Exception tuple (�� la sys.exc_info) or, if no exception has occurred, None.
filename	%(filename)s	Filename portion of pathname.
funcName	%(funcName)s	Name of function containing the logging call.
levelname	%(levelname)s	Text logging level for the message ('DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL').
levelno	    %(levelno)s	Numeric logging level for the message (DEBUG, INFO, WARNING, ERROR, CRITICAL).
lineno	    %(lineno)d	Source line number where the logging call was issued (if available).
module	    %(module)s	Module (name portion of filename).
msecs	    %(msecs)d	Millisecond portion of the time when the LogRecord was created.
message	    %(message)s	The logged message, computed as msg % args. This is set when Formatter.format() is invoked.
name	    %(name)s	Name of the logger used to log the call.
pathname	%(pathname)s	Full pathname of the source file where the logging call was issued (if available).
process	    %(process)d	Process ID (if available).
processName	%(processName)s	Process name (if available).
thread	    %(thread)d	Thread ID (if available).
threadName	%(threadName)s	Thread name (if available).
        """
        self.fmtd = dict(
            date='created',
            module='module',
            fname='filename',
            level='levelname',
            levelno='levelno',
            lineno='lineno',
            pathname='pathname',
            process='process',
            thread_='thread',
            threadname='threadName',
            funcname='funcName',
            message='message'
        )
        super(DatabaseFormatter, self).__init__()

    def format(self, record):
        recordd = valmap(lambda v: getattr(record, v), self.fmtd)
        recordd['date'] = datetime.datetime.fromtimestamp(float(recordd['date']))
        msg = recordd['message']
        text_max_insert_size_margin = 1710
        half = text_max_insert_size_margin / 2
        if len(msg) > text_max_insert_size_margin:
            recordd['message'] = ''.join([msg[:half],
                                          '\n\t...\n\t<snip>\n\t...\n',
                                          msg[-half:]])
        return recordd


class DatabaseHandler(logging.Handler):

    def emit(self, record):
        while True:

            try:
                with sm() as session:
                    log = Log(**self.format(record))
                    session.add(log)
                break

            except InternalError:
                continue


def get_logger(log_file=None):
    global loggers # yeah, I know, I know, ewww global.  This is necessary so that you're only ever using ONE
    # logger instance, otherwise you get duplicate logging messages.  Blame Python :P

    if loggers:
        return loggers['logger']
    else:
        logger = logging.getLogger()

        fhandler = handlers.RotatingFileHandler(log_file, maxBytes=(1024 * 1000 * 10), backupCount=10)
        shandler = logging.StreamHandler()
        dbhandler = DatabaseHandler()

        fmter = LoggerFormatter()

        fhandler.setFormatter(fmter)
        shandler.setFormatter(fmter)
        dbhandler.setFormatter(DatabaseFormatter())

        logger.addHandler(fhandler)
        logger.addHandler(shandler)
        logger.addHandler(dbhandler)

        logger.setLevel(logging.DEBUG)

    loggers['logger'] = logger

    return get_logger()


logger = get_logger(relative_url('data/run.log'))
