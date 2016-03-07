const xlsxj = require("xlsx-to-json");
   
xlsxj({
  input: "/home/bryce/_repos/bio-scraper/data/Original_sample.xlsx", 
  output: "/home/bryce/_repos/bio-scraper/data/Original_sample.json"
}, function(err, result) {
  if(err) {
    console.error(err);
  }else {
    console.log(result[0]);
  }
});