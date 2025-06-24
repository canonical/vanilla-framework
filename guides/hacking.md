# Working on the Vanilla project

## Table of contents

- [Running the project](#running-the-project)
  - [Via dotrun](#via-dotrun)
  - [Via Docker](#via-docker)
- [Viewing documentation and examples](#viewing-documentation-and-examples)
- [QA testing](#qa-testing)
  - [The baseline grid](#the-baseline-grid)
  - [Standalone examples](#standalone-examples)
  - [Cross browser testing](#cross-browser-testing)
- [Adding new icons](#adding-new-icons)

## Running the project

The simplest way to run the Vanilla framework on all operating systems is by [installing Docker](https://docs.docker.com/engine/installation/) (Linux users may need to [add your user to the `docker` group](https://docs.docker.com/engine/installation/linux/linux-postinstall/)) and [dotrun](https://github.com/canonical/dotrun/), and using the `dotrun` command to build or serve the project:

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

When writing SCSS, it's useful to run `dotrun` and `dotrun watch` in separate terminals so changes are quickly built and ready for the browser to pick up on page reload.

If you want to speed up the build or watch scripts you can run the project without including the standalone examples, using `dotrun build:essential` or `dotrun watch:essential`.

## Viewing documentation and examples

Once the server is running, you can visit <http://0.0.0.0:8101/> in your browser to see the project.

The documentation for the latest version of Vanilla framework is hosted at <https://vanillaframework.io/docs>, and the documentation markdown files live in the [`docs` folder](/docs).

The [examples directory](/docs/examples) contains example markup for each component of the framework, and these examples can be viewed in the browser at <http://0.0.0.0:8101/docs/examples/>.

## QA testing

We rigorously test all new additions to the Vanilla project, and the following are the most commonly used techniques we have in our toolbox.

### The baseline grid

All text within an example should sit neatly on the baseline, unless otherwise agreed with the design team.

You can check the baseline alignment is correct when viewing an example, using the toggle present in the bottom right of your browser window.

# ![baseline example](https://assets.ubuntu.com/v1/9121e5d9-baseline.gif 'Baseline')

### Standalone examples

Every example created in Vanilla automatically generates a standalone example. Where a regular example includes the entirety of Vanilla's CSS, the standalone examples exist to ensure that each example works by importing only the bare minimum of CSS needed.

So, an example created at:

`/docs/examples/patterns/foo`

will make available a standalone pattern at:

`/docs/examples/standalone/patterns/foo`

When creating a new example, you will need to create a new, appropriately name SCSS file within [`/scss/standalone`](/scss/standalone), and reference it in your example, using the following block:

```
{% block standalone_css %}patterns_foo{% endblock %}
```

If you are simply updating an existing example, make sure to check the standalone example and, if necessary, add any required includes to that examples standalone SCSS file.

### Cross browser testing

We are committed to testing our work in [several major browsers](https://vanillaframework.io/browser-support). If you lack access to a particular browser, we have a company [BrowserStack](https://www.browserstack.com/) account available for use.

### Running tests locally

Before proposing a pull request, ensure that the tests pass on your local fork. To kick off the tests, run `dotrun test`.

### Percy

When you have [created a pull request](/guides/pull-requests.md), GitHub actions will automatically kick off the Continuous Integration pipeline, including a [Percy](https://percy.io/) check.

Percy builds your branch, then checks each example for changes against the last version of the project that was approved by Percy. If there are any changes, the CI checks will fail, and the changes it found will be available to review in Percy's dashboard.

## Adding new icons

When adding new icons to Vanilla, we need to convert them from SVGs to data URLs so we can use them as background images.

To achieve this quickly, you can use the `icon-svgs-to-mixins` script:

- Place the SVGs to be converted in a directory somewhere on your local machine.
- In your terminal, run `dotrun icon-svgs-to-mixins path/to/svg/directory/`.

This will output a mixin for each SVG in the directory. Each mixin will take its name from the SVG's filename i.e. "tick.svg" will output a mixin named "vf-icon-tick".

Bear in mind that the actual SCSS mixins will evolve over time, so you may need to update the mixin output in this script to match them.
