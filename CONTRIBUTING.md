# Contributing to Vanilla Framework

So, you'd like to contribute to Vanilla Framework? Great!


## Bugs and issues

We use the [Issues tracker](https://github.com/ubuntudesign/vanilla-framework/issues) to track all our bugs and feature requests, collectively known as 'issues'.

When [submitting a new issue](https://github.com/ubuntudesign/vanilla-framework/issues/new), please check that it hasn't already been raised by someone else. We've provided a template for new issues which will help you structure your issue to ensure it can be picked up and actioned with minimum fuss.

Please provide as much information possible detailing what you're currently experiencing and what you'd expect to experience.

The outline for creating a new issue is:

**Process**

What is the process to reproduce the issue?

**Expected result**

What did you expect to see/happen when following the process above?

**Current result**

What is the current result you are experiencing?

**Screenshot (of issue)**

If applicable, please provide a screenshot or animated gif of the issue.

**Browser details**

Provide your device and browser details including screen size if applicable.


## Git workflow

To work on an issue, please fork this repo and create a new branch on your local fork to work on an issue. When you're happy and would like to propose that changeset to be merged back upstream, open a pull request to merge from your local `origin/master` to  `upstream/master`.

When committing changes, group related changes so that project is always in a working state. Use succinct yet descriptive commit messages which allow for easy scanning of the commit log.


## Running tests locally

Before proposing a Pull Request, ensure that the test pass on local fork. To kick off the tests, run `gulp test`


## Pull requests

Template for new Pull Requests  is:

**Context**

Why are you proposing this change?

**Done**

What changes have you made to the code base?

**QA**

What steps need to be taken to test your changes?

**Related**

Link to any relevant issues. e.g. `Fixes: #100`
