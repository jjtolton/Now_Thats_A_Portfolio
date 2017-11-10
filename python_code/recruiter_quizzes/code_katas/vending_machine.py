"""
#############
# dev notes #
#############

Python version = 3.6.2

This hilariously overengineered example demonstrates a data driven CQRS "style" "architecture" implemented
with a universal function message passing pattern.  The state is an aggregation of individual events that occur.
In a full architecture, the Events deque would be either a persistent DB or perhaps something like Redis or Kafka
(if you're feeling squirrely) while Vending would absolutely be something like Redis or Kafka.  The State would
also most likely be a persistent DB of some sort.

Also note the utility functions would be pulled from a seperate library, but I've rewritten them here so you
don't need any dependencies to run this file.

#######################
# problem description #
#######################

https://github.com/guyroyse/vending-machine-kata

Vending Machine Kata
====================

In this exercise you will build the brains of a vending machine.  It will accept money, make change, maintain
inventory, and dispense products.  All the things that you might expect a vending machine to accomplish.

The point of this kata to to provide a larger than trivial exercise that can be used to practice TDD.  A significant
portion of the effort will be in determining what tests should be written and, more importantly, written next.

Features
========

Accept Coins
------------

_As a vendor_
_I want a vending machine that accepts coins_
_So that I can collect money from the customer_

The vending machine will accept valid coins (nickels, dimes, and quarters) and reject invalid ones (pennies).  When a
valid coin is inserted the amount of the coin will be added to the current amount and the display will be updated.
When there are no coins inserted, the machine displays INSERT COIN.  Rejected coins are placed in the coin return.

NOTE: The temptation here will be to create Coin objects that know their value.  However, this is not how a real
  vending machine works.  Instead, it identifies coins by their weight and size and then assigns a value to what
  was inserted.  You will need to do something similar.  This can be simulated using strings, constants, enums,
  symbols, or something of that nature.

Select Product
--------------

_As a vendor_
_I want customers to select products_
_So that I can give them an incentive to put money in the machine_

There are three products: cola for $1.00, chips for $0.50, and candy for $0.65.  When the respective button is pressed
and enough money has been inserted, the product is dispensed and the machine displays THANK YOU.  If the display is
checked again, it will display INSERT COIN and the current amount will be set to $0.00.  If there is not enough money
inserted then the machine displays PRICE and the price of the item and subsequent checks of the display will display
either INSERT COIN or the current amount as appropriate.

Make Change
-----------

_As a vendor_
_I want customers to receive correct change_
_So that they will use the vending machine again_

When a product is selected that costs less than the amount of money in the machine, then the remaining amount is placed
in the coin return.

Return Coins
------------

_As a customer_
_I want to have my money returned_
_So that I can change my mind about buying stuff from the vending machine_

When the return coins button is pressed, the money the customer has placed in the machine is returned and the display shows
INSERT COIN.

Sold Out
--------

_As a customer_
_I want to be told when the item I have selected is not available_
_So that I can select another item_

When the item selected by the customer is out of stock, the machine displays SOLD OUT.  If the display is checked again,
it will display the amount of money remaining in the machine or INSERT COIN if there is no money in the machine.

Exact Change Only
-----------------

_As a customer_
_I want to be told when exact change is required_
_So that I can determine if I can buy something with the money I have before inserting it_

When the machine is not able to make change with the money in the machine for any of the items that it sells, it will
display EXACT CHANGE ONLY instead of INSERT COIN."""
import collections
import copy
import functools
import itertools
import pprint
import random
import types
from functools import reduce

########################
# MESSAGE/EVENT STREAM #
########################

Events = collections.deque()


#########
# UTILS #
#########

class NamespacedMeta(type):
    def __init__(cls, o: object, bases, ns):
        super().__init__(o)

        for f, n in cls.__dict__.items():
            if isinstance(f, types.MethodType):
                setattr(cls, n, decorator(staticmethod)(f))


class Namespaced(metaclass=NamespacedMeta):
    """Inheriting from this will make all methods of the class static methods."""
    pass


def first(coll):
    return next(iter(coll))


def rest(coll):
    def dispatch(coll):
        if isinstance(coll, collections.MutableMapping):
            return lambda: rest(x for x in coll)
        if isinstance(coll, collections.Sequence):
            return lambda: coll[1:]
        if isinstance(coll, types.GeneratorType):
            return lambda: rest(list(coll))

    return dispatch(coll)()


def get(coll, x, not_found=None):
    def dispatch(coll):
        if isinstance(coll, collections.Sequence):
            return lambda x: coll[x]
        if isinstance(coll, collections.MutableMapping):
            return lambda x: coll.get(x, not_found)
        else:
            return lambda x: getattr(coll, x) if hasattr(coll, x) else not_found

    return dispatch(coll)(x)


