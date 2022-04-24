const assert = require('assert')

const add = (a, b) => {
  if (
    typeof a !== 'number'
    || typeof b !== 'number'
  )
    throw new TypeError('inputs must be numbers')

  return a + b
}

// notice that invocation of `add` is wrapped inside another function
assert.throws(() => add('5', '5'), TypeError('inputs must be numbers'))
assert.doesNotThrow(() => add(5, 5))
