var io  = require('socket.io').listen(5001),
    dl = require('delivery');

io.sockets.on('connection', function(socket){
    console.log('client connected');
    var delivery = dl.listen(socket);
    delivery.connect();
    delivery.on('delivery.connect',function(delivery){

        console.log('delivery connected');
        var path=__dirname+'/Koala.jpg';
        delivery.send({
            name: 'sample-image.jpg',
            path : path
        });

        delivery.on('send.success',function(file){
            console.log('File successfully sent to client!');
        });

    });
});