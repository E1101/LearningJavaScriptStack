'use strict'

const express = require('express')
const createError = require('http-errors')
const indexRoutes = require('./routes')
const helloRoutes = require('./routes/hello')

const app = express()

// mount point as first argument to `use`,
// which means will be handled only if incoming
// request path match it
app.use('/', indexRoutes)
app.use('/hello', helloRoutes)

app.use((req, res, next) => {
    // generate appropriate message for any http status code
    if (req.method !== 'GET') {
        next(createError(405))
        return
    }

    // `next` is error-first method,
    // by passing argument to it we let express know
    // that error has occurred.
    next(createError(404))
})

// the last middleware specifies four parameters instead three,
// this makes Express recognize middleware as the final error handling middleware.
// which receive the error argument passed to `next`
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    // this method is introduced by Express, and can set Content-Type header
    // based on the data we pass to it, like array will be transformed to Json.
    res.send(err.message)
})

module.exports = app