def update(coll, k, f, *args, **kwargs):
    def dispatch(coll):
        if isinstance(coll, collections.MutableMapping):
            return lambda: {a: b for a, b in itertools.chain(coll.items(), [(k, f(get(coll, k), *args, **kwargs))])}
        if isinstance(coll, list):
            return lambda: coll[:k] + [f(get(coll, k), *args, **kwargs)] + coll[k + 1:]
        if isinstance(coll, tuple):
            return lambda: coll[:k] + (f(get(coll, k), *args, **kwargs),) + coll[k + 1:]
        if isinstance(coll, str):
            return lambda: coll[:k] + f(get(coll, k), *args, **kwargs) + coll[k + 1:]
        else:

            def setreturn():
                c = copy.deepcopy(coll)
                setattr(c, k, f(getattr(coll, k), *args, **kwargs))
                return c

            return setreturn

    return dispatch(coll)()


def compose(fs, x=None):
    return reduce(lambda x, y: y(x), fs, x)


def get_in(coll, keys, not_found=None):
    if len(keys) == 1:
        return get(coll, first(keys), not_found)
    else:
        return get_in(get(coll, first(keys)), rest(keys))


def update_in(coll, keys, f, *args, **kwargs):
    if len(keys) == 1:
        return update(coll, first(keys), f, *args, **kwargs)
    else:
        return update_in(coll, [first(keys)], update_in, rest(keys), f, *args, **kwargs)


def assoc(coll, k, v):
    return update(coll, k, lambda *args, **kwargs: v)


def assoc_in(coll, keys, v):
    if len(keys) == 1 and isinstance(keys, (list, tuple)):
        return assoc(coll, first(keys), v)
    elif isinstance(keys, str):
        return assoc_in(coll, [keys], v)
    else:
        return assoc_in(coll, first(keys), assoc_in(get(coll, first(keys)), rest(keys), v))


def decorator(d):
    "Make function d a decorator: d wraps a function fn."

    def _d(fn):
        return functools.update_wrapper(d(fn), fn)

    return _d


decorator = decorator(decorator)


#################
# UNIVERSAL FNS #
#################

def event(events, e):
    events.append(e)
    return events


def update_events(x, *args, **kwargs):
    return x.update(*args, **kwargs)


def handle(x, *args, **kwargs):
    return x.handle(*args, **kwargs)


def value(*x):
    if len(x) == 1:
        coin = first(x)
        return coin.value()
    return sum(value(coin) for coin in x)


#################
# STATE CLASSES #
#################

class Bank:
    __slots__ = ['coins', 'holding']

    def __init__(self, coins=None, holding=None):
        self.coins = coins or []
        self.holding = holding or []

    def __getitem__(self, item):
        return self.__dict__[item]

    def get(self, x, not_found=None):
        return getattr(self, x) if hasattr(self, x) else not_found

    def __repr__(self):
        return f"Bank(coins={self.coins}, holding={self.holding})"


class Customer:
    __slots__ = ['coins', 'drinks']

    def __init__(self, coins=None, drinks=None):
        self.drinks = drinks or []
        self.coins = coins or []

    def __repr__(self):
        return f"Customer(coins={self.coins} drinks={self.drinks})"


class Beverage:
    drinks = {}
    __slots__ = ['name', 'price']

    def __init__(self, name, price):
        self.name = name
        self.price = price

    def __repr__(self):
        return f"Beverage({self.name}, {self.price})"

    def value(self):
        return self.price


Beverage.drinks = {Beverage('coke', 1.0), Beverage('sprite', 1.25)}


class Display:
    sold_out = 'Sold Out'
    insert_coins = 'Insert Coins'
    exact_change = 'Exact Change'

    def __init__(self, selection=None):
        self.selection = selection or self.insert_coins

    def __repr__(self):
        return f"Display(<{self.selection}>)"


class Coin:
    __slots__ = ['weight', 'size', 'name']

    def __init__(self, name, weight, size):
        self.size = size
        self.weight = weight
        self.name = name

    def __repr__(self):
        return self.name

    def value(self):
        return self.weight


