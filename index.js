var scraper = require('scraperjs').StaticScraper;
var _ = require('lodash');
var Promise = require("bluebird");

var urls = [
	'https://twitter.com/BeebJournalist',
	'https://twitter.com/_devbryce'
];

var selectors = {
	name: '.ProfileHeaderCard-nameLink',
	tweets: '.ProfileNav-item--tweets ProfileNav-value',
	following: '.ProfileNav-item--following .ProfileNav-value',
	followers: '.ProfileNav-item--followers .ProfileNav-value',
	tweet_text: '.content .js-tweet-text-container .tweet-text'	
};

var formatters = {
	
};

var promises = [];

_.forEach(urls, function(url, idx){
	console.log("Began looping through urls", url);
	var promise = createScraper(url);
	promises.push(promise);
});


Promise
	.all(promises).then(function(data){
		console.log(data);
	})
	.catch(function(err){
		throw Error(err);
	});

function createScraper(url) {
	return scraper.create(url)
		.scrape(function ($) {
			console.log("Began parsing returned HTML");
			var doc = $('#doc');
			var values = {};

			_.forIn(selectors, function (selector, key) {
				console.log("Began getting text using selectors");
				values[key] = doc.find(selector).text();
				console.log("Stored value for " + key);
			});

			return values;
		})
		.catch(function(err){
			throw Error(err);
		});
}



