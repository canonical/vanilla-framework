# Pull requests

## Table of contents

- [Working on an issue](#working-on-an-issue)
- [Preparing a pull request for review](#preparing-a-pull-request-for-review)

## Working on an issue

To work on an issue, please fork this repo and create a new branch on your local fork. When you're happy and would like to propose that changeset to be merged back upstream, open a pull request to merge from your local `origin/master` to `upstream/develop`.

When committing changes, make sure to group related changes so that the project is always in a working state. Use succinct yet descriptive commit messages to allow for easy reading of the commit log.

## Preparing a pull request for review

### Component status

If your work includes any of the following:

- new patterns or CSS classes
- deprecated patterns
- breaking changes

your changes should be listed in [Component Status](/templates/docs/component-status). Within that document is a list of all prior changes, each associated with a particual version release.

When updating the document, first note the [most recently released version of Vanilla](https://github.com/canonical-web-and-design/vanilla-framework/tags). If the changes listed in the "What's new in Vanilla" table match that version, those changes should be moved to the "Previously in Vanilla" table below.

You can then detail your changes as a row in the "What's new" table.

### Updating the Vanilla version number

We use [semver](https://semver.org/) conventions when deciding how to update the Vanilla version in [package.json](https://github.com/canonical-web-and-design/vanilla-framework/blob/master/package.json):

- <code>\_.\_.**X**</code>: use a patch release when the release is only bugfixes,
- <code>\_.**X**.\_</code>: use minor release if there are any added features (new components or new variants/modifiers to existing components)
- <code>**X**.\_.\_</code>: any big breaking changes should happen in major release (they should happen rarely and be carefully planned)

When working on an upcoming release, we update Vanilla's version number in the first PR that requires a version bump, according to the above conventions. All other PRs merged before the release will then use this version number, unless one of those PRs introduces a change that requires a more significant bump.

For example, if the first PR introduced a bugfix, the version number would increase to <code>\_.\_.**X**</code>, but if a subsequent PR introduced new features, the version number would need to increase again to <code>\_.**X**.\_</code>

### Status labels

To help draw a user's attention to new features while navigating the docs, we use status labels in the sidebar navigation, and within the example's documentation.

Any affected examples in your PR should have an appropriate label, either `new`, `updated` or `deprecated`, added to the [sidebar navigation](/templates/_layouts/docs.html). This can by passing a third argument to any instance of `side_nav_item()` in that file, e.g.:

```
{{ side_nav_item("/docs/patterns/contextual-menu", "Contextual menu", 'updated) }}
```

An example's documentation should then also include a status label within the body of the page, using the appropriate label:

```
<span class="p-label--new">New</span>
<span class="p-label--updated">Updated</span>
<span class="p-label--deprecated">Deprecated</span>
```
