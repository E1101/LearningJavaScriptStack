'use strict'

const add = require('../add')

test('throw when inputs are not numbers', async () => {
  expect(() => add('5', '5')).toThrowError(
    Error('inputs must be numbers')
  )
  expect(() => add(5, '5')).toThrowError(
    Error('inputs must be numbers')
  )
  expect(() => add('5', 5)).toThrowError(
    Error('inputs must be numbers')
  )
  expect(() => add({}, null)).toThrowError(
    Error('inputs must be numbers')
  )
})

test('adds two numbers', async () => {
  expect(add(5, 5)).toStrictEqual(10)
  expect(add(-5, 5)).toStrictEqual(0)
})

// we always have to use jest executable to run tests, test, expect would be available on execute time
// > ./node_modules/.bin/jest test/add.test.js
