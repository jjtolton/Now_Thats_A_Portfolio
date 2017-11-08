"""
#############
# Dev Notes #
#############

Python Version = 3.6.2

This is an example of the Universal function or "message passing" pattern
(see Structure and Interpretation of Computer Programs)-- note that it is NOT
the same as OOP even though it's using classes as universal functions :P
there's much better builtin support for Python class method operator overloading
without having to rewrite the "print" function just to support universal functions

#######################
# Problem description # Source: http://codingdojo.org/kata/TexasHoldEm/
#######################

You work for a cable network; specifically, you are the resident hacker for a Texas Hold’Em Championship show.

The show’s producer has come to you for a favor. It seems the play-by-play announcers just can’t think very fast. All beauty, no brains. The announcers could certainly flap their jaws well enough, if they just knew what hands the players were holding and which hand won the round. Since this is live TV, they need those answers quick. Time to step up to the plate. Bob, the producer, explains what you need to do.

BOB: Each player’s cards for the round will be on a separate line of the input. Each card is a pair of characters, the first character represents the face, the second is the suit. Cards are separated by exactly one space. Here’s a sample hand.

  Kc 9s Ks Kd 9d 3c 6d
  9c Ah Ks Kd 9d 3c 6d
  Ac Qc Ks Kd 9d 3c
  9h 5s
  4d 2d Ks Kd 9d 3c 6d
  7s Ts Ks Kd 9d

YOU: Okay, I was going ask what character to use for 10, but I guess ’T’ is it. And ‘c’, ’d’, ‘h’ and ’s’ for the suits, makes sense. Why aren’t seven cards listed for every player?

BOB: Well, if a player folds, only his hole cards and the community cards he’s seen so far are shown.

YOU: Right. And why did the fifth player play with a 4 and 2? They’re suited, but geez, talk about risk…

BOB: Stay on topic. Now, the end result of your code should generate output that looks like this:

  Kc 9s Ks Kd 9d 3c 6d Full House (winner)
  9c Ah Ks Kd 9d 3c 6d Two Pair
  Ac Qc Ks Kd 9d 3c
  9h 5s
  4d 2d Ks Kd 9d 3c 6d Flush
  7s Ts Ks Kd 9d

YOU: Okay, so I repeat the cards, list the rank or nothing if the player folded, and the word “winner” in parenthesis next to the winning hand. Do you want the cards rearranged at all?

BOB: Hmmm… we can get by without it, but if you have the time, do it. Don’t bother for folded hands, but for ranked hands, move the cards used to the front of the line, sorted by face. Kickers follow that, and the two unused cards go at the end, just before the rank is listed.

YOU: Sounds good. One other thing, I need to brush up on the hand ranks. You have any good references for Texas Hold’Em?

BOB: Yeah, do an internet search on Poker Hand Rankings. And if you need it, the Rules of Texas Hold’Em. While ranking, don’t forget the kicker, the next highest card in their hand if player’s are tied. And of course, if – even after the kicker – player’s are still tied, put “(winner)” on each appropriate line of output.

YOU: Ok. I still don’t understand one thing…

BOB: What’s that?

YOU: Why he stayed in with only the 4 and 2 of diamonds? That’s just…

BOB: Hey! Show’s on in ten minutes! Get to work!


"""
import collections
from functools import partial, reduce, lru_cache


def card(c):
    return Card(c)


def hand(cards, handlen=7):
    return Hand(cards, handlen=handlen)


def rank(hand):
    return hand.rank()


def winner(game):
    return game.winner()


def score(x):
    return x.score()


def suit(x):
    return x.suit()


def group(x):
    return x.group()


def counts(x):
    return x.counts()


def flush(x):
    return x.flush()


def straight(x):
    return x.straight()


class Card:
    index = lambda r: '--23456789TJKQA'.index(r)
    labels = {'A': 'Ace',
              'K': 'King',
              'Q': 'Queen',
              'J': 'Jack',
              'T': 'Ten',
              '9': 'Nine',
              '8': 'Eight',
              '7': 'Seven',
              '6': 'Six',
              '5': 'Five',
              '4': 'Four',
              '3': 'Three',
              '2': 'Two'}

    def __init__(self, card):
        self.card = card

    def suit(self):
        return self.card[1].upper()

    def rank(self):
        return self.card[0]

    def score(self):
        return Card.index(rank(self))

    def __repr__(self):
        return self.card

    def __eq__(self, other):
        if score(other) == 0 and score(self) == 0:
            this, that = rank(self), rank(other)
        else:
            this, that = score(self), score(other)

        if this < that: return -1
        if this > that: return 1
        return 0

    def __hash__(self):
        return hash(self.card)

    def __lt__(self, other):

        if score(other) == 0 and score(self) == 0:
            this, that = rank(self), rank(other)
        else:
            this, that = score(self), score(other)

        return that - this


