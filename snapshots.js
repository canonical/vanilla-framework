const PercyScript = require('@percy/script');

const URLS = [
  'http://localhost:8101/',
  'http://localhost:8101/building-vanilla/',
  'http://localhost:8101/customising-vanilla/',
  'http://localhost:8101/examples/',
  'http://localhost:8101/examples/examples/base/abbr/',
  'http://localhost:8101/examples/patterns/accordion/'
];

PercyScript.run(async (page, percySnapshot) => {
  for (var i = 0; i < URLS.length; i++) {
    await page.goto(URLS[i]);
    // ensure the page has loaded before capturing a snapshot
    await page.waitFor('body');
    await percySnapshot(URLS[i]);
  }
});
