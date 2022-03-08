'use strict'
const fs = require('fs')

const writable = fs.createWriteStream('./out')
writable.on('finish', () => { console.log('finished writing') })
writable.write('A\n')
writable.write('B\n')
writable.write('C\n')
// `end` method also write final payload to stream before ending it
writable.end('nothing more to write')
