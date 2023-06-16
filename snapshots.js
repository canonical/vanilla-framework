const PORT = process.env.PORT || 8101;

module.exports = async () => {
  const {default: GetSiteUrls} = await import('get-site-urls');
  let links = await GetSiteUrls(`http://localhost:${PORT}/`);
  let urls = [];

  links = links.found
    // only snapshot examples, not the whole site
    .filter((url) => url.includes('/docs/examples/'))
    // remove standalone examples listing from screenshots
    .filter((url) => !url.match(/examples\/standalone$/));

  for (var i = 0; i < links.length; i++) {
    const url = links[i];

    const path = new URL(url).pathname.replace(/\/?$/, '/');
    const isResponsive = path.indexOf('responsive') >= 0;

    urls.push({
      url: url,
      name: path,
      widths: isResponsive ? [375, 800, 1280] : [375, 1280],
    });
  }

  return urls;
};
