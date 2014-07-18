var fs   = require('fs');
var exec = require('child_process').exec;
var mplayer = 'mplayer --vo=jpeg:outdir="';
var options = '-fps 24 -frames 240 -ss 2 '

var extract = function(source,callback) {

	if(!source|| !source.length) throw new Error("Source is required");

	var path    = source.substr(0,source.lastIndexOf("/"));
	var target  = path + '/frames/" ';
	var command = mplayer + target + options + source;

	exec(command, function (execerr, stdout, stderr) {
		callback(execerr||stderr, stdout);
	});

};

module.exports = {extract:extract};