'use strict'

const net = require('net')

net.createServer((socket) => {
  const interval = setInterval(() => {
    socket.write('.')
  }, 1000)

  socket.on('data', (data) => {
    socket.write(data.toString().toUpperCase())
  })

  socket.on('end', () => { clearInterval(interval) })
}).listen(3000)
