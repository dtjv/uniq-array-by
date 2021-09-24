# uniq-array-by

Create an array of unique values by object property.

> This package is [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) only.

## Install

```
$ npm install @dtjv/uniq-array-by
```

## Usage

```javascript
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

## API

### uniqArrayBy(array, property?)

Returns a new array of unique values from given `array`.

#### array

Type: `unknown[]`\
Default: `[]`

An array of values.

#### property

Type: `string | Function`\
Default: `(v) => v`

The property of an `array` item.

A string can be a [dot path](https://github.com/sindresorhus/dot-prop) to a
nested object property.

A function is called on each item of `array` to generate uniqueness of item.
It is invoked with one argument - an `array` item. **The order of result values
is determined by the order they occur in `array`**.

## Author

- [David Valles](https://dtjv.io)

## License

[MIT License](LICENSE)
