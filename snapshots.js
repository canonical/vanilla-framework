const PercyScript = require('@percy/script');
const GetSiteUrls = require('get-site-urls');

const PORT = process.env.PORT || 8101;

PercyScript.run(async (page, percySnapshot) => {
  let links = await GetSiteUrls(`http://localhost:${PORT}/`);

  links = links.pages
    // only snapshot examples, not the whole site
    .filter((url) => url.includes('/docs/examples/'))
    // remove standalone examples listing from screenshots
    .filter((url) => !url.match(/examples\/standalone$/));

  // disable JS requests to prevent CodePen from rendering examples
  await page.setRequestInterception(true);
  page.on('request', (request) => {
    if (request.resourceType() === 'script') request.abort();
    else request.continue();
  });

  for (var i = 0; i < links.length; i++) {
    const url = links[i];
    await page.goto(url);

    // ensure the page has loaded before capturing a snapshot
    await page.waitFor('body');

    // create percy snapshot with path as a name
    const path = new URL(url).pathname.replace(/\/?$/, '/');
    await percySnapshot(path, {widths: [375, 1280]});
  }
});
