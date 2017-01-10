/**
 * Created by hungnv on 12/30/2016.
 */

var fs=require('fs');
var read=fs.createReadStream('vanhung.txt');
var write=fs.createWriteStream('output.txt');
read.pipe(write);
console.log('program ended');
