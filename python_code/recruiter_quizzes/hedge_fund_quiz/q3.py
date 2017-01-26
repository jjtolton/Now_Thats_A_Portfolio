


ascii_letters = map(lambda c: chr(c + ord('a')), range(0, 26))

def prime_gen(g):
    def inner(*args, **kwargs):
        r = g(*args, **kwargs)
        r.send(None)
        return r

    return inner


@prime_gen
def chunk(f, size=1024):
    while True:
        rem = yield
        rem = rem or ''
        if len(rem) > 26:
            yield rem
            continue

        letters = f.read(size)
        # Note: next line just added for my testing purposes
        nxt_chunk = ''.join([''.join([c.lower() for c in w if c in ascii_letters]) for w in letters])
        if nxt_chunk:
            yield rem + nxt_chunk
        else:
            yield rem


def biggest(mychunk):
    res = mychunk[:1]
    for letter in mychunk[1:]:
        if letter <= res[-1]:
            return res
        res += letter
    return res


def words(fname):
    with open(fname) as f:
        chunks = chunk(f)
        rem = ''
        while True:
            mychunk = chunks.send(rem)
            if not mychunk:
                break

            seq = biggest(mychunk)
            rem = mychunk[len(seq):]
            yield seq
            next(chunks)


if __name__ == '__main__':
    # I thought about writing a file of random letters and then
    # parsing it to demo, but I figured that's kind of rude since you don't
    # know me yet :P
    # thought of using StringIO, but then I'd have to refactor :O
    # if you have the quiz.txt I sent to Alisa in the same file
    # you can parse that :)

    # print ascii_letters
    for word in words('quiz.txt'):
        print(word)


