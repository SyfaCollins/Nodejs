/**
 * /*
 * Primary file for the API
 *
 * @format
 */

//Dependences
var http = require("http");
var url = require("url");
var StringDecoder = require("string_decoder").StringDecoder;

//The server should respond to all requests with a string

var server = http.createServer(function (req, res) {
  //Get the url and parse it
  var parsedUrl = url.parse(req.url, true);

  //Get the path
  var path = parsedUrl.pathname;

  //trime the path
  var trimmedPath = path.replace(/^\/+|\?+$/g, "");

  //Get the query sting as an object
  var queryString = parsedUrl.query;

  //get the header as an object

  var headers = req.headers;

  //Get the payload, if any

  var decoder = new StringDecoder("utf-8");
  var buffer = "";
  req.on("data", function (data) {
    buffer += decoder.write(data);
  });

  //choose the handler this request should go to. If on is not 
var choseHandler = typeof(router(trimmedPath)) !== "undefined" ? router[trimmedPath] : handlers,notFound

//construct the data object to send to the handler

var data ={
  'trimmedPath' : trimmedPath,
  
}

  req.on("end", function () {
    buffer += decoder.end();
    res.end("Hello World\n");
    console.log("Request received with payload ", buffer);
  });

  //Get the HTTP method

  var method = req.method.toLowerCase();
});

//send the response

//log the request path
//Start the server, and have it listen on port 3000

server.listen(3000, function () {
  console.log("The server is listening on port 3000 now");
});


//Define the handler
var handlers = {}

//sample handler
handlers.sample=function(data,callback){
  //classback a http status code, and a payload object
  callback(406,{'name': 'sample handler'})
}


//Not found handler

handlers.notFound = function(data,callback){
  callback(404);
}

//Define a request router

var router = {
  'sample' : handlers.sample
}