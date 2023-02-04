var http = require('http');
var fs = require('fs');

const PORT=8080; 

const express = require('express')
const app = express()

//root//
app.get('/', (req, res) => {
  res.sendStatus(200)
})
//app listne on port//
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`)
})
fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
