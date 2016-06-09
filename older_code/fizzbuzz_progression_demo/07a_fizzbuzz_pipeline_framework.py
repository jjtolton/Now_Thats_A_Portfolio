__author__ = 'jay'

import itertools as it


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

            # ----------------------- #
            #  == auxiliary funcs ==  #
            # ----------------------- #


def word_adder(word, condition):
    def inner(stream):
        for n, printout in stream:
            if condition(n):
                printout.append(word)
            yield n, printout

    return inner


def selfie():
    def inner(stream):
        for n, printout in stream:
            printout.append(n)
            yield n, printout

    return inner


if __name__ == '__main__':
    stream_input = [(x, []) for x in range(20)]
    pipeline = DataPipeline(stream_input)
    pipeline.stream(
        selfie(),
        word_adder(word='Fizz!', condition=lambda x: x % 3 == 0),
        word_adder(word='Buzz!', condition=lambda x: x % 5 == 0),
    )

    for _, printout in pipeline():
        for item in printout:
            print item,
        print ''
