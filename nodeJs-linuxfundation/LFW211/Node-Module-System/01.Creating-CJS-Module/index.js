'use strict'

const format = require('./format.module') // the extension (.js) is allowed but not necessary

// When a file is the entry point of a program, it's the main module.
// we can detect whether a particular file is the main module.

console.log(require.name)

if (require.name === 'module') {
  // When It's executed with node
  //
  const logger = require('pino')()

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
