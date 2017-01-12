var http = require('http');
var fs=require('fs');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.readFile(__dirname+'/read.txt', function (err, data) {
        if(err){
            res.end('have an error');
        }

        res.end(data);
    });
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');