var LineByLineReader = require('line-by-line'),
		fs = require('fs-extra'),
    lr = new LineByLineReader('/home/bryce/_repos/bio-scraper/data/original_file_urls.txt'),
		writeTargetPath = '/home/bryce/_repos/bio-scraper/data/originalFile.json',
		urlsStore = [];

lr.on('error', function (err) {
	throw Error(err);
});

lr.on('line', function (url) {
	url = url.replace('http:','https:');
	urlsStore.push(url);
});

lr.on('end', function () {
	console.log('Read', urlsStore.length, 'lines');
	fs.writeJson(writeTargetPath, urlsStore, function(err){
		if (err) throw Error(err);
		console.log('Done writing to ', writeTargetPath);
	});
});