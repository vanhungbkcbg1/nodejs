/**
 * Created by hungnv on 12/30/2016.
 */
var net = require('net');
var server = net.createServer(function(connection) {
    console.log('client connected');

    connection.on('end', function() {
        console.log('client disconnected');
    });
    connection.write('Hello World!\r\n');
    //connection.pipe(connection);
});

console.log(server);
server.listen(9090, function() {
    console.log('server is listening');
});
