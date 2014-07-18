var fs    = require('fs');
var http  = require('http');
var path  = __dirname + '/public/';
var files = fs.readdirSync(path);

http.createServer(function (req, res) {
	var file = req.url.substr(1)||'index.html';
	if(~files.indexOf(file)) {
		//Pipe directly from the file to the response
    	fs.createReadStream(path + file).pipe(res);
   	} else {
   		//404
		res.writeHead(404);
   		res.end();
   	}
}).listen(8888);