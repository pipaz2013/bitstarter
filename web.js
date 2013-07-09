var express = require('express');

var fileName = ("./index.html");
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require("fs");
  var buffer = new Buffer(12);
  buffer.write(fileName);
  response.send(fs.readFile(buffer.toString("utf-8")));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
