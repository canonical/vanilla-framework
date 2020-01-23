const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8101/');
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor('h1');
  await percySnapshot('/index.html');
});
