var fs = require('fs-extra');
var cfg = require('./lib/cfg'), paths = cfg.paths, http = cfg.http;
var io = require('./lib/io');

var urls = fs.readJsonSync(paths.poynterSrcJson)
	.map(function(handle){
		return http.twitterBase + handle;
	});
	
io.makeRequests(urls)
	.then(function(data){
		fs.writeJson(paths.poynterDistJson, data);
		return data;
	})
	.then(function(data) {
		io.writeXls(paths.poynterDistXls, data);
		console.log('Done');
	}).catch(function(err){ throw Error(err)});








