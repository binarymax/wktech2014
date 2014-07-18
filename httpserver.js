var http = require('http');
var port = 4000;
var listener = function(req,res){
  console.log('Requested');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html><h1>Hello World!</h1></html>');
  res.end();
};
var server = http.createServer(listener);
server.listen(port);