var cfg = module.exports = {};

var scraper = cfg.scraper = {};

scraper.selectors = {
  twitter_bio: '.ProfileHeaderCard-bio',
  twitter_tenure: '.ProfileHeaderCard-joinDateText',
  twitter_tweet_count: '.ProfileNav-item--tweets .ProfileNav-value',
  twitter_following: '.ProfileNav-item--following .ProfileNav-value',
  twitter_followers: '.ProfileNav-item--followers .ProfileNav-value',
  tweets: '.stream-item',
  twitter_location: '.ProfileHeaderCard-locationText'
};

var paths = cfg.paths = {};

paths.sampleSrcJson = '/home/bryce/_repos/bio-scraper/data/Original_sample.json';
paths.sampleDistJson = '/home/bryce/_repos/bio-scraper/dist/sample.json';
paths.sampleDistXls = '/home/bryce/_repos/bio-scraper/dist/final.xlsx';



