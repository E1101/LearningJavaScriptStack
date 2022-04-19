'use strict'

const { IS_CHILD } = process.env

if (IS_CHILD) {
  console.log('Subprocess cwd:', process.cwd())
  console.log('env', process.env)
} else {
  const { spawn } = require('child_process')
  const { parse } = require('path')

  const { root } = parse(process.cwd())

  // execute script with child process
  const sp = spawn(process.execPath, [__filename], {
    cwd: root,
    env: { IS_CHILD: '1' }
  })

  sp.stdout.pipe(process.stdout)
}
