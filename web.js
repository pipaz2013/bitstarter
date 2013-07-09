var express = require('express');

var fileName = ("./index.html");
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require("fs");
  var buffer = new Buffer(12);

  response.send(buffer.toString("utf-8", fs.readFileSync(fileName)));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
