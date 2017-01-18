var express = require('express');
var app = express();

//handling error
//xu li loi trong moi truong phat trien
if(app.get('env')==="development")
{

	app.use(function(err,req,res,next){
		
		res.send("loi roi");
	});

}

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
    res.send('this is sinhvien router');
});

//router with params
app.get('/param/:param', function (req,res) {

    res.send(req.params);//this is javascript object
});
//end router

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//static file in folder test
app.use(express.static('static_file'));

//statis file with virtual path prefix
app.use('/static',express.static('static_file'));