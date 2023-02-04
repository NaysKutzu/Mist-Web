var http = require('http');
var fs = require('fs');

const PORT=8080; 

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html", "text/css", "text/javascript", "image/png"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
