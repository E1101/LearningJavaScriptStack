'use strict'

const { execSync } = require('child_process')

try {
  // process exit value is anything than 0
  execSync(`"${process.execPath}" -e "process.exit(1)"`)
} catch (err) {
  console.error('CAUGHT ERROR:', err)
}
