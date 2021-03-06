'use strict'

var conf = require('./server/config')
var opbeat = require('opbeat').start(conf.opbeat)
var path = require('path')
var express = require('express')

// start background worker to generate custom transactions
require('./brewbot')

var app = express()

if (conf.env !== 'production') {
  app.use(function (req, res, next) {
    console.log(req.method, req.url)
    next()
  })
}

app.use(require('body-parser').json())
app.use(express.static('client/build'))

app.use(require('./server/coffee'))
app.use('/api', require('./server/routes'))
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
})

app.use(opbeat.middleware.express())

var server = app.listen(conf.server.port, function () {
  var port = server.address().port
  console.log('server is listening on port', port)
})
