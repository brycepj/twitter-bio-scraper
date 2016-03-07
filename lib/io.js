var _ = require('lodash');
var fs = require('fs-extra');
var paths = require('./lib/cfg').paths;
var io = module.exports = {};

io.getData = fs.readJsonSync(paths.sampleSrcJson)
  .filter(function(journalist) {
    return journalist.Twitter === '';
  });


io.makeRequests = function (journalists) {
  var Promise = require('bluebird');
  var scraper = require('./scraper');
  var promises = [];
  
  _.forEach(journalists, function (journalist, idx) {
    var counter = 0;
    var promise = scraper.get(journalist.Twitter)
      .scrape(function ($) {
        console.log('Response received', counter++, journalist.Twitter);
        return scraper.parse($, journalist);
      })
      .catch(function (err) {
        throw Error(err);
      });
    console.log('Request made --', journalist.Twitter);
    promises.push(promise);
  });
  return Promise.all(promises);
}



io.writeXls = function (writePath, json) {
  var json2xls = require('json2xls');
  var xls = json2xls(json);

  fs.writeFileSync(writePath, xls, 'binary');
}