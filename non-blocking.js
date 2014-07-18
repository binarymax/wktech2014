var filesystem = require('fs');

// -----------------------------------------------------
// Non-Blocking
var finished = function(foo) {
	console.log(foo);
};

filesystem.readFile('foo.html','utf8',finished);

// -----------------------------------------------------
// Blocking
var bar = filesystem.readFileSync('bar.html','utf8');
console.log(bar);