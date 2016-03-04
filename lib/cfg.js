var cfg = module.exports = {};

var scraper = cfg.scraper = {};

scraper.selectors = {
  name: '.ProfileHeaderCard-nameLink',
  bio: '.ProfileHeaderCard-bio',
  tenure: '.ProfileHeaderCard-joinDateText',
  tweet_count: '.ProfileNav-item--tweets .ProfileNav-value',
  following: '.ProfileNav-item--following .ProfileNav-value',
  followers: '.ProfileNav-item--followers .ProfileNav-value',
  tweets: '.stream-item',
  location: '.ProfileHeaderCard-locationText'
};

var paths = cfg.paths = {};

paths.poynterSrcJson = '/home/bryce/_repos/bio-scraper/data/poynterHandles.json';
paths.poynterDistJson = '/home/bryce/_repos/bio-scraper/dist/poynter.json';
paths.poynterDistXls = '/home/bryce/_repos/bio-scraper/dist/poynter.xlsx';

var http = cfg.http = {};

http.twitterBase = 'https://twitter.com/'; 

