concept library
========

提供了很多基础的`concept`
- [Concepts library (since C++20) - cppreference.com](https://en.cppreference.com/w/cpp/concepts)


## Core language concepts

```plaintext
same_as
specifies that a type is the same as another type

derived_from
specifies that a type is derived from another type

convertible_to
specifies that a type is implicitly convertible to another type

common_reference_with
specifies that two types share a common reference type

common_with
specifies that two types share a common type

integral
specifies that a type is an integral type

signed_integral
specifies that a type is an integral type that is signed

unsigned_integral
specifies that a type is an integral type that is unsigned

floating_point
specifies that a type is a floating-point type

assignable_from
specifies that a type is assignable from another type

swappable
swappable_with
specifies that a type can be swapped or that two types can be swapped with each other

destructible
specifies that an object of the type can be destroyed

constructible_from
specifies that a variable of the type can be constructed from or bound to a set of argument types

default_initializable
specifies that an object of a type can be default constructed

move_constructible
specifies that an object of a type can be move constructed

copy_constructible
specifies that an object of a type can be copy constructed and move constructed
```

## Comparison concepts

```plaintext
boolean-testable
specifies that a type can be used in Boolean contexts
(exposition-only concept)
equality_comparable
equality_comparable_with
specifies that operator == is an equivalence relation
totally_ordered
totally_ordered_with
specifies that the comparison operators on the type yield a total order
Defined in header <compare>
three_way_comparable
three_way_comparable_with
specifies that operator <=> produces consistent result on given types
```

## Object concepts
```plaintext
movable
specifies that an object of a type can be moved and swapped
copyable
specifies that an object of a type can be copied, moved, and swapped
semiregular
specifies that an object of a type can be copied, moved, swapped, and default constructed
regular
specifies that a type is regular, that is, it is both semiregular and equality_comparable
```

## Callable concepts

```plaintext
invocable
regular_invocable
specifies that a callable type can be invoked with a given set of argument types
predicate
specifies that a callable type is a Boolean predicate
relation
specifies that a callable type is a binary relation
equivalence_relation
specifies that a relation imposes an equivalence relation
strict_weak_order
specifies that a relation imposes a strict weak ordering
```
