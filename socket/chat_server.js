/**
 * Created by hungnv on 2018/02/11.
 */

var app = require('http').createServer(handler)
var io = require('socket.io')(app);
//var my_io = require('socket.io')(app);
var fs = require('fs');

app.listen(456);

function handler (req, res) {
    fs.readFile(__dirname + '/chat_client.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

io.on('connection', function (socket) {

    socket.on('message', function (data) {

        console.log(data);
        //gui lai chinh client
        //socket.emit('server_recieve_message','nhan roi nhe');
        // gui lai all client
        //io.emit('server_recieve_message','nhan roi nhe');
        //gui lai cac client khac,ngoai tru sender
        socket.broadcast.emit('server_recieve_message',data);

    });
    
    socket.on('typing', function (data) {
        console.log('typing');
        socket.broadcast.emit('typing',data);
    });

    socket.on('no_typing', function (data) {
        socket.broadcast.emit('no_typing',data);
    });
});
