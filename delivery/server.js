/**
 * Created by 749 on 1/13/2017.
 */



var app = require('express')();
var express=require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var dl=require('delivery');

server.listen(456);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client.html');
});

app.use(express.static('public'));

io.on('connection', function (socket) {

    console.log('client connected');
    var delivery = dl.listen(socket);
    delivery.on('delivery.connect',function(delivery){

        delivery.send({
            name: 'koala.jpg',
            path : './Koala.jpg',
            params: {foo: 'bar'}
        });

        delivery.on('send.success',function(file){
            console.log('File successfully sent to client!');
        });

    });
});