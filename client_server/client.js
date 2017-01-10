/**
 * Created by hungnv on 12/30/2016.
 */

var net = require('net');
var client = net.connect({port: 9090}, function() {
    console.log('connected to server!');
});
client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});
client.on('end', function() {
    console.log('disconnected from server');
});
