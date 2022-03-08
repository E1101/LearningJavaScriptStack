const assert = require('assert')

const obj = {
  id: 1,
  name: { first: 'David', second: 'Clements' }
}

// equality check in javascript for object is to check
// object references for equality.
// this assert will fail because they are different objects:
assert.equal(obj, {
  id: 1,
  name: { first: 'David', second: 'Clements' }
})

// Instead deep equality check should be done:
// this will pass
assert.deepEqual(obj, {
  id: '1', // <===----
  name: { first: 'David', second: 'Clements' }
})

// This will not because of strict check:
assert.strict.deepEqual(obj, {
  id: '1',
  name: { first: 'David', second: 'Clements' }
})
