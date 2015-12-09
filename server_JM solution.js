//always use strict
'use strict';

//get the http object and assign it to variable http
//see docs @ https://nodejs.org/api/http.html
var http = require('http');

//get the fs object and assing it to variable fs
//see docs @ https://nodejs.org/api/fs.html
var fs = require('fs');

//create an HTTP server, every time it recieves a request invoke handleRequest
//and pass in the request and response objects.
//see docs @ https://nodejs.org/api/http.html#http_http_createserver_requestlistener
var server = http.createServer(handleRequest);

//start the server and listen for requests on port 8000, set the hostname to
//localhost. After the server starts call our callback function.
server.listen(8000, 'localhost', function(){
  console.log('Go time!');
});


//we passed this function into http.createServer so it gets called every time
//the server receives a request. The server passes in a request and a response
//object.
function handleRequest(req, res){

  //we're going to send html back to the user so lets set the MIME type.
  res.setHeader("Content-Type", "text/html");

  //rudementry routing.
  //Routing can be very complex or very simple.
  //All it does is determine what code to execute for different requests.
  if(req.url === '/about.html'){ //if the request URL is about.html

    fetchFile(req, res, '.' + req.url);

  }else if(req.url === '/faq.html'){//if the request URL is faq.html

    fetchFile(req, res, '.' + req.url);

  }else{//otherwise invalid URL

    respondError(req, res);

  }
}

function fetchFile(req, res, filename){

  //read a file asynchronously using fs. Once the file has been read fs will
  //invoke the callback function passing in an error or data.
  fs.readFile(filename, function(err, data){
    handleFileLoad(req, res, err, data);
  });

}


function handleFileLoad(req, res, err, data){
  if(err){ //if an error exists

    respondError(req, res);

  }else{ // else we successfully loaded the file

    //set the status code to 200 to show that we succeeded.
    res.statusCode = 200;

    //write the file data to the response. We use toString to make it human
    //readable.
    res.write(data.toString());

    //send the response back to the client.
    res.end();
  }
}


function respondError(req,res){
  //set the status code to 404 to show that we failed to get the requested route
  res.statusCode = 404;
  //write an error message to thhe response
  res.write('<h1>404: The item you requested does not exist.</h1>');
  //send the response back to the client
  res.end();
}