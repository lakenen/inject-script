# inject-script

Inject a `<script>` node into a stream of HTML (right before the closing body tag) with a specified `src`.

## Usage

`stream.pipe(inject(src)).pipe(response)`

```js
var inject = require('inject-script')
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
```


## License

([The MIT License](LICENSE))

Copyright 2014 Cameron Lakenen
