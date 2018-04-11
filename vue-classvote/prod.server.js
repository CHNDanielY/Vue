var express = require('express')
var config = require('./config/index')
var proxy = require('http-proxy-middleware')
var app = express()

app.use('/apis', proxy({ target: 'http://talk.17link.cc/', changeOrigin: true }));
app.use(express.static('./dist'))

var port = process.env.PORT || config.build.port

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('listening at http://localhost:' + port + '\n')
}) 