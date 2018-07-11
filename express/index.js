var express = require('express');
var app = express();
const formidable = require('express-formidable');
const mysql = require('mysql');
var fs = require('fs');
const path = require('path');
var config = require('./config/database.json');
app.set('config', config);

//handling error
//xu li loi trong moi truong phat trien

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'test'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


app.use(formidable());

//static file in folder test
app.use(express.static('static_file'));

//statis file with virtual path prefix
app.use('/static', express.static('static_file'));


// app.use(function(err,res,res,next){
// res.send(err.message);
// });
//xu li loi trong moi moi truong


app.get('/name', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    // res.status(200);
    res.status(500).json({name: "vanhung", age: "26"});
});


//stream image and other file to client
app.get('/image', function (req, res) {

    var stream = fs.createReadStream('./image/test.jpg');
    stream.pipe(res);
});

//non-stream
app.get('/non-stream', function (req, res) {
    var file = fs.readFileSync('./image/test.jpg');
    res.end(file);
});


//router
app.get('/', function (req, res) {

    res.send("done");
});

app.get('/config', function (req, res) {

    res.send(config);
});


app.get('/mysql', function (req, res) {


    con.query('select * from comment', function (err, result) {
        if (err) {
            throw  err;
        }

        res.send(result);
    });


});


app.get('/mysql/:comment_id', function (req, res) {

    try {

        var EventEmitter = require('events').EventEmitter;

        var event = new EventEmitter();
        event.on('sqlerror', function (error) {
            res.send(error.message);
        });
        con.query('select * from comment where id=?', [req.params.comment_id], function (err, result) {
            if (err) {
                event.emit('sqlerror', err);
            } else {

                res.send(result);
            }

        });
    } catch (e) {
        res.send(e.message);
    }


});

app.get('/async', function (req, res) {

    var result = resolveAfter2Seconds();
    console.log(result);

    res.send(result);

});

async function resolveAfter2Seconds() {
    const util = require('util');
    const readfileasyncpromise=util.promisify(con.query);
    let result= await readfileasyncpromise('select * from comment');
    console.log(result);
    return result;


}
process.on('unhandledRejection', function(reason, promise) {
    console.log(promise);
});


app.get('/sinhvien', function (req, res, next) {
    console.log('sinhvien call');
    //redirect to param
    //res.redirect('/param/from_sinhvien');
    //var err=new Error('error');
    //return next(err);
    res.send('this is sinhvien router');
});

//router with params
app.get('/param/:param', function (req, res) {

    console.log('name is %s', req.name);
    res.send(req.params);//this is javascript object

});


//this middleware will be executed every /:param is requested
app.param('param', function (req, res, next, param) {

    console.log('request param is executed');
    console.log(param);
    req.name = "vanhung";
    return next();
});

app.post('/upload', function (req, res) {

    //res.send(req.files);
    try {

        if (req.files.image_file) {
            //
            fs.readFile(req.files.image_file.path, function (err, data) {

                if (err) {
                    res.send('error');
                }
                var file_name = path.join(__dirname, 'upload', req.files.image_file.name);
                console.log(file_name);
                //write file
                fs.writeFile(file_name, data, function (err, data) {

                    if (err) {
                        res.send('have an error when upload file');
                    }
                    res.send('upload file sucessfull');
                });
            });
        }
    } catch (e) {
        res.send(e);
    }

});

//handling error
app.use(function (err, req, res, next) {
    res.send('not found');
});


//end router

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});
