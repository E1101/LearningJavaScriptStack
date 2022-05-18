'use strict'

const http = require('http')

const hello = `
<html>
    <head>
        <style>
        body { background: #333; margin: 1.25rem }
        h1 { color: #EEE; font-family: sans-serif }
        </style>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>`

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end(hello)
})

server.listen(process.env.PORT || 3000)
