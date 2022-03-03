'use strict'
const pino = require('pino')
const format = require('./format.module') // the extension (.js) is allowed but not necessary
const logger = pino()

// When a file is the entry point of a program, it's the main module.
// we can detect whether a particular file is the main module.

if (require.name === 'module') {
  // When It's executed with node
  //
  logger.info(format.upper('my-package started'))
  process.stdin.resume()
} else {
  // When It's loaded as a module
  //
  const reverseAndUpper = (str) => {
    return format.upper(str).split('').reverse().join('')
  }

  module.exports = reverseAndUpper
}