class Hand:
    rules = lambda cards: (
        9 if counts(cards) == (5,) else
        8 if straight(cards) and flush(cards) else
        7 if counts(cards) == (4, 1) else
        6 if counts(cards) == (3, 2) else
        5 if flush(cards) else
        4 if straight(cards) else
        3 if counts(cards) == (3, 1, 1) else
        2 if counts(cards) == (2, 2, 1) else
        1 if counts(cards) == (2, 1, 1, 1) else
        0)

    labels = lambda hand: ({9: "Five of a Kind",
                            8: "Straight Flush",
                            7: "Four of a Kind",
                            6: "Full House",
                            5: "Flush",
                            4: "Straight",
                            3: "Three of a King",
                            2: "Two Pair",
                            1: "Two of a Kind",
                            -1: "Fold"}
                           .get(rank(hand),
                                f"{Card.labels[rank(max(hand.cards, key=score))]} high"))

    def __init__(self, cards, handlen=7):
        self.handlen = handlen
        self.cards = list(map(card, cards.strip().split()))

    @lru_cache()
    def group(self):
        t = reduce(lambda x, y: y(x),
                   [partial(map, score),
                    partial(sorted, reverse=True),
                    lambda x: x[:5],
                    collections.Counter,
                    lambda c: c.most_common(5)],
                   self.cards)
        items, counts = list(zip(*t))
        if items == (14, 5, 4, 3, 2):
            items = (5, 4, 3, 2, 1)
        return counts, items

    @lru_cache()
    def counts(self):
        return self.group()[0]

    @lru_cache()
    def straight(self):
        counts, items = self.group()
        return len(counts) == 5 and max(items) - min(items) == 4

    @lru_cache()
    def flush(self):
        return len(set(map(suit, self.cards))) == 1

    def rank(self):
        return -1 if len(self.cards) < self.handlen else Hand.rules(self)

    def __repr__(self):
        r = ' '.join(map(repr, self.cards))
        return f"{r}: {Hand.labels(self)}"

    def __lt__(self, other):
        if rank(self) - rank(other) == 0:
            this, that = max(map(score, self.cards)), max(map(score, other.cards))
        else:
            this, that = rank(self), rank(other)

        return that - this


class Game:
    def __init__(self, hands, handlen=7):
        self.hands = list(map(lambda h: hand(h, handlen=handlen) if not isinstance(h, Hand) else h, hands))

    def winner(self):
        return max(self.hands, key=rank)

    def __repr__(self):
        hands = sorted(self.hands, key=rank, reverse=True)
        tophand = f"{hands[0]} - winner"
        resthands = '\n'.join(f"{h}" for h in hands[1:])
        return f"{tophand}\n{resthands}"


def test():
    def convert(old, handlen=5):
        return hand(' '.join(b + a for b, a in old), handlen=handlen)

    sf = "6C 7C 8C 9C TC".split()  # Straight Flush
    fk = "9D 9H 9S 9C 7D".split()  # Four of a Kind
    fh = "TD TC TH 7C 7D".split()  # Full House
    s1 = "AS 2S 3S 4S 5C".split()  # A-5 straight
    s2 = "2C 3C 4C 5S 6S".split()  # 2-6 straight
    s3 = "TC JC QC KS AS".split()  # 10-A straight
    tp = "5S 5D 9H 9C 6S".split()  # two pair
    ah = "AS 2S 3S 4S 6C".split()  # A high
    sh = "2S 3S 4S 6C 7D".split()  # 7 high
    fold = "2S 3S".split()

    print(f"sf: {convert(sf)}")
    print(f"fk: {convert(fk)}")
    print(f"fh: {convert(fh)}")
    print(f"s1: {convert(s1)}")
    print(f"s2: {convert(s2)}")
    print(convert(s3))
    print(convert(tp))
    print(convert(ah))
    print(convert(sh))

    print("\nGame Test\n")
    g1 = sf, fk, fh, s1, s2, fold
    print(Game(map(convert, g1), handlen=5))


if __name__ == '__main__':
    test()
