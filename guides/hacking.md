# Working on the Vanilla project

## Table of contents

- [Running the project](#running-the-project)
    - [Via dotrun](#via-dotrun)
    - [Via Docker](#via-docker)
- [Viewing documentation and examples](#viewing-documentation-and-examples)
- [Relationship between docs pages and examples](#relationship-between-docs-pages-and-examples)
- [QA testing](#qa-testing)
    - [The baseline grid](#the-baseline-grid)
    - [Standalone examples](#standalone-examples)
    - [Combined examples](#combined-examples)
    - [Cross browser testing](#cross-browser-testing)
- [Running tests locally](#running-tests-locally)
- [Percy](#percy)
- [CI overview](#ci-overview)
- [Patterns vs Components](#patterns-vs-components)
- [Class name prefixes](#class-name-prefixes)
- [Language policy](#language-policy)
- [Adding new icons](#adding-new-icons)

## Running the project

The simplest way to run the Vanilla framework on all operating systems is
by [installing Docker](https://docs.docker.com/engine/installation/) (Linux users may need to [add your user to the
`docker` group](https://docs.docker.com/engine/installation/linux/linux-postinstall/))
and [dotrun](https://github.com/canonical/dotrun/), and using the `dotrun` command to build or serve the project:

```bash
# Build CSS into the ./build/ directory:
dotrun build

# Build CSS into the ./build/ directory,
# and start the server:
dotrun

# Dynamically watch for changes to the
# Sass files and build automatically:
dotrun watch

# See a full list of commands:
dotrun exec yarn run --non-interactive
```

When writing SCSS, it's useful to run `dotrun` and `dotrun watch` in separate terminals so changes are quickly built and
ready for the browser to pick up on page reload.

If you want to speed up the build or watch scripts you can run the project without including the standalone examples,
using `dotrun build:essential` or `dotrun watch:essential`.

## Viewing documentation and examples

Once the server is running, you can visit <http://0.0.0.0:8101/> in your browser to see the project.

The documentation for the latest version of Vanilla framework is hosted at <https://vanillaframework.io/docs>, and the
documentation markdown files live in the [`docs` folder](/docs).

The [examples directory](/docs/examples) contains example markup for each component of the framework, and these examples
can be viewed in the browser at <http://0.0.0.0:8101/docs/examples/>.

## Relationship between docs pages and examples

Vanilla’s documentation pages and example templates live side by side but serve different purposes:

- Docs pages (prose, guidance, and page structure) live under `templates/docs/**`.
- Example templates (the rendered component/pattern/utility examples) live under `templates/docs/examples/**`.

When adding or updating examples:

- Add or edit the example’s Jinja template under `templates/docs/examples/**`.
- If a section uses a combined example page (see below), explicitly include your new example in that section’s
  `combined.html` file.
- Many URLs and side‑navigation paths still use the legacy `patterns/` segment; this is expected.
  See [Patterns vs Components](#patterns-vs-components) for the current terminology.

## QA testing

We rigorously test all new additions to the Vanilla project, and the following are the most commonly used techniques we
have in our toolbox.

### The baseline grid

All text within an example should sit neatly on the baseline, unless otherwise agreed with the design team.

You can check the baseline alignment is correct when viewing an example, using the toggle present in the bottom right of
your browser window.

# ![baseline example](https://assets.ubuntu.com/v1/9121e5d9-baseline.gif 'Baseline')

### Standalone examples

Every example created in Vanilla automatically generates a standalone example. Where a regular example includes the
entirety of Vanilla's CSS, the standalone examples exist to ensure that each example works by importing only the bare
minimum of CSS needed.

So, an example created at:

`/docs/examples/patterns/foo`

will make available a standalone pattern at:

`/docs/examples/standalone/patterns/foo`

When creating a new example, you will need to create a new, appropriately named SCSS file within [
`/scss/standalone`](/scss/standalone), and reference it in your example, using the following block:

```
{% block standalone_css %}patterns_foo{% endblock %}
```

If you are simply updating an existing example, make sure to check the standalone example and, if necessary, add any
required includes to that examples standalone SCSS file.

Notes and tips:

- Standalone SCSS filenames generally mirror the example path (e.g., `templates/docs/examples/patterns/accordion/...` →
  `scss/standalone/patterns_accordion.scss`).
- Keep the standalone CSS minimal. If you need broader framework CSS for the example, consider whether it belongs in the
  full (non‑standalone) example instead.

### Combined examples

Combined examples aggregate multiple variants of a component or pattern onto a single page named `combined.html`. We use
them primarily to reduce the number of screenshots Percy must take (controlling quota usage and noise).

Rules of thumb:

- Place `combined.html` in the directory that groups the variants (e.g.,
  `templates/docs/examples/patterns/buttons/combined.html`).
- Explicitly include each example template using `{% include 'path/to/example.html' %}`.
- Append new includes to the end of the file so later examples don’t shift, which keeps Percy diffs focused on your
  changes.
- If any sibling or descendant example includes “responsive” in its name, Percy will capture tablet width in addition to
  desktop and (for the default theme) mobile. See the Percy workflow guide for details.

See also: [Percy workflow](/guides/percy-workflow.md) for snapshot widths, color themes, how `snapshots.js` discovers
examples (including combined pages), and when to update tests.

### Cross browser testing

We are committed to testing our work in [several major browsers](https://vanillaframework.io/browser-support). If you
lack access to a particular browser, we have a company [BrowserStack](https://www.browserstack.com/) account available
for use.

### Running tests locally

Before proposing a pull request, ensure that the tests pass on your local fork. To kick off the tests, run
`dotrun test`.

### Percy

When you have [created a pull request](/guides/pull-requests.md), GitHub actions will automatically kick off the
Continuous Integration pipeline, including a [Percy](https://percy.io/) check.

Percy builds your branch, then checks each example for changes against the last version of the project that was approved
by Percy. If there are any changes, the CI checks will fail, and the changes it found will be available to review in
Percy's dashboard.

## CI overview

This is a brief overview of common checks. See [CI overview](/guides/ci.md) for the full guide.

- Visual testing (Percy): runs on PRs with selective triggers. Combined examples reduce snapshots and quota. See
  [`guides/percy-workflow.md`](./percy-workflow.md) for details.
- Snapshot generation tests (Jest): `tests/snapshots.test.js` validates `snapshots.js` behavior (themes, widths,
  combined examples). If you add a combined example that includes responsive samples, you may need to update the test
  list.
- Parker (CSS metrics): still in use as a practical guardrail though unmaintained upstream. Thresholds are configured in
  `tests/parker.js`. If Parker fails and your change is justified, update thresholds carefully and explain in the PR.
- Cypress (limited): experimental coverage (e.g., `cypress/e2e/patterns/accordion.cy.js`); flakes happen — rerunning in
  GitHub Actions often resolves it. Add new specs only when they provide clear value.
- Spelling (`mdspell`): scripts currently use en‑GB. Our policy is to write new docs in en‑US. If en‑US words are
  flagged, add them to `.spelling` temporarily. See the [Language policy](/guides/language.md).

## Patterns vs Components

Historically we called components “patterns”, and this legacy remains in URLs and the side navigation. Today we use:

- Components: smaller, reusable building blocks (historically located under `patterns/` in URLs/paths).
- Patterns: higher‑level compositions built from components via Jinja macros to create larger sections with a small API.

When contributing, follow existing paths and naming conventions. Do not attempt to rename URL paths or navigation
structure unless undertaking a dedicated migration.

## Class name prefixes

- `.p-` — pattern/component selectors (historical naming), e.g., `.p-accordion`, `.p-accordion__tab`.
- `.u-` — utilities (single‑purpose helpers), e.g., `.u-align-text--right`.
- `.l-` — layout helpers (grid/layout utilities).

Use these prefixes consistently when adding new selectors.

## Language policy

New documentation should be written in en‑US. Existing en‑GB content remains acceptable. Use the `.spelling` file to
suppress `mdspell` warnings for en‑US words and technical terms. See the [Language policy](/guides/language.md) for
details.

## Icons

### Icon architecture

Our icons are generated from SVG files and converted to a set of mixins stored in
the [icon definitions file](../scss/_base_icon-definitions.scss).
The mixins are:

- `vf-icon-NAME-url()` - is a function that returns data URL of the SVG generated with the passed color (white/black)
- `vf-icon-NAME()` - is a legacy mixin for components that want to change the color of the icon, and not depend on the
  theme
- `vf-icon-NAME-themed` - is a themed version of the icon, that will automatically respect the theme set on the parent
  component

The [icon pattern file](../scss/_patterns_icons.scss) then defines mixins for each icon that expose an icon class.
The icon class consumes a base icon placeholder and the appropriate icon mixin. An example is given below:

```scss
@mixin vf-p-icon-history {
  .p-icon--history {
    @extend %icon;
    @include vf-icon-history-themed;
  }
}
```

Generating these mixins, and the icon class binding, is assisted by
a [script](../scripts/convert-svgs-to-icon-mixins.js).
See [adding new icons](#adding-new-icons) for instructions on how to add new icons,
and [migrating old icons](#migrating-old-icons-to-new-icon-them)
for instructions on how to migrate existing icons that don't follow this structure.

### Adding new icons

When adding new icons to Vanilla, we need to convert them from SVGs to data URLs so we can use them as background
images.

To achieve this quickly, you can use the `icon-svgs-to-mixins` script:

- Place the SVGs to be converted in a directory somewhere on your local machine.
- In your terminal, run `dotrun icon-svgs-to-mixins path/to/svg/directory/`.

This will output a mixin for each SVG in the directory. Each mixin will take its name from the SVG's filename i.e. "
tick.svg" will output a mixin named "vf-icon-tick".

Bear in mind that the actual SCSS mixins will evolve over time, so you may need to update the mixin output in this
script to match them.

### Migrating old icons to new icon theming

Some of our icons predate our current icon architecture. Icons that don't consume a `-themed` mixin may not work as
expected when used in a dark theme.

```scss
// _base_icon-definitions.scss

// This icon mixin only sets the color of the icon; it does not adjust according to the active theme.
@mixin vf-icon-restart($color) {
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.197 1.15v4.931h-1.5l-.001-2.478a5.5 5.5 0 106.302-.215l.75-1.3a7 7 0 11-8.263.562H1.268v-1.5h4.93z' fill='#{vf-url-friendly-color($color)}'  fill-rule='evenodd'/%3E%3C/svg%3E");
}

// _patterns_icons.scss
@mixin vf-p-icon-restart {
  .p-icon--restart {
    @extend %icon;
    @include vf-icon-restart($colors--light-theme--icon);

    [class*='--dark'] &,
    body.is-dark &,
    &.is-light, // DEPRECATED: use is-dark instead
    &.is-dark {
      @include vf-icon-restart($colors--dark-theme--icon);
    }
  }
}
```

There is not currently a script to migrate these icons to the new architecture. To migrate these icons, you can either:

1. Obtain the SVG for the underlying icon following the [adding new icons](#adding-new-icons) process, entirely
   recreating the icon.
2. Use the existing icon's data URL and refactor the icon mixin to consume the `-themed` mixin.

Steps for (1) are outlined in the [adding new icons](#adding-new-icons) section. Steps for (2) are outlined below:

1. Copy the existing icon's data URL.
2. Create a function `vf-icon-NAME-url` in the [icon definitions file](../scss/_base_icon-definitions.scss) that returns
   the data URL. The function should accept a color as a parameter, and apply that color to the icon using
   `vf-url-friendly-color()`.

```scss
@function vf-icon-restart-url($color) {
  @return url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.197 1.15v4.931h-1.5l-.001-2.478a5.5 5.5 0 106.302-.215l.75-1.3a7 7 0 11-8.263.562H1.268v-1.5h4.93z' fill='#{vf-url-friendly-color($color)}'  fill-rule='evenodd'/%3E%3C/svg%3E");
}
```

3. Create a mixin `vf-icon-NAME` in the [icon definitions file](../scss/_base_icon-definitions.scss) that consumes the
   URL function and passes a color parameter (defaulting to
   `$colors--light-theme--icon`).

```scss
@mixin vf-icon-restart($color: $colors--light-theme--icon) {
  background-image: vf-icon-restart-url($color);
}
```

4. Create a new mixin `vf-icon-NAME-themed` in the [icon definitions file](../scss/_base_icon-definitions.scss) that
   uses `vf-themed-icon` to set the icon color based on active theme.

```scss
@mixin vf-icon-restart-themed {
  @include vf-themed-icon($light-value: vf-icon-restart-url($colors--light-theme--icon), $dark-value: vf-icon-restart-url($colors--dark-theme--icon));
}
```

5. Update the icon pattern file to consume the themed mixin. You can also remove any theme class selectors, as these are
   handled by `vf-themed-icon`.

```scss
@mixin vf-p-icon-restart {
  .p-icon--restart {
    @extend %icon;
    @include vf-icon-restart-themed;
  }
}
```
