import copy

__author__ = 'jay'

import itertools as it
from types import GeneratorType


class DataPipeline(object):
    """Object to facilitate the processing of data.

    Usage:    pipeline_a = DataPipeline(source=data_source)
              pipeline_a.stream(procA(),
                                procB(),
                                procC(),
              output = pipeline_a()

    Parameters:

    source: Iterable or generator
    Data Processes:  Closure function that wraps a generator
    Output:  Generator modified by all the steps in DatePipeline.stream
    Thought process:
                __________        __________       __________
    source --> | processA | ---> | processB | --> | processC |   -->  output

    Source should be some type of iterable or generator.
    Each process should operate on only ONE item of the source at a time.


    """

    def __init__(self, source=None):
        self.source = source
        self.data_stream = []
        self.called = False
        if self.source:
            self.data_stream.append(self.source)

    def _combine_generators(self):
        """
        Given generator functions that accept generators as an argument
        and return generator functions, combines them into a single generator.

        Usage:  generators = [source, g, x, y, z]
                -->     z(y(x(g(source))))

        """
        self.data_stream = reduce(lambda x, y: y(x), self.data_stream)

    def __call__(self, *args, **kwargs):
        """Return combined generators.  Like a generator, can only be used once.  If multiple DataPipelines are needed,
        use DatePipeline.fork API"""
        if not self.called:
            self._combine_generators()
            self.called = True

        elif self.called is True:
            raise AttributeError("Data stream exhausted")

        for x in it.tee(self.data_stream, 1)[0]:
            yield x

    def fork(self, n=2):
        """
        Returns n forks of DatePipeline object, exhausts original DatePipeline
        Usage:  a = DatePipeline()
                b, c = a.fork(2)
        """
        self._combine_generators()
        self.called = True
        streams = it.tee(self.data_stream, n)
        return [DataPipeline(s) for s in streams]

    def __iter__(self):
        return self()

    def stream(self, *pipeline):
        """Sequentially applies generator operations to a data stream.

        Usage:  a = DataPipeline(source)
                a.stream(modA(),
                         modB(),
                         modC())
                a() --->  modC(modB(modA(source)))

        """
        for item in pipeline:
            self.data_stream.append(item)



if __name__ == '__main__':
    #Example usages

    #Test function
    def add_nums(addendum):
        def do(nums):
            i = 0
            for n in nums:
                i += 1
                yield (i, n + addendum)

        return do

    #Test function
    def list_all_elements():
        def yielder(stream):
            lst = []
            for x in stream:
                if hasattr(x, '__iter__'):
                    for y in yielder(x):
                        lst.append(y)
                else:
                    lst.append(x)
            for x in lst:
                yield x

        return yielder

    #Test function
    def print_pot_pie():
        def pot_pie(s):
            for x in s:
                print "{} pot pie!".format(x)
                yield x

        return pot_pie

    #Test class
    class Spacer(object):
        spaces = 0

        @staticmethod
        def space(n=0):
            Spacer.spaces += 1

            def _space(stream):
                i = 0
                for x in stream:
                    print "{}{}{}!!!".format('\t' * Spacer.spaces, ' ' * i, x + n)
                    i += 1
                    Spacer.spaces += 1
                    yield x

            return _space

    a = DataPipeline(range(5))
    a.stream(
        add_nums(5),
        print_pot_pie(),
        list_all_elements())

    b, c = a.fork(2)

    for x, y in it.product(b, list(c)[::-1]):
        print x, y