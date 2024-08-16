## Percy visual testing

We use [Percy](https://percy.io) for visual testing. Percy tests are run against pull requests to
ensure that PRs do not introduce visual regressions. Your PR will be tested by Percy if it meets the following conditions:

- PR is against the `main` branch
- One of the following is true:
  - PR passes Percy selectivity filters
    - PR makes changes to any of the following directories or files:
      - `scss/`
      - `templates/docs/examples/`
      - `templates/_macros/`
      - `tokens/`
      - `sd.config.json`
    - PR is not a draft
  - PR is labeled with "Review: Percy needed"
    - Note that a Percy (labeled) workflow will be triggered on each labelling and synchronisation event on PRs to `main`. They will be skipped shortly after starting if the PR does not have the "Review: Percy needed" label.

To ensure optimal Percy usage, we suggest the following PR flow:

1. Open the PR (against `main`) as a draft. Ensure that all non-Percy PR status checks pass.
2. Apply the "Review: Percy needed" label to the PR to trigger a Percy test.
3. Review the initial Percy build. After a few minutes, it will be available on our [Percy dashboard](https://percy.io/bb49709b/vanilla-framework). You can also click the Percy status check on the PR to navigate directly to the test results.

<img src="https://assets.ubuntu.com/v1/a4b79af3-percy_status_check.png" alt="Percy status check" width="400">

4. If there are additional changes needed to the PR through the review process, you can remove the "Review: Percy needed"
   label and mark the PR as a draft to prevent additional Percy tests from running. Any commits you add to the PR will not trigger a Percy test, as long as the PR is a draft and does not have the "Review: Percy needed" label.
5. Once the PR is ready for final review, remove the draft status and reapply the "Review: Percy needed" label to trigger
   a final Percy test.
6. If the Percy test passes, apply "Review: Percy +1" to indicate that the PR has passed Percy testing.

### Workflows

#### Baseline Workflow

The [baseline workflow](../.github/workflows/percy-baseline.yml) runs a Percy test on every push to `main`, and sets the results
as the new Percy baseline that all future PRs will be compared against.

#### Prepare Workflow

The [prepare workflow](../.github/workflows/percy-prepare.yml) checks out a merge commit of a PR and `main`, then
uploads all files in the PR that have any affects on the visual appearance of the design system as a GitHub artefact.

#### PR Snapshot Workflow

The [snapshot workflow](../.github/workflows/pr-percy-snapshots.yml) downloads the artefacts from the [prepare workflow](#prepare-workflow)
and calls the [Percy snapshot action](../.github/actions/percy-snapshot/action.yml) to build, run, & visually test Vanilla.

The PR snapshot workflow is always called after the completion of the [prepare workflow](#prepare-workflow).

### Example snapshots

Percy is run by executing `yarn percy` or `npm run percy` in the root of the project. The [Percy CLI](https://github.com/percy/cli)
runs [snapshots.js](../snapshots.js) which returns a list of all the snapshots that Percy will take.

Percy uses our [examples](https://vanillaframework.io/docs/examples) to take snapshots of all components, patterns, and utilities in Vanilla.

[snapshots.js](../snapshots.js) will take a snapshot of an example template file if the following conditions are met:

- Is an HTML file in `templates/docs/examples/`
- File is not a partial (does not start with `_`)
- File is not included in a combined example (is not in the same directory as a combined example or in a directory that descends from a directory with a combined example)

#### Snapshot widths

Each snapshot object returned by [snapshots.js](../snapshots.js) has a `widths` array property that specifies the widths (in pixels) at which the snapshot should be captured.
The following table shows the widths at which snapshots are captured and which examples they apply to:

| Device  | Width (px) | Captured on                                                                                                                                    |
| ------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Desktop | 1,280      | All examples                                                                                                                                   |
| Tablet  | 800        | All examples with `responsive` in their names, and [combined examples](#combined-examples) that include a `responsive` file in their directory |
| Mobile  | 375        | Default theme only (currently `light`)                                                                                                         |

Each width is captured as a separate screenshot, and counts as an additional screenshot in Percy's pricing model.

#### Snapshot browsers

Percy can be configured to take snapshots in multiple browsers. Each additional browser counts as an additional set of screenshots in Percy's pricing model.
Vanilla is currently only tested on Chrome. To add additional browsers, view the [Percy project settings page](https://percy.io/bb49709b/vanilla-framework/settings).

#### Combined examples

Combined examples are a way to show all the variants of a component or pattern on the same page. This helps us keep our
Percy usage down by only taking one snapshot of a component or pattern, rather than one for each variant.
Combined examples follow a naming convention: they must be named `combined.html`.
If `combined.html` is found in a directory, [snapshots.js](../snapshots.js) will assume that every example in that directory (and its subdirectories) is rendered in the `combined.html` file.

**Combined examples do not currently include the JavaScript or CSS that is included in individual examples by `{% block script %}` and `{% block style %}` tags.**

##### Creating a combined example

1. Create a Jinja template file named `combined.html` in any subdirectory of `templates/docs/examples/`
2. In your `content` block, create a `with` block that sets the flag `is_combined` to `true`. This will ensure that the [base example template](../templates/_layouts/examples.html) renders the example without the `{% block script %}` and `{% block style %}` tags and adds links to the individual examples.
3. Include the examples you want to combine in the `combined.html` file using `{% include 'path/to/example.html' %}` inside the `with` block. It is good practice to separate the examples in `<section>` tags.

For example, see the [combined example for the button pattern](../templates/docs/examples/patterns/buttons/combined.html).

##### Spacing below examples

If an example's content is expected to overflow its body (such as a dropdown or tooltip), you can use the `spacing_below` parameter to add space below the example.
`spacing_below` `rems` will be added beneath the example as `margin-bottom`.

For example:

```html
<!-- Add `12rem` of space below the example -->
{% with spacing_below = 12 %}
<section>{% include 'docs/examples/patterns/contextual-menu/default.html' %}</section>
{% endwith %}
```

### Testing

[snapshots.test.js](../tests/snapshots.test.js) is a [Jest](https://jestjs.io/) testing file used to test the output of the [snapshots.js](../snapshots.js) file.
It tests that the snapshots are correctly generated. It is run as part of our wider testing script (`yarn test`), but you can also execute it directly by running `npx jest tests/snapshots.test.js`.

[snapshots.js](../snapshots.js) considers `combined.html` to require responsive snapshots if a sibling or descendant file contains `responsive` in its name.
[snapshots.test.js](../tests/snapshots.test.js) does not read the filesystem to decide whether a combined snapshot is responsive.
If you add a combined example that must be captured responsively, you must add the path of that example to `RESPONSIVE_COMBINED_EXAMPLES` in [snapshots.test.js](../tests/snapshots.test.js).

### PR File Inclusion

Only some of a pull request's files are represented in each pull request snapshot test. Depending on which files need to be changed,
you may need to make a separate pull request to make changes to `main` before a pull request will use your changes in Percy testing.

#### Files included in Percy tests

- Visual files:
  - `scss/`
  - `templates/docs/examples/`
  - `templates/_macros/`
  - `tokens/`
  - `sd.config.json`
- Workflows that are run on the `pull_request` trigger, including (but not limited to):
  - [Prepare workflow](../.github/workflows/percy-prepare.yml)
  - [Prepare (labelled) workflow](../.github/workflows/pr-percy-prepare-label.yml)
  - [Prepare (pushed) workflow](../.github/workflows/pr-percy-prepare-push.yml)

Changes to other files should be added to a separate PR and merged before testing a PR that requires their changes.
Otherwise, the changes will not be included in Percy tests.
This notably includes:

- Dependencies
  - `Dockerfile`
  - `package.json`
  - `requirements.txt`
- Workflows that are run on the `workflow_run` trigger:
  - [PR snapshots workflow](../.github/workflows/pr-percy-snapshots.yml)
  - [Snapshot action](../.github/actions/percy-snapshot/action.yml)
- `snapshots.js` and `snapshots.test.js`

### Additional resources

- [Percy CLI documentation](https://www.browserstack.com/docs/percy/take-percy-snapshots/snapshots-via-cli#advanced-options)
- [Percy environment variables](https://www.browserstack.com/docs/percy/get-started/set-env-var#Percy_SDK)
- [Percy workflow blog post](https://ubuntu.com/blog/visual-testing-github-actions-migration-test-optimisation)
