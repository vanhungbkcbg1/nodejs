/**
 * Created by hungnv on 12/30/2016.
 */
var number_connect=0;
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(9090);

function handler (req, res) {
    fs.readFile(__dirname + '/index.html',
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
    //socket.emit('news', { hello: 'world' });
    //socket.on('test', function (data) {
    //    console.log(data);
    //});

    number_connect++;
    console.log('connect');

    socket.emit('new_client',{total:'Hello Client'});
    socket.broadcast.emit('new_client',{total:number_connect});
    //socket.emit('new_client',{total:number_connect});

    socket.on('test', function (data) {

        console.log("___________data_________");
        console.log(JSON.stringify(data));
    });


    socket.on('disconnect', function () {

        number_connect--;
        console.log('disconnect');

        //broad cast message to other client when one client disconnected
        socket.broadcast.emit('new_client',{total:number_connect});
    });


});


//on disconnect