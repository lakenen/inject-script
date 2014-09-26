var inject = require('..')
var http = require('http')
var path = require('path')
var fs = require('fs')

http.createServer(function (req, res) {
  if (req.url === '/script.js') {
    res.setHeader('content-type', 'application/json')
    fs.createReadStream(path.resolve(__dirname, 'script.js'))
      .pipe(res)
  } else {
    fs.createReadStream(path.resolve(__dirname, 'index.html'))
      .pipe(inject('/script.js'))
      .pipe(res)
  }
}).listen(4242)
