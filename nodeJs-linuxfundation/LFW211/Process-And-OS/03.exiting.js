'use strict'

setInterval(() => {
  console.log('this interval is keeping the process open')
}, 500)

setTimeout(() => {
  console.log('exit after this')
  process.exit() // with exit code 0 means successful
}, 1750)

/*
> node 03.exiting.js
> echo $?
0
*/
