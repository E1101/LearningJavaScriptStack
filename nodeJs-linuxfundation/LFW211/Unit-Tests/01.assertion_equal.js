const assert = require('assert')
const add = require('./get-add-from-somewhere.js')

const result = add(2, 2)
assert.equal(typeof result, 'number')
assert.equal(result, 4)
// or
assert.strictEqual(add(2, 2), 4)
// or
assert.strict.equal(add(2, 2), 4)
