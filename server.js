var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    console.dir(req.url);

    // will get you  '/' or 'index.html' or 'css/styles.css' ...
    // • you need to isolate extension
    // • have a small mimetype lookup array/object
    // • only there and then reading the file
    // •  delivering it after setting the right content type

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end('ok');
}).listen(3001);
