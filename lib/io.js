var _ = require('lodash');
var fs = require('fs-extra');
var io = module.exports = {};

io.makeRequests = function(urls) {
	var Promise = require('bluebird');
	var scraper = require('./scraper');
	var promises = [];

	_.forEach(urls, function(url, idx){
		var promise = scraper.get(url)
			.scrape(scraper.parse)
			.catch(function(err){
				throw Error(err);
			});
		promises.push(promise);		
	});
	return Promise.all(promises);
}



io.writeXls = function(writePath, json) {
	var json2xls = require('json2xls');
	
	var xls = json2xls(json);

	fs.writeFileSync(writePath, xls, 'binary');
}