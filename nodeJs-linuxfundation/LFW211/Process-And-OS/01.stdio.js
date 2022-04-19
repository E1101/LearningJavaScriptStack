'use strict'

console.log('initialized')

process.stdin.pipe(process.stdout)

// generate some random byte and pipe it on cli to our script:
// $ node -p "crypto.randomBytes(100).toString('hex')" | node 01.stdio.js
