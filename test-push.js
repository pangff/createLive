/**
 * Created by pangff on 17/4/1.
 */
'use strict';
const process = require('child_process');

process.exec(__dirname+'/media/live.sh',
    function (error, stdout, stderr) {
        console.log(error)
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });