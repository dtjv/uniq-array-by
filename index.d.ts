/**
Create an array of unique values by object property.

@param array - An array of values.
@param property - The property of an `array` item.  A string can be a [dot path](https://github.com/sindresorhus/dot-prop) to a nested object property. A function is invoked with one argument - an `array` item. **The order of result values is determined by the order they occur in `array`**.
@returns Returns a new array of unique values from given `array`.

@example
```
import uniqArrayBy from '@dtjv/uniq-array-by'

// unique values by nested property
uniqArrayBy(
  [
    { a: { b: 1, c: 0 } },
    { a: { b: 2, c: 1 } },
    { a: { b: 1, c: 2 } },
    { a: { b: 2, c: 1 } },
  ],
  'a.b'
)
//-> [ { a: { b: 1, c: 2 } }, { a: { b: 2, c: 1 } } ]

// unique values by callback
uniqArrayBy(
  [
    { a: { b: 1, c: 0 } },
    { a: { b: 2, c: 1 } },
    { a: { b: 1, c: 2 } },
    { a: { b: 2, c: 1 } },
  ],
  (item) => item.a.b
)
//-> [ { a: { b: 1, c: 2 } }, { a: { b: 2, c: 1 } } ]
```
*/
export default function uniqArrayBy<T>(
  array: readonly T[],
  property?: string | ((item: T) => unknown)
): T[]
