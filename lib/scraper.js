var _ = require('lodash');
var scraperjs = require('scraperjs').StaticScraper;
var scraper = module.exports = {};
var _ = require('lodash');
var Tweets = require('./Tweets');
var selectors = require('./cfg').scraper.selectors;

scraper.get = function(url) {
	return scraperjs.create(url)
}

scraper.parse = function ($) {
	var doc = $('#doc');
	var values = {};

	_.forIn(selectors, function (selector, key) {
		values[key] = key !== 'tweets' ? 
			doc.find(selector).text() : 
			new Tweets(doc.find(selector), $).store;
	});
	
	return flattenTweets(values);
}

function flattenTweets(values){
	var tweets = values.tweets;
	
	// THIS IS WHERE YOU LEFT OFF
	// CSV REQUIRES YOU TO BREAK DOWN JSON OBJECTS FOR IT TO READ
	
	
	
	return values;
}