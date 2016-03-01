require('./lib/globals');
var fs = require('fs-extra');
var cfg = require('./lib/cfg'), paths = cfg.paths, http = cfg.http;
var io = require('./lib/io');

var bios = fs.readJsonSync(paths.poynterSrcJson)
	.map(function(handle){
		return { 
			url: http.twitterBase + handle,
			handle: handle
		};
	});
	
io.makeRequests(bios)
	.then(function(data){
		fs.writeJson(paths.poynterDistJson, data);
		console.log('JSON Written');
		return data;
	})
	.then(function(data) {
		console.log("Attempting writeXls");
		io.writeXls(paths.poynterDistXls, data);
		console.log('Done');
	}).catch(function(err){ throw Error(err)});








