'use strict'

const net = require('net')

net.createServer((socket) => {
  socket.on('data', (data) => {
    const reply = data.toString().toUpperCase();
    if (reply === 'FINISH') {
      return
    }

    socket.write(reply)
  })
}).listen(3000)
