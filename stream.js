/**
 * Created by hungnv on 12/30/2016.
 */
var fs=require('fs');
var read=fs.createReadStream('vanhung.txt');
read.setEncoding('utf8');
read.on('data', function (data) {
    console.log(data);
});
