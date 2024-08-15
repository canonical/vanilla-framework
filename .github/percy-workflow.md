## Percy visual testing

We use [Percy](https://percy.io) for visual testing. Percy tests are run against pull requests to
ensure that PRs to not introduce visual regressions. Your PR will be tested by Percy if it meets the following conditions:

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
The [baseline workflow](workflows/percy-baseline.yml) runs a Percy test on every push to `main`, and sets the results
as the new Percy baseline that all future PRs will be compared against.

#### Prepare Workflow
The [prepare workflow](workflows/percy-prepare.yml) checks out a merge commit of a PR and `main`, then 
uploads all files in the PR that have any affects on the visual appearance of the design system as a GitHub artefact.

#### Snapshot Workflow
The [snapshot workflow](workflows/pr-percy-snapshots.yml) downloads the artefacts from the [prepare workflow](#prepare-workflow) 
and calls the [Percy snapshot action](actions/percy-snapshot/action.yml) to build, run, & visually test Vanilla.

### Example snapshots
Percy is run by executing `yarn percy` or `npm run percy` in the root of the project. The [Percy CLI](https://github.com/percy/cli) 
runs [snapshots.js](../snapshots.js) which returns a list of all the snapshots that Percy will take.

Percy uses our [examples](https://vanillaframework.io/docs/examples) to take snapshots of all components, patterns, and utilities in Vanilla.

`snapshots.js` will take a snapshot of an example template file if the following conditions are met:
- Is an HTML file in `templates/docs/examples/`
- File is not a partial (does not start with `_`)
- File is not included in a combined example (is not in the same directory as a combined example or in a directory that descends from a directory with a combined example)

#### Combined examples
Combined examples are a way to show all the variants of a component or pattern on the same page. This helps us keep our 
Percy usage down by only taking one snapshot of a component or pattern, rather than one for each variant.
Combined examples follow a naming convention: they must be named `combined.html`. 
If `combined.html` is found in a directory, `snapshots.js` will assume that every example in that directory (and its subdirectories) is rendered in the `combined.html` file.

##### Combined example considerations
Combined examples do not currently include the JavaScript or CSS that is included in individual examples by `{% block script %}` and `{% block style %}` tags.

If an example's content is expected to overflow its body (such as a dropdown or tooltip), you can use the `spacing_below` parameter to add space below the example.
`spacing_below` `rems` will be added beneath the example as `margin-bottom`. 

For example:
```html
<!-- Add `12rem` of space below the example -->
{% with spacing_below = 12 %}
  {% include 'docs/examples/patterns/contextual-menu/default.html' %}
{% endwith %}
```

For more information about running Percy from the CLI, see the [Percy CLI documentation](https://www.browserstack.com/docs/percy/take-percy-snapshots/snapshots-via-cli#advanced-options).