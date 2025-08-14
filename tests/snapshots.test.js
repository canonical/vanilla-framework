const {URL} = require('url');
const snapshotsTest = require('../snapshots');
const {SNAPSHOT_BREAKPOINTS, SNAPSHOT_COLOR_THEMES, PORT, DEFAULT_COLOR_THEME, COLOR_THEME_QUERY_PARAM_NAME} = require('../snapshots');

/**
 * Combined examples that embed responsive examples.
 * @type {Array<String>} Mapping of example urls to whether they embed responsive examples.
 */
const RESPONSIVE_COMBINED_EXAMPLES = [
  'patterns/grid/combined',
  'patterns/grid-8/combined',
  'patterns/divider/combined',
  'patterns/image/combined',
  'patterns/equal-heights/combined',
  'patterns/equal-height-row/combined',
  'patterns/lists/combined',
  'patterns/rich-list-horizontal/combined',
  'patterns/basic-section/combined',
];

test('Returns correct widths for snapshots, including additional breakpoint for responsive examples', async () => {
  const snapshots = await snapshotsTest();

  const failedUrls = snapshots.filter((snapshot) => {
    const url = new URL(snapshot.url);
    const snapshotPathFromExamplesDir = url.pathname.replace('/docs/examples/', '').replace(/standalone\//g, '');
    const theme = url.searchParams.get(COLOR_THEME_QUERY_PARAM_NAME)?.toLowerCase()?.trim();

    // All urls must have a theme param
    if (!theme) return true;

    // All snapshots are captured at desktop width
    let expectedWidths = new Set([SNAPSHOT_BREAKPOINTS.desktop]);

    if (theme === DEFAULT_COLOR_THEME) {
      // Default theme snapshots captured at multiple breakpoints
      expectedWidths.add(SNAPSHOT_BREAKPOINTS.mobile);

      const isResponsive =
        snapshot.url.includes('responsive') ||
        // Check if the snapshot is a combined example that embeds responsive examples
        (url.pathname.endsWith('combined') && RESPONSIVE_COMBINED_EXAMPLES.includes(snapshotPathFromExamplesDir));

      if (isResponsive) {
        // Responsive snapshots are also captured at tablet size
        expectedWidths.add(SNAPSHOT_BREAKPOINTS.tablet);
      }
    }

    expectedWidths = Array.from(expectedWidths).sort((a, b) => a - b);

    return JSON.stringify(snapshot.widths) !== JSON.stringify(expectedWidths);
  });
  expect(failedUrls).toHaveLength(0);
});

test('Returned snapshots have only one url per theme', async () => {
  const snapshots = await snapshotsTest();
  const encountered = new Map();
  snapshots.forEach((snapshot) => {
    const url = new URL(snapshot.url);
    const theme = url.searchParams.get(COLOR_THEME_QUERY_PARAM_NAME);
    if (!encountered.has(url.pathname)) {
      encountered.set(url.pathname, 0);
    }
    encountered.set(url.pathname, encountered.get(url.pathname) + 1);
  });

  const failedUrls = snapshots
    .map((snapshot) => snapshot.url)
    .filter((snapshotAbsoluteUrl) => {
      const url = new URL(snapshotAbsoluteUrl);
      return encountered.get(url.pathname) !== SNAPSHOT_COLOR_THEMES.length;
    });

  expect(failedUrls).toHaveLength(0);
});

test('Returns snapshots with unique names', async () => {
  const snapshots = await snapshotsTest();
  const snapshotNames = snapshots.map((snapshot) => snapshot.name);
  const uniqueSnapshotNames = new Set(snapshotNames);
  expect(uniqueSnapshotNames.size).toBe(snapshotNames.length);
});

test('Returns snapshots with unique URLs', async () => {
  const snapshots = await snapshotsTest();
  const snapshotUrls = snapshots.map((snapshot) => snapshot.url);
  const uniqueSnapshotUrls = new Set(snapshotUrls);
  expect(uniqueSnapshotUrls.size).toBe(snapshotUrls.length);
});

test('Returns snapshots with valid URLs', async () => {
  const snapshots = await snapshotsTest();
  const failedUrls = snapshots.filter((snapshot) => {
    try {
      new URL(snapshot.url);
      return false;
    } catch (error) {
      return true;
    }
  });
  expect(failedUrls).toHaveLength(0);
});

test('Returns snapshots with correct base URLs', async () => {
  const snapshots = await snapshotsTest();
  const failedUrls = snapshots.filter((snapshot) => !snapshot.url.startsWith(`http://localhost:${PORT}/docs/examples/`));
  expect(failedUrls).toHaveLength(0);
});

test('Returns snapshots with only the expected set of color themes', async () => {
  const snapshots = await snapshotsTest();
  const encounteredThemes = snapshots.reduce((acc, snapshot) => {
    const url = new URL(snapshot.url);
    if (!url.searchParams.has(COLOR_THEME_QUERY_PARAM_NAME)) {
      return acc;
    }
    return acc.add(url.searchParams.get(COLOR_THEME_QUERY_PARAM_NAME));
  }, new Set());
  expect(JSON.stringify(encounteredThemes)).toBe(JSON.stringify(new Set(SNAPSHOT_COLOR_THEMES)));
});
