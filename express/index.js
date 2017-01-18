var express = require('express');
var app = express();
const formidable = require('express-formidable');
var fs=require('fs');
const path = require('path');

//handling error
//xu li loi trong moi truong phat trien


app.use(formidable());

//static file in folder test
app.use(express.static('static_file'));

//statis file with virtual path prefix
app.use('/static',express.static('static_file'));

//handling error
app.use(function(err, req, res, next) {
   res.send('not found');
});



// app.use(function(err,res,res,next){
	// res.send(err.message);
// });
//xu li loi trong moi moi truong


app.get('/name', function (req, res,next) {
	
	res.header("Access-Control-Allow-Origin", "*");
	// res.status(200);
	res.status(500).json({name:"vanhung",age:"26"});
});


//router
app.get('/',function(req,res){
		res.send("done");
});


app.get('/sinhvien', function (req,res) {
    console.log('sinhvien call');
    //redirect to param
    res.redirect('/param/from_sinhvien');
    //res.send('this is sinhvien router');
});

//router with params
app.get('/param/:param', function (req,res) {

    res.send(req.params);//this is javascript object
});

app.post('/upload', function (req,res) {

    //res.send(req.files);
    try{

        if(req.files.image_file){
            //
            fs.readFile(req.files.image_file.path,function (err,data) {

                if(err){
                    res.send('error');
                }
                var file_name=path.join(__dirname,'upload',req.files.image_file.name);
                console.log(file_name);
                //write file
                fs.writeFile(file_name,data, function (err,data) {

                    if(err){
                        res.send('have an error when upload file');
                    }
                    res.send('upload file sucessfull');
                });
            });
        }
    } catch(e){
        res.send(e);
    }

});


//end router

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
