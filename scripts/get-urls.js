const GetSiteUrls = require('get-site-urls');

GetSiteUrls('http://localhost:8101').then(links =>
  links.pages.forEach(function(page) {
    console.log(page);
  })
);
