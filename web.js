var express = require('express');
var fs = require('fs');
var input_file = "index.txt";

var file_buffer = fs.readFileSync(input_file);
var file_string = file_buffer.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');
  response.send(file_string);
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
