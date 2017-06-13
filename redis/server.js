var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

var redis = require('redis');


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
    //socket.on('my other event', function (data) {
    //    console.log(data);
    //});
    var redisClient = redis.createClient({host : 'localhost', port : 6379});

    redisClient.on("message", function (channel, message) {
        if(channel=='my-channel'){

            io.emit('news',{hello:'work'});
        }

    });

    redisClient.subscribe('my-channel');


    socket.on('disconnect', function () {

        redisClient.unsubscribe();
        redisClient.quit();
        console.log('disconnected');
    });
});

