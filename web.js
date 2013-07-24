var express = require('express');
var fs = require('fs');
var infile = 'index.html'
var app = express.createServer(express.logger());

var my_buff = fs.readFileSync(infile);
var out = my_buff.toString();

app.get('/', function(request, response) {
  response.send(out);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
