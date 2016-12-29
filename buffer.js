/**
 * Created by 749 on 12/29/2016.
 */


//var buffer=new Buffer();

const buf = Buffer.allocUnsafe(2);

buf.writeInt8(1, 0);
buf.writeInt8(-3, 1);
//console.log(buf.readInt8(0));


//// Prints: <Buffer 02 fe>
//console.log(buf);
//console.log(buf.length);
//
console.log(module.exports);

var util=require('util');
util.log('hello');

var config=require('./config');
console.log(config);
console.log(config.foo);

