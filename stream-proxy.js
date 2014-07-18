var http    = require('http');
var request = require('request'); //npm install request

var host    = 'http://binarymax.com'

http.createServer(function (req, res) {
	request(host+req.url).pipe(res);
}).listen(8888);