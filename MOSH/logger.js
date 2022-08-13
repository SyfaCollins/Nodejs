console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

function log(message){
    //send an HTTP request

    console.log(message);
};

//to make to module public we export it


module.exports = log;
