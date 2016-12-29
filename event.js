/**
 * Created by 749 on 12/29/2016.
 */

var EventEmitter=require('events').EventEmitter;

var event=new EventEmitter();
event.on('click', function () {
    console.log('click run');
});
event.on('click', function () {
   console.log('continue run');
});
event.emit('click');
