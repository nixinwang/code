const scrape = require('website-scraper');

const options = {
    urls: ['http://localhost:3001'],
    recursive: true,
    directory: 'blogscrapped',
    urlFilter: url => url.startsWith('http://localhost:3001')
};

scrape(options, (error, result)=>{});