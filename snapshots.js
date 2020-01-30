const PercyScript = require('@percy/script');
const GetSiteUrls = require('get-site-urls');

const PORT = process.env.PORT || 8101;

PercyScript.run(async (page, percySnapshot) => {
  const links = await GetSiteUrls(`http://localhost:${PORT}`);

  // add links to standalone examples for base and patterns
  let urls = links.pages.flatMap(url => {
    if (url.includes('/examples/base/') || url.includes('/examples/patterns/')) {
      return [url, `${url}?standalone`];
    } else {
      return url;
    }
  });

  urls.sort();

  // disable JS requests to prevent CodePen from rendering examples
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.resourceType() === 'script') request.abort();
    else request.continue();
  });

  for (var i = 0; i < urls.length; i++) {
    const url = new URL(urls[i]);
    await page.goto(url.href);

    // ensure the page has loaded before capturing a snapshot
    await page.waitFor('body');

    // create percy snapshot with path (and optional params) as a name
    const path = `${url.pathname}${url.search}`;
    await percySnapshot(path, {widths: [375, 1280]});
  }
});
