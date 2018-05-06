/**
 * Created by hungnv on 2018/02/11.
 */

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/room_client.html');
});

server.listen(456);

//get all room socket.adapter.rooms
io.on('connection', function (socket) {

    //socket la doi tuong server tao ra voi tung client connect tois
    //mac dinh khi tao socket thi server data day socket vao room chua socket id tuong ung
    //ten room
    //socket.adapter.room
    //xem them tai https://socket.io/docs/emit-cheatsheet/
    socket.on('tao-room', function (room_name) {
        socket.join(room_name);
        socket.room_name=room_name;

        socket.emit('current-room',room_name)
    });

    socket.on('message', function (message) {

        io.sockets.in(socket.room_name).emit('chat',message);
    });

});
