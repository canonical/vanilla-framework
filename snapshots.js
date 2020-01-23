const PercyScript = require('@percy/script');
const GetSiteUrls = require('get-site-urls');

PercyScript.run(async (page, percySnapshot) => {
  const links = await GetSiteUrls('http://localhost:8101/');

  for (var i = 0; i < links.pages.length; i++) {
    await page.goto(links.pages[i]);
    // ensure the page has loaded before capturing a snapshot
    await page.waitFor('body');
    await percySnapshot(links.pages[i]);
  }
});
