'use strict'

const net = require('net')

const socket = net.connect(3000)
socket.pipe(process.stdout)

socket.write('hello')

setTimeout(() => {
  socket.destroy()
}, 3000)
