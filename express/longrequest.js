var express = require('express');
var app = express();

//router

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}

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

    console.log("Example app listening at http://%s:%s", host, port);
    console.log(server.timeout);

});