class State:
    sold_out_message = 'Sold Out'
    display = 'events'
    beverage = 'beverage'
    return_ = 'return'
    add = 'add'
    machine = 'machine',
    dispense = 'dispense'
    coins = 'coins'
    vend = 'vend'

    def __init__(self, events, initial=None):
        self.events = events
        self.initial = self.build_state([], initial)

    def build_state(self, events, initial):
        initial = initial or {'bank': Bank(),
                              'customer': Customer(),
                              'beverage': {drink.name: drink for drink in Beverage.drinks},
                              'display': Display(),
                              'selection': 'coke'}

        s = self
        for event in events:
            s = update_events(s, initial, event)
            initial = s.initial

        return initial

    def dispatch(self, event):
        d = {'add': Add,
             'return': Return,
             'dispense': Dispense,
             'vend': Vend}[event.event]
        return d

    def update(self, initial, event):
        action = self.dispatch(event)(event, initial)
        return handle(action, event, self)

    def enough_money(self):
        coin_value = value(*self.initial['bank'].coins)
        drink_value = value(self.initial['beverage'][self.initial['selection']])
        res = coin_value >= drink_value
        return res

    def __repr__(self):
        return f"State({self.initial})"


#################
# EVENT CLASSES #
#################

class Event:
    __slots__ = ['event', 'attribute', 'value', 'time']

    def __init__(self, event, attribute, value, time):
        self.time = time
        self.value = value
        self.attribute = attribute
        self.event = event

    def __repr__(self):
        return f"Event([{self.event} {self.attribute} {self.value} {self.time}])"


class Action:
    def __init__(self, event, state):
        self.event = event
        self.state = state

    def handle(self, *args, **kwargs):
        raise NotImplementedError


class Add(Action):
    def handle(self, event, state):
        res = update_in(state,
                        ['initial', 'bank', 'coins'],
                        lambda v, x: v + [x], event.value)
        return res


class Return(Action):
    def handle(self, event, state):
        holding_ = ['initial', 'bank', 'coins']
        holding = get_in(state, holding_)
        return compose([
            lambda s: assoc_in(s, holding_, []),
            lambda s: update_in(s, ['initial', 'customer', 'coins'], lambda x: x + holding)
        ], state)


class Dispense(Action):
    def handle(self, event, state):
        holding = 'initial bank holding'.split()
        coins = 'initial bank coins'.split()
        selection = 'initial selection'.split()
        cdrinks = 'initial customer drinks'.split()
        deposit = get_in(state, holding)
        beverage = get_in(state, ['initial', 'beverage', get_in(state, selection)])
        cbevs = get_in(state, cdrinks)
        return compose([
            lambda s: assoc_in(s, holding, []),
            lambda s: update_in(s, coins, lambda x, v: x + v, deposit),
            lambda s: assoc_in(s, cdrinks, list(set(cbevs) | {beverage}))
        ], state)


class Vend(Action):
    def handle(self, events, state):
        holding = 'initial bank holding'.split()
        coins = 'initial bank coins'.split()
        selection = 'initial selection'.split()
        cdrinks = 'initial customer drinks'.split()

        coins_value = get_in(state, coins)
        bev_sel = get_in(state, ['initial', 'beverage', get_in(state, selection)])
        if state.enough_money():
            return compose([
                lambda s: update_in(s, holding, lambda x, v: x + v, coins_value),
                lambda s: assoc_in(s, coins, []),
                lambda s: update_in(s, cdrinks, lambda x, v: x + [v], bev_sel)
            ], state)
        else:
            return state


###################
# MESSAGING CLASS #
###################

# noinspection PyMethodParameters
class Vending(Namespaced):
    def modify(events, action, attribute, value):
        # noinspection PyTypeChecker
        return event(events, Event(action, attribute, value, len(events)))

    def modcoins(events, action, value):
        return Vending.modify(events, action, State.coins, value)

    def add_coins(events, *coins):
        return reduce(lambda events, coin: Vending.modcoins(events, State.add, coin), coins, events)

    def return_coins(events):
        return Vending.modcoins(events, State.return_, True)

    def dispense(events):
        return Vending.modify(events, 'dispense', 'beverage', True)

    def vend(events):
        return Vending.modify(events, action=State.vend, attribute=State.machine, value=True)

    def select(events, beverage):
        return Vending.modify(events, action='select', attribute='beverage', value=beverage)


coins = [Coin('Q', .25, .25), Coin('N', .05, .05)]


def main():
    choices = coins

    # ## add some money
    reduce(lambda x, y: Vending.add_coins(x, y), [random.choice(choices) for _ in range(5)], Events)

    # ## return coins to customer
    Vending.return_coins(Events)

    # ## sudo dispense drink
    Vending.dispense(Events)

    # ## vending when not enough money
    Vending.vend(Events)

    # ## add lots more money
    reduce(lambda x, y: Vending.add_coins(x, y), [random.choice(choices) for _ in range(20)], Events)

    # ## vending when enough money
    Vending.vend(Events)

    # ## show event log
    pprint.pprint(Events)

    # ## build the state from the events
    pprint.pprint(State(Events).build_state(Events, None))


if __name__ == '__main__':
    main()
