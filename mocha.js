var fs = require('fs');
var should = require('should');
var restlang = require('./parser');

describe('Restlang Parser',function(){

	it('should parse the nested example',function(){

		var source = fs.readFileSync('./examples/nested.rest','utf8');
		var nested = restlang(source);
		nested.should.be.an.object;
	});

});