from __future__ import division, print_function

import functools
import itertools
import re
from functools import partial

def compose(fns, x=None):
    """Takes a set of functions and returns a fn that is the composition
of those fns.  The returned fn takes a variable number of args,
applies the rightmost of fns to the args, the next
fn (right-to-left) to the result, etc.  If no value is supplied, returns a
stateful transducer"""
    if x is None:
        return partial(compose, fns)

    return reduce(lambda a, b: b(a), fns, x)


def decorator(d):
    "Make function d a decorator: d wraps a function fn."

    def _d(fn):
        return functools.update_wrapper(d(fn), fn)

    return _d

decorator = decorator(decorator)


@decorator
def lazy_set(fn):
    def settify(*args, **kwargs):
        seen = set()
        items = fn(*args, **kwargs)
        for item in items:
            if item in seen:
                continue
            else:
                seen.add(item)
                yield item

    return settify


def words(text): return set(text.split())


winners = words('''washington adams jefferson jefferson madison madison monroe
    monroe adams jackson jackson van-buren harrison polk taylor pierce buchanan
    lincoln lincoln grant grapartnt hayes garfield cleveland harrison cleveland mckinley
    mckinley roosevelt taft wilson wilson harding coolidge hoover roosevelt
    roosevelt roosevelt roosevelt truman eisenhower eisenhower kennedy johnson nixon
    nixon carter reagan reagan bush clinton clinton bush bush obama obama''')

losers = words('''clinton jefferson adams pinckney pinckney clinton king adams
    jackson adams clay van-buren van-buren clay cass scott fremont breckinridge
    mcclellan seymour greeley tilden hancock blaine cleveland harrison bryan bryan
    parker bryan roosevelt hughes cox davis smith hoover landon willkie dewey dewey
    stevenson stevenson nixon goldwater humphrey mcgovern ford carter mondale
    dukakis bush dole gore kerry mccain romney''')

losers = losers - winners


def mistakes(regex, winners, losers):
    "The set of mistakes made by this regex in classifying winners and losers."
    return ({"Should have matched: " + W
             for W in winners if not re.search(regex, W)} |
            {"Should not have matched: " + L
             for L in losers if re.search(regex, L)})


xkcd = "bu|[rn]t|[coy]e|[mtg]a|j|iso|n[hl]|[ae]d|lev|sh|[lnd]i|[po]o|ls"


@lazy_set
def lazy_matches(r, ss):
    for s in ss:
        if re.search(r, s):
            yield s


def lazy_findregex(yes, no, k=4):
    pool = list(lazy_regex_parts(yes, no))
    solution = []

    def score(_part):
        return 4 * len(list(lazy_matches(_part, yes))) - len(_part)

    while yes:
        best = max(pool, key=score)
        solution.append(best)
        yes = yes - set(lazy_matches(best, yes))
        pool = list(lazy_matching_regexes(pool, yes))  # shrinking the set

    return OR(solution)


@lazy_set
def lazy_matching_regexes(rs, ss):
    for r in rs:
        if lazy_matchp(r, ss):
            yield r


def lazy_matching_rsp(rs, ss):
    for r in rs:
        if not lazy_matchp(r, ss):
            return False
    return True


def lazy_matchp(regex, ss):
    for _ in lazy_matches(regex, ss):
        return True
    return False


def lazy_all_match(r, ss):
    for s in ss:
        if not lazy_matchp(r, [s]):
            return False
    return True


def rmatchp(regex, string):
    return bool(re.search(regex, string))


OR = '|'.join  # Join a sequence of strings with '|' between them


@lazy_set
def lazy_regex_parts(yes, no):
    # for _whole in lazy_wholes(yes):
    #     yield _whole

    for _part in itertools.chain(lazy_wholes(yes), lazy_parts(yes)):
        if not lazy_matchp(_part, no):
            yield _part


def allmatch(s, _parts):
    return {p for p in _parts if rmatchp(p, s)}


def wholes(words):
    _wholes = {'^' + w + '$' for w in words}
    return _wholes


def parts(wholes):
    _parts = {d for w in wholes for p in subparts(w) for d in dotify(p)}
    return _parts


def subparts(word, N=4):
    "Return a set of subparts of word: consecutive characters up to length N (default 4)."
    return set(word[i:i + n + 1] for i in range(len(word)) for n in range(N))


def dotify_replace(r):
    return re.sub('[.]{4,}', '.*?.', r)


@lazy_set
def lazy_dotify_replace(rs):
    for r in rs:
        yield dotify_replace(r)


@lazy_set
def lazy_subparts(word, N=4):
    while True:
        try:
            _word = next(word)
            for i in range(len(_word)):
                for n in range(N):
                    yield re.escape(_word[i:i + n + 1])
        except StopIteration:
            raise


def whole(w):
    return '^{}$'.format(w)


@lazy_set
def lazy_wholes(ws):
    for w in ws:
        yield whole(w)


@lazy_set
def lazy_parts(ws):
    trans = compose([lazy_wholes,
                     lazy_subparts,
                     lazy_dotify,
                     lazy_dotify_replace,
                     ])
    for w in trans(ws):
        yield w


def dotify(part):
    "Return all ways to replace a subset of chars in part with '.'."
    choices = map(replacements, part)
    return {cat(chars) for chars in itertools.product(*choices)}


@lazy_set
def lazy_dotify(items):
    for item in items:
        for _item in itertools.product(*map(replacements, item)):
            yield cat(_item)


def lazy_printer(items, phrase='{}'):
    for item in items:
        print('{}'.format(item))
        yield item


def replacements(c): return c if c in '^$' else c + '.'


cat = ''.join


def best_and_results(fn, key, items):
    best = 0
    res = None
    for item in items:
        _res = fn(item)
        score = key(_res, item)
        if score > best:
            best = item
            res = _res
    return best, res


def qmini(exps, escape=False, case_insensitive=False):
    if case_insensitive is True:
        case = lambda s: s.lower()
    else:
        case = lambda x: x

    if escape is True:
        _escape = re.escape
    else:
        _escape = lambda x: x

    fmt = compose([case, _escape])
    minified = map(lambda x: fmt(x[0]), exps)

    return '|'.join(sorted(set(minified)))


def deviations(word, d=1):
    """hawk, d=1 -> haw, awk
       hawk d=2 -> ha, aw, wk
       hawk d=3 -> h, a, w, k
    """
    wlen = len(word)
    dlen = wlen - d
    ps = {w
          for i in range(wlen)
          for n in range(wlen)
          for w in (lambda x: [x[i:i + n + 1]])(word)
          if len(w) == dlen}
    return ps


def strong_match(exps, d=1):
    devs = alldevs(exps, d)
    exps = exps - devs
    return lazy_findregex(exps, devs)


def alldevs(exps, d=1):
    devs = {dev for e in exps for dev in deviations(e, d)}
    return devs


if __name__ == '__main__':
    print(lazy_findregex(winners, losers))
