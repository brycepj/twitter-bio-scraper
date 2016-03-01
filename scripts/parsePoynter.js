var LineByLineReader = require('line-by-line'),
		fs = require('fs-extra'),
    lr = new LineByLineReader('/home/bryce/_repos/bio-scraper/data/poynterHandles.txt'),
		writeTargetPath = '/home/bryce/_repos/bio-scraper/data/poynterHandles.json',
		handlesStore = [];

lr.on('error', function (err) {
	throw Error(err);
});

lr.on('line', function (line) {
	var handle = line.match(/\(([^)]+)\)/)[1];
	handle = handle.replace('@','');
	handlesStore.push(handle);
});

lr.on('end', function () {
	console.log('Read', handlesStore.length, 'lines');
	fs.writeJson(writeTargetPath, handlesStore, function(err){
		if (err) throw Error(err);
		console.log('Done writing to ', writeTargetPath);
	});
});