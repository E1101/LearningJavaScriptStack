'use strict'

const { exec } = require('child_process')

exec(
  `"${process.execPath}" -e "console.error('B'); process.exit(1)"`,
  // when exception happen we have it on `err` otherwise stderr consist of error messages
  (err, stdout, stderr) => {
    console.log('err', err)
    console.log('subprocess stderr: ', stderr.toString())
  }
)
