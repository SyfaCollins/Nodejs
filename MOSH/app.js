// //loading a module we use a require() object

// const path = require('path');
// const os = require('os')

// var osFreeMem = os.freemem();
// var totalMeme = os.totalmem()

// var pathObj = path.parse(__filename);

// // console.log(pathObj)
// // console.log(path)
// console.log(osFreeMem)
// console.log(`Total memory is ${totalMeme/1000000}`)

// const fs = require('fs')

// var file = fs.readdirSync('./');

// console.log(file);


// Events

// const EventEmitter = require('events');

// //a class is a container of a collection of methods

// const emitter = new EventEmitter();

// emitter.on('messageLogger',(arg)=>{
//     console.log('Listener called',arg);
// })

// //Raise an event
// emitter.emit('messageLogger',{id:1, url:'http://'});

// //emit means making a noise, produce - signalling

// //Raise: logging (data:message)

// emitter.on('Logging',(data)=>{
//     console.log('Logging data', data);
// })

// emitter.emit('Logging',{data:'message'});


// HTTP Requests

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Hello world");
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4]))
        res.end()
    }
});


server.listen(3000);

console.log('listening on port 3000...');

