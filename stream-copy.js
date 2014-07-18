var fs = require("fs");

var input  = fs.createReadStream("public/index.html");
var output = fs.createWriteStream("public/outdex.html");

//Pipe reads and writes in asynchronous chunks
input.pipe(output);
