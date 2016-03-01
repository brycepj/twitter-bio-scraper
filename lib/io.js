var _ = require('lodash');
var fs = require('fs-extra');
var io = module.exports = {};

io.makeRequests = function(bios) {
	var Promise = require('bluebird');
	var scraper = require('./scraper');
	var promises = [];

	_.forEach(bios, function(bio, idx){
		var promise = scraper.get(bio)
			.scrape(function($) {
				return scraper.parse($, bio);
			})
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