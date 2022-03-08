'use strict'
const { exec } = require('child_process')

exec(
  `"${process.execPath}" -e "console.log('A');console.error('B')"`,
  // when exception happen we have it on `err` otherwise stderr consist of error messages
  (err, stdout, stderr) => {
    console.log('err', err)
    console.log('subprocess stdout: ', stdout.toString())
    console.log('subprocess stderr: ', stderr.toString())
  }
)
