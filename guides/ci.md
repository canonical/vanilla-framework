# Continuous Integration and automated checks

This guide explains what runs locally versus in CI, how visual testing works, and how to act on failures.

## Overview

- Local: `yarn test` (or `npm run test`) via `dotrun test` runs spelling, formatting/linting, Parker metrics, and Jest
  tests. Some tasks (e.g., Percy) are CI-only.
- CI (GitHub Actions): Percy visual tests run on PRs that meet selectivity rules or when labeled.
  See [Percy workflow](/guides/percy-workflow.md).
- Legacy deployment jobs run in Jenkins for PS5 (high-level only; see [Deployment](/guides/deployment.md)).

## Local checks

It's good practice to run these checks locally before pushing changes.

```
npx prettier -c -w . # Formatting/linting, applying safe fixes
yarn test # Spellcheck, Parker metrics, Jest tests
```

Locally, you’ll see failures from:

- Spelling (`mdspell`): currently configured with en‑GB; our policy for new docs is en‑US. Use `.spelling` to ignore
  valid en‑US words and technical terms. See [Language policy](/guides/language.md).
- Format/lint (e.g., Prettier/Stylelint): Read the output for fix details.
- Parker CSS metrics: see [Parker CSS metrics](#parker-css-metrics) below for details.
- Jest tests: snapshot configuration tests; see [Snapshot generation tests (Jest)](#snapshot-generation-tests-jest)
  below for details.

## Visual testing (Percy)

Percy runs visual snapshot tests against the examples site. On PRs, it triggers when:

- The PR targets `main`, and either:
    - It passes the selectivity filters (changes to `scss/`, `templates/docs/examples/`, `templates/_macros/`,
      `tokens/`, or `sd.config.json`, and it’s not a draft), or
    - The PR carries the label `Review: Percy needed`.

Key points:

- Examples are discovered by `snapshots.js` and include both regular and `standalone/` variants for many paths.
- Combined examples (`combined.html`) reduce snapshot counts by aggregating variants; this helps control quota.
- Examples are snapshotted in all themes (light, dark, paper), at the large screen size. On the light theme, examples
  are also snapshotted at the small screen size. If an example is "responsive" (indicated by including "responsive" in
  the filename), it will be snapshotted at the medium screen size.
  See [Percy workflow](/guides/percy-workflow.md) for device widths, themes, and combined-behavior rules.
- Reviewing Percy: follow the flow in the Percy guide; when in doubt, re-run the job by re-applying the "Review: Percy
  needed" label.

## Snapshot generation tests (Jest)

The file `tests/snapshots.test.js` validates that `snapshots.js` returns a correct set of snapshots:

- Ensures unique names and URLs.
- Ensures correct base URL and expected widths.
- Special-cases combined examples that embed responsive examples.

If you add a `combined.html` for a group that should be treated as responsive, and the test does not infer it from
filenames, update `RESPONSIVE_COMBINED_EXAMPLES` in `tests/snapshots.test.js`.

## Parker CSS metrics

Parker provides coarse CSS complexity/size guardrails. It’s unmaintained upstream but still catches regressions.
Thresholds live in `tests/parker.js` (e.g., “Stylesheet size”, “Top specificity”). Example failure:

```
$ node -e 'require("./tests/parker").parkerTest()'
✘ - Stylesheet size (519994) exceeds threshold (422850)
error Command failed with exit code 1.
```

If your change is justified, update the relevant thresholds in `tests/parker.js` and explain the rationale in your PR.

## Cypress (limited)

Cypress usage is experimental and not central to our process. Some specs exist (for example,
`cypress/e2e/patterns/accordion.cy.js`). Flakes can happen; re-running in GitHub Actions often resolves transient
failures. Prefer Percy and unit-level checks unless an E2E adds clear value.

## Spelling (`mdspell`)

Scripts currently use en‑GB dictionaries. Our policy is to write new docs in en‑US. If `mdspell` flags a valid en‑US
spelling or a technical term, add it to `.spelling`. See [Language policy](/guides/language.md).
