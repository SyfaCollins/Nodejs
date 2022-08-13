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

const fs = require('fs')

var file = fs.readdirSync('./');

console.log(file);
