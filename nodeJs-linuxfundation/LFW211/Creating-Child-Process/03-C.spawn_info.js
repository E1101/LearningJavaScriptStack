'use strict'

const { spawn } = require('child_process')

const sp = spawn(
    process.execPath,
    [`-e`, `console.log('subprocess stdio output'); process.exit(1);`]
)

console.log(sp)
console.log('pid is', sp.pid)

// stdout Buffer is a stream which can piped to stdout
sp.stdout.pipe(process.stdout)

sp.on('close', (status) => {
  console.log('exit status was', status)
})
