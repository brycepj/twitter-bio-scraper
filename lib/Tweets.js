var _ = require('lodash');

module.exports = Tweets;

function Tweets(tweetElems, $) {
  this.store = this.parseTweets(tweetElems, $);
}

Tweets.prototype.parseTweets = function (elems, $) {
  var cache = [];
  _.forEach(elems, function (tweetElem) {
    tweetElem = $(tweetElem);
    var obj = {};
    var isRetweet = !!tweetElem.find('.context .js-retweet-text').length;
    var text = tweetElem.find('.js-tweet-text-container .tweet-text').text();
    obj.text = isRetweet ? 'RT ' + text : text;
    obj.timestamp = obj.text !== "" ? tweetElem.find('.content .tweet-timestamp')[0].attribs.title : null;
    cache.push(obj);
  });
  return cache.filter(function (tweet) {
    return tweet.text !== "";
  }).slice(0, 5);
}



