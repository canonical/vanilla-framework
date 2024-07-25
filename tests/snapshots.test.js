const {URL} = require('url');
const snapshotsTest = require('../snapshots');

const PORT = process.env.PORT || 8101;

/**
 * Combined examples that embed responsive examples.
 * @type {Array<String>} Mapping of example urls to whether they embed responsive examples.
 */
const RESPONSIVE_COMBINED_EXAMPLES = ['patterns/grid/combined', 'patterns/divider/combined'];

test('Returns correct widths for snapshots, including additional breakpoint for responsive examples', async () => {
  const snapshots = await snapshotsTest();

  const failedUrls = snapshots.filter((snapshot) => {
    const url = new URL(snapshot.url);
    const snapshotPathFromExamplesDir = url.pathname.replace('/docs/examples/', '').replace(/standalone\//g, '');
    const theme = url.searchParams.get('theme')?.toLowerCase()?.trim();

    // All urls must have a theme param
    if (!theme) return true;

    // All snapshots are captured at 1280px width
    let expectedWidths = new Set([1280]);

    if (theme === 'light') {
      // Light snapshots captured at multiple breakpoints
      expectedWidths.add(375);

      const isResponsive =
        snapshot.url.includes('responsive') ||
        // Check if the snapshot is a combined example that embeds responsive examples
        (url.pathname.endsWith('combined') && RESPONSIVE_COMBINED_EXAMPLES.includes(snapshotPathFromExamplesDir));

      if (isResponsive) {
        // Responsive snapshots are also captured at 800px
        expectedWidths.add(800);
      }
    }

    expectedWidths = Array.from(expectedWidths).sort((a, b) => a - b);

    return JSON.stringify(snapshot.widths) !== JSON.stringify(expectedWidths);
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
    if (!url.searchParams.has('theme')) {
      return acc;
    }
    return acc.add(url.searchParams.get('theme'));
  }, new Set());
  expect(JSON.stringify(encounteredThemes)).toBe(JSON.stringify(new Set(['light', 'dark', 'paper'])));
});
