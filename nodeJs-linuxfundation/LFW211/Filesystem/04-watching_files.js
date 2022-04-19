'use strict'

const { join, resolve } = require('path')
const { watch, readdirSync, statSync, existsSync } = require('fs')

function watchDir(dirPath, callback) {
  // Initialize unique list by array of current directory files
  const files = new Set(readdirSync('.'))

  watch(dirPath, (evt, filename) => {
    try {
      if (! existsSync(filename)) {
        files.delete(filename)
        evt = 'deleted'

        return callback(null, evt, filename)
      }

      if (! files.has(filename)) {
        evt = 'created'
        files.add(filename)
      } else {
        const { ctimeMs, mtimeMs } = statSync(join(cwd, filename))
        if (ctimeMs === mtimeMs) evt = 'content-updated'
        else evt = 'status-updated'
      }
    } catch (err) {
      console.error(err)
      callback(err)
      return
    }

    callback(null, evt, filename)
  })
}

// It's more usual to use `process.cwd()`
const cwd = resolve('.')
watchDir(cwd, (err, evt, filename) => {
  console.log(evt, filename)
});
