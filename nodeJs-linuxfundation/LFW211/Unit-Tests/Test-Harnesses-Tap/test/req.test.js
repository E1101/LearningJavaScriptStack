'use strict'
const { test } = require('tap')
const req = require('../req')

// if we use async then promise resolve with function before
// callback is called.
test('handles network errors', ({ strictDeepEqual, end }) => {
  req('http://error.com',
    (err) => {
      strictDeepEqual(err, Error('network error'))
      end() // if we don't call end() then test failed with timeout error
    })
})

test('responds with data', ({ ok, strictDeepEqual, ifError, end }) => {
  req('http://example.com',
    (err, data) => {
      ifError(err)
      ok(Buffer.isBuffer(data))
      strictDeepEqual(data, Buffer.from('some data'))
      end()
    })
})

// > ./node_modules/.bin/tap
