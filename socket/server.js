/**
 * Created by 749 on 1/12/2017.
 */
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
//var my_io = require('socket.io')(app);
var fs = require('fs');

app.listen(456);

function handler (req, res) {
    fs.readFile(__dirname + '/client.html',
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
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
    
    socket.on('disconnect', function () {
       console.log('disconnect');
    });

    //read file and send content to client

    //fs.readFile(__dirname+'/read.txt','utf8', function (err,data) {
    //    if(err){
    //        socket.emit('file_receive',{error:1});
    //    }else{
    //        console.log(data);
    //        socket.emit('file_receive',{error:0,data:data});
    //    }
    //});

    //send image file to client
    //fs.readFile(__dirname+'/Desert.jpg', function (err,data) {
    //
    //    if(err){
    //        console.log('loi roi');
    //        //socket.emit('image_receive',{error:1});
    //
    //    }else{
    //        console.log('thanh cong roi');
    //        socket.emit('image_receive',{error:0,data:data.toString('base64')});
    //    }
    //});


    //send word file
    fs.readFile(__dirname+'/test.doc', function (err,data) {

        if(err){
            socket.emit('word_file_receive',{error:1});
        }else{
            //socket.emit('word_file_receive',{error:0,data:data.toString('base64')});
            socket.emit('word_file_receive',{error:0,data:data});
        }
    });

});
