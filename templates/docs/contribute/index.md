---
wrapper_template: '_layouts/docs.html'
context:
  title: Contribute to code
---

When [submitting a new issue](https://github.com/canonical/vanilla-framework/issues/new/choose), please check that it hasn't already been raised by someone else. We've provided a template for new issues which will help you structure your issue to ensure it can be picked up and actioned easily.

Please provide as much information possible detailing what you're currently experiencing and what you'd expect to experience.

To work on an issue, please fork this repo and create a new branch on your local fork. When you're happy and would like to propose that changeset to be merged back upstream, open a pull request to merge from your local origin/main to upstream/main.

When committing changes, make sure to group related changes so that the project is always in a working state. Use succinct yet descriptive commit messages to allow for easy reading of the commit log.  

## Guidelines

We follow two guideline documents that align with the practices that the Canonical Web Team follows across all projects.

* [HTML code standards](https://webteam.canonical.com/practices/html-code-standards)   
*  [Stylesheets code standards](https://webteam.canonical.com/practices/css)

## File a bug

We use [GitHub issues](https://github.com/canonical/vanilla-framework/issues) to track all our bugs and feature requests.

## Chat with us

Find out about new releases, latest features and get help on [Matrix](https://matrix.to/#/#vanilla:ubuntu.com).

## Running tests locally

The simplest way to run Vanilla framework is to first [install Docker](https://docs.docker.com/install/) and [dotrun](https://github.com/canonical/dotrun#installation), and then use the `dotrun` script to [build the site](https://github.com/canonical/vanilla-framework#vanilla-local-development). Before proposing a pull request, ensure that the tests pass on your local fork. To kick off the tests for your project, in the terminal `dotrun test`.

## Licences

The content of this project is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/), and the underlying code used to format and display that content is licensed under the [LGPLv3](https://opensource.org/licenses/lgpl-3.0.html) by [Canonical Ltd](https://canonical.com/).