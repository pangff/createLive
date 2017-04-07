/**
 * Created by pangff on 17/4/1.
 */
'use strict';
const restify = require('restify');
const bunyan=require('bunyan');
const server = restify.createServer();
const process = require('child_process');

//const ms = ["3.440000","10.000000","10.000000","10.000000","9.120000","10.000000","7.840000","10.000000","10.000000","5.240000","10.000000","10.000000","10.000000","9.280000"];
//const msMax = ["4","10","10","10","10","10","8","10","10","6","10","10","10","10"];

function startLive(){
    process.exec(__dirname+'/media/live.sh',
        function (error, stdout, stderr) {
            console.log(error)
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
}
//
//server.get('.*', function(req, res, next) {
//    console.log(req.header('Host'));
//    next("static");
//});

server.get(/\/media\/?.*/, restify.serveStatic({
    directory: __dirname
}));

server.get(/\/pushstream\/?.*/, function(req, res, next) {
    console.log("");
    res.send("ok");
    startLive();
});
//
//server.on('after', restify.auditLogger({
//    log: bunyan.createLogger({
//        name: 'audit',
//        stream: process.stdout
//    })
//}));

server.listen(80, function() {
    //startLive();
    console.log('%s listening at %s', server.name, server.url);
});

console.log('eidtor cms started at: ');