const {URL} = require('url');
const snapshotsTest = require('../snapshots');

const PORT = process.env.PORT || 8101;

test('Number of snapshots', async () => {
  const snapshots = await snapshotsTest();
  const totalSnapshots = snapshots.reduce((acc, snapshot) => acc + snapshot.widths.length, 0);
  expect(totalSnapshots).toBe(2906);
});

test('Snapshot widths', async () => {
  const snapshots = await snapshotsTest();

  const failedUrls = snapshots.filter((snapshot) => {
    const hasThemeParam = new URL(snapshot.url).searchParams.has('theme');
    let expectedWidths = new Set();
    if (hasThemeParam) {
      expectedWidths.add(1280);
    } else {
      expectedWidths.add(375);
      if (snapshot.url.includes('responsive')) {
        expectedWidths.add(800);
      }
    }
    expectedWidths = Array.from(expectedWidths).sort((a, b) => a - b);

    return JSON.stringify(snapshot.widths) !== JSON.stringify(expectedWidths);
  });
  expect(failedUrls).toHaveLength(0);
});

test('Unique snapshot names', async () => {
  const snapshots = await snapshotsTest();
  const snapshotNames = snapshots.map((snapshot) => snapshot.name);
  const uniqueSnapshotNames = new Set(snapshotNames);
  expect(uniqueSnapshotNames.size).toBe(snapshotNames.length);
});

test('Unique snapshot urls', async () => {
  const snapshots = await snapshotsTest();
  const snapshotUrls = snapshots.map((snapshot) => snapshot.url);
  const uniqueSnapshotUrls = new Set(snapshotUrls);
  expect(uniqueSnapshotUrls.size).toBe(snapshotUrls.length);
});

test('Snapshot valid URL', async () => {
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

test('Snapshot base URL', async () => {
  const snapshots = await snapshotsTest();
  const failedUrls = snapshots.filter((snapshot) => !snapshot.url.startsWith(`http://localhost:${PORT}/docs/examples/`));
  expect(failedUrls).toHaveLength(0);
});

test('Themes', async () => {
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
