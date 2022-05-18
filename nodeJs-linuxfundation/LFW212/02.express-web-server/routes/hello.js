'use strict'

const { Router } = require('express')
const router = Router()

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

// it has `/` because will be mounted to main route under `/hello`
router.get('/', (req, res) => {
    res.send(hello)
})

module.exports = router
