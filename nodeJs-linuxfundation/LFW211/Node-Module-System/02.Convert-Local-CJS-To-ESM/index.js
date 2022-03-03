'use strict'

if (require.name === 'module') {
  // When It's executed with node
  //
  const pino = require('pino')
  const logger = pino()
  import('./format.mjs').then((format) => {
    logger.info(format.upper('my-package started'))
    process.stdin.resume()
  }).catch((err) => {
    console.error(err)
    process.exit(1)
  })
} else {
  // When It's loaded as a module
  //
  let format = null
  // now this function return Promise which resolve to result
  const reverseAndUpper = async (str) => {
    format = format || await import('./format.mjs')
    return format.upper(str).split('').reverse().join('')
  }

  module.exports = reverseAndUpper
}
