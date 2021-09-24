/* global test, expect */

import uniqArrayBy from './index.js'

test('should handle no array', () => {
  expect(uniqArrayBy()).toEqual([])
})

test('should handle empty array', () => {
  expect(uniqArrayBy([])).toEqual([])
})

test('should return a new array', () => {
  const array = [1, 2, 1, 2]
  expect(uniqArrayBy(array)).not.toBe(array)
})

test('should handle non-existent property', () => {
  expect(uniqArrayBy([{ a: 1 }, { a: 1 }], 'b')).toEqual([])
  expect(uniqArrayBy([{ a: 1 }, { a: 1 }], (v) => v.b)).toEqual([])
})

test('should return unique values by property', () => {
  const array = [
    { name: 'joe', age: 20 },
    { name: 'tom', age: 25 },
    { name: 'joe', age: 25 },
    { name: 'sal', age: 28 },
    { name: 'tom', age: 25 },
  ]
  const expected = [
    { name: 'joe', age: 25 },
    { name: 'tom', age: 25 },
    { name: 'sal', age: 28 },
  ]
  expect(uniqArrayBy(array, 'name')).toEqual(expected)
})

test('should return unique values by callback', () => {
  const array = [
    { name: 'joe', age: 20 },
    { name: 'tom', age: 25 },
    { name: 'joe', age: 25 },
    { name: 'sal', age: 28 },
    { name: 'tom', age: 25 },
  ]
  const expected = [
    { name: 'joe', age: 25 },
    { name: 'tom', age: 25 },
    { name: 'sal', age: 28 },
  ]
  expect(uniqArrayBy(array, (v) => v.name)).toEqual(expected)
})

test('should return unique scalar values by identity', () => {
  expect(uniqArrayBy([1, 2, 1, 2])).toEqual([1, 2])
})

test('should return unique object values by reference', () => {
  const array = [
    { name: 'joe', age: 20 },
    { name: 'tom', age: 25 },
    { name: 'joe', age: 25 },
    { name: 'sal', age: 28 },
    { name: 'tom', age: 25 },
  ]
  expect(uniqArrayBy(array)).toEqual(array)
})
