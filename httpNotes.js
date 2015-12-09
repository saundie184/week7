'use strict';

//get the core module and assign to http
var http = require('http');
var routes = require('./routes.js');

//create an http server, and everyti me int receives a request, it invokes the callback function
//res object stands for response which gets sent back to the user
var server = http.createServer(function(req, res) {
  //request headers are key-value pairs; there are some default ones

  console.log(req.url);

  //set response header
  //here we are saying we are sending back a json file
  res.setHeader('Content-Type', 'application/json');

  //(1)write out a response
  // res.write("{'message': 'Hello Internet'}");



  //(1)get function on routes object
  //check if req.url is a valid key in the routes object
  if (routes[req.url] !== undefined) {
    routes[req.url](req, res);
  } else {
    //set the status code to 404
    res.statusCode = 404;
    res.write('404 route not found');
    res.end();
  }

});

//start the server on port 9001 witha  hostname of localhost
//when teh server starts, invoke the callback function
server.listen(9001, 'localhost', function() {
  console.log('Up and running!')
});
