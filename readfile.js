var fs = require("fs");
var http=require('http');

fs.readFile('read.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");