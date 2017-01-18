/**
 * Created by 749 on 1/16/2017.
 */
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log('Master '+process.pid+'is running');

    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker '+process.pid+' died');
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer(function(req, res){
        res.writeHead(200);
    res.end('hello world\n');
}).listen(8000);

console.log('Worker '+process.pid+' started');
}