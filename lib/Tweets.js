var _ = require('lodash');

module.exports = Tweets;

function Tweets(tweetElems, $) {
	this.store = this.parseTweets(tweetElems, $);
}

Tweets.prototype.parseTweets = function(elems, $) {
	var cache = [];
	_.forEach(elems, function (tweetElem) {
		var obj = {};
		tweetElem = $(tweetElem);
		obj.text = tweetElem.find('.js-tweet-text-container .tweet-text').text();
		obj.isRetweet = !!tweetElem.find('.context .js-retweet-text').length;
		cache.push(obj);
	});
	return cache.filter(function(tweet) {
		return tweet.text !== "";
	}).slice(0, 5); // 5 is number of tweets off the top
}



