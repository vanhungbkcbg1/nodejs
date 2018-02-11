/**
 * Created by hungnv on 2018/02/11.
 */

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/name_space_client.html');
});

app.get('/room1', function (req,res) {
    res.sendFile(__dirname + '/room1.html');
});
app.get('/room2', function (req,res) {
    res.sendFile(__dirname + '/room2.html');
});
app.get('/room3', function (req,res) {
    res.sendFile(__dirname + '/room3.html');
});
server.listen(456);
//var my_io = require('socket.io')(app);

room1=io.of('room1');

room1.on('connection', function (socket) {

    room1.emit('connected','connected');
    socket.on('message', function (data) {

        console.log(data);

        //room1.emit('message','data');

        socket.broadcast.emit('message','data');
    });


});

room2=io.of('room2');
room2.on('connection', function (socket) {

    room2.emit('connected','connected');
    socket.on('message', function (data) {

        console.log(data);
    });

});

room3=io.of('room3');
room3.on('connection', function (socket) {

    room3.emit('connected','connected');
    socket.on('message', function (data) {

        console.log(data);
    });
});
