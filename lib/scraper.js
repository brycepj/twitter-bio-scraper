var _ = require('lodash');
var scraperjs = require('scraperjs').StaticScraper;
var scraper = module.exports = {};
var _ = require('lodash');
var fmt = require('./formatters');
var Tweets = require('./Tweets');

var selectors = require('./cfg').scraper.selectors;

scraper.get = function(bio) {
	return scraperjs.create(bio.url)
}

scraper.parse = function ($, bio) {
	var doc = $('#doc');
	var values = {};
	values.handle = bio.handle;
	_.forIn(selectors, function (selector, key) {
		switch (key) {
			case 'tweets':
				values[key] = new Tweets(doc.find(selector), $).store;
				break;
			case 'tenure':
				values[key] = doc.find(selector)[0].attribs.title;
				break;
			default:
				values[key] = doc.find(selector).text();
				break;
		}	
	});
	
	return fmt.apply(values, [fmt.flattenTweets, fmt.tenure]);
}

