/**
 * Created by 749 on 12/29/2016.
 */
const fs = require('fs');
const rr = fs.createReadStream('foo.txt');
rr.setEncoding('utf-8');
rr.on('readable', function () {
    debugger;
    var data=rr.read();
    if(data!=null){
        console.log(data);
    }
    //console.log('readable:', rr.read().toString());
});
rr.on('end', function () {
    console.log('end');
});

//rr.on('pipe',function(data){
//    console.log("data"+data.toString());
//});