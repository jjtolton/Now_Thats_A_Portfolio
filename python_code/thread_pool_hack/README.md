# hacking ThreadPoolExecutor

If you're like me, you're a bit paranoid about concurrency.  How do I know
that all my threads/processes are going to be cleaned up??  Will a long running 
process drag down my web server??

The answer is: log them and kill them if they're taking too long.

That being said, killing them if they're logged isn't so bad, 
but logging them is a bit trickier.  

Here is a hack of ThreadPoolExecutor using the mysterious and powerful
"descriptor protocol", one of Python's least known and least understood features,
to transparently log all threads created using it.   