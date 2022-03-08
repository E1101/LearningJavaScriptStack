'use strict'
const { execSync } = require('child_process')

// process.execPath ensure same node binary with absolute path to it
const output = execSync(
  `"${process.execPath}" -e "console.error('subprocess stdio output')"`
)

console.log(output.toString())
