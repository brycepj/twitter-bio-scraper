var _ = require('lodash');
var scraperjs = require('scraperjs').StaticScraper;
var scraper = module.exports = {};
var _ = require('lodash');
var fmt = require('./formatters');
var Tweets = require('./Tweets');
var fs = require('fs-extra');

var selectors = require('./cfg').scraper.selectors;

scraper.get = function (url) {
  return scraperjs.create(url)
}

scraper.parse = function ($, journalist) {
  var doc = $('#doc');
  var values = _.assign({}, journalist);
  console.log("Parsing begun", journalist.Twitter);
  _.forIn(selectors, function (selector, key) {
    switch (key) {
      case 'tweets':
        values[key] = new Tweets(doc.find(selector), $).store;
        var tweetCount = values[key].length;
        if (tweetCount !== 5) {
          fs.appendFile('/home/bryce/_repos/bio-scraper/dist/badHandles.txt', '\n' + values.Twitter, function (err) {
             
          });
          
        }
        break;
      case 'tenure':
        values[key] = doc.find(selector)[0].attribs.title;
        break;
      default:
        values[key] = doc.find(selector).text();
        break;
    }

  });
  console.log("Parsing finished", journalist.Twitter);
  return fmt.apply(values, [fmt.addNoteField, fmt.tenure, fmt.listByTweet]);
}

