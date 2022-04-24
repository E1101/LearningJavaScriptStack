'use strict'

const net = require('net')

const socket = net.connect(3000)
socket.pipe(process.stdout)

socket.write('hello')

setTimeout(() => {
  socket.write('ping')    // pingfinish will be received by server
  socket.write('finish')
  setTimeout(() => {
    socket.end()
  }, 1250)
}, 3250)
