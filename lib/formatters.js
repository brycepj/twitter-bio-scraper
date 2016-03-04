var _ = require('lodash');
var moment = require('moment');
var formatters = module.exports = {};

formatters.apply = function (values, formattersArr) {

  _.forEach(formattersArr, function (fn, idx) {
    values = fn(values);
  });
  
  
  return values;
}

formatters.listByTweet = function (values) {
  
  var cache = [];
  
  _.forEach(values.tweets, function(tweet, idx) {
    var displayObj = _.assign({}, values);
    delete displayObj['tweets'];
    displayObj.tweet_timestamp = tweet.timestamp;
    displayObj.tweet_text = tweet.text;
    cache.push(displayObj);
  });
  
  return cache;
  
}

formatters.addNoteField = function(values) {
  return values;
}


formatters.flattenTweets = function (values) {
  var tweets = values.tweets;

  _.forEach(tweets, function (tweet, idx) {
    if (!tweet.isRetweet) {
      values['tweet-' + idx] = tweet.text;
    } else {
      values['tweet-' + idx] = 'RT ' + tweet.text;
    }
  });

  delete values['tweets'];

  return values;
}

formatters.tenure = function (values) {
  var raw_date = values.tenure.split('-')[1].trim();
  // 7 Mar 2008
  var join_date = moment(raw_date, 'DD MMM YYYY');
  var now = moment();
  var tenure = now.diff(join_date, 'years', true);
  values.tenure = Number(tenure).toFixed(2) + ' years';
  return values
};

formatters.maybeConvertKs = function (values) {
  return values;
};

