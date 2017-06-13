/**
 * Created by hungnv on 6/10/2017.
 */

var redis = require('redis');
var redisClient = redis.createClient({host : 'localhost', port : 6379});

redisClient.on('ready',function() {
    console.log("Redis is ready");
});

redisClient.on('error',function() {
    console.log("Error in Redis");
});


redisClient.on("subscribe", function (channel, count) {
    console.log("vanhung");
});

redisClient.on("message", function (channel, message) {
    console.log("sub channel " + channel + ": " + message);

});

redisClient.subscribe('my-channel');