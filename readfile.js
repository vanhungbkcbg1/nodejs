var fs = require("fs");
var http=require('http');
const util = require('util');

const readfileasyncpromise=util.promisify(fs.readFile);

//fs.readFile('read.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
//});

async function test(){
    let result= await readfileasyncpromise('read.txt');
    console.log(result);
    return result;
}

test();

