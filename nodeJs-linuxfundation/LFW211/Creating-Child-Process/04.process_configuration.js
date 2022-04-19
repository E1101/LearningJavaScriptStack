'use strict'

const { spawn } = require('child_process')

// by default child process extends env of the parent process
process.env.A_VAR_WE = 'JUST SET'
const sp = spawn(process.execPath, ['-p', 'process.env'])
sp.stdout.pipe(process.stdout)
