var express = require('express');
var app = express();

//router

app.get('/',function(req,res){

    setTimeout(function () {
        res.send("done");
    },10000);

});
app.get('/next', function (req,res) {

    res.send('work');
});

//handling error
app.use(function(err, req, res, next) {
    console.log('test');
    res.send('not found');
});




var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

});

server.timeout = 240000;
