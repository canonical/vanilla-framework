const PercyScript = require('@percy/script');
const GetSiteUrls = require('get-site-urls');

const PORT = process.env.PORT || 8101;

PercyScript.run(async (page, percySnapshot) => {
  const links = await GetSiteUrls(`http://localhost:${PORT}/`);

  for (var i = 0; i < links.pages.length; i++) {
    const url = links.pages[i];
    await page.goto(url);

    // ensure the page has loaded before capturing a snapshot
    await page.waitFor('body');

    // create percy snapshot with path as a name
    const path = new URL(url).pathname.replace(/\/?$/, '/');
    await percySnapshot(path, {widths: [375, 1280]});
  }
});
