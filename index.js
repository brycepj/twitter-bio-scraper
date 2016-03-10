require('./lib/globals');
var _ = require('lodash');
var fs = require('fs-extra');
var cfg = require('./lib/cfg');
var paths = cfg.paths, http = cfg.http;
var io = require('./lib/io');

var baseData = io.getData; 

io.makeRequests(baseData)
  .then(function (data) {
    console.log("All request responses received", data.length);
    data = _.flatten(data);
    fs.writeJson(paths.sampleDistJson, data);
    console.log('JSON Written');
    return data;
  })
  .then(function (data) {
    console.log("Attempting to write xlxs");
    io.writeXls(paths.sampleDistXls, data);
    console.log('Done');
  }).catch(function (err) { throw Error(err) });







