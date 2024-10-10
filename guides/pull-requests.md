# Pull requests

## Table of contents

- [Working on an issue](#working-on-an-issue)
- [Preparing a pull request for review](#preparing-a-pull-request-for-review)
- [Documentation site status labels](#documentation-site-status-labels)

## Working on an issue

To work on an issue, please fork this repo and create a new branch on your fork.
When you're happy and would like to propose that changeset to be merged back
upstream, open a pull request to merge from your fork's branch to `main` on this
repo.

When committing changes, make sure to group related changes so the project is
always in a working state. Use succinct yet descriptive commit messages to allow
for easy reading of the commit log.

## Preparing a pull request for review

### Updating "What's new"

If your work involves any of the following:

- New patterns or CSS classes
- Deprecated patterns
- Breaking changes

Then your changes should be listed on the
[What's new](/templates/docs/whats-new.html) page, which pulls data from a
[Releases YAML file](/releases.yml). Within that document is a list of all prior
changes, each associated with a particular version release.

When updating the document, first note the
[most recently released version of Vanilla](https://github.com/canonical/vanilla-framework/tags).
If the changes listed in the "What's new in Vanilla" table match that version,
those changes should be moved to the "Previously in Vanilla" table below.

You can then detail your changes by editing the Releases YAML file described
above.

### Updating the Vanilla version number

We use [semver](https://semver.org/) conventions when deciding how to update the
Vanilla version in [package.json](/package.json):

- <code>\_.\_.**X**</code>: use a patch release when the release is only
  bugfixes,
- <code>\_.**X**.\_</code>: use minor release if there are any added features
  (new components or new variants/modifiers to existing components)
- <code>**X**.\_.\_</code>: any big breaking changes should happen in major
  release (they should happen rarely and be carefully planned)

When working on an upcoming release, we update Vanilla's version number in the
first PR that requires a version bump, according to the above conventions. All
other PRs merged before the release will then use this version number, unless
one of those PRs introduces a change that requires a more significant bump.

For example, if the first PR introduced a bugfix, the version number would
increase to <code>\_.\_.**X**</code>, but if a subsequent PR introduced new
features, the version number would need to increase again to
<code>\_.**X**.\_</code>

### Using Github PR Labels

We use a variety of Labels to manage the status of a PR.

When creating a PR, determine what types of review your PR requires and apply
the appropriate Labels - for instance, `Review: Design needed` and
`Review: Code needed` for a PR that requires design and dev reviews.

When reviewing a PR, after performing the necessary reviews, remove the
appropriate `needed` Labels and apply the relevant `+1` Labels instead,
indicating that the PR has passed these specific review types. Alternatively,
if your review indicates that further work is needed for the PR to pass review,
apply the relevant `-1` Labels.

### Submitting & merging a PR

#### Percy visual testing

Please review the [Percy visual testing](percy-workflow.md) documentation for a
detailed overview of how to work with the Percy visual testing system.

#### Merging a PR

After the necessary review steps have been completed and the PR is ready to be
merged, the creator of the PR should merge it themselves. The type of merge to use
should be decided using the following logic:

- If the PR is small - for example, a PR consisting of 2 commits that modify
  fewer than a dozen lines of code - `Squash and merge` should be used
- If the PR is medium or large - for example, a PR consisting of 10 commits that
  modify 100 lines of code - `Rebase and merge` should be used

Ultimately, use your best judgment; if you feel like your PR is arguably too
large to comfortably `Squash and merge`, then default to `Rebase and merge`.

## Documentation site status labels

To help draw a user's attention to new features while navigating the docs, we
use status labels in the sidebar navigation and within the example's
documentation.

Any affected examples in your PR should have an appropriate label - `New`,
`Updated`, or `Deprecated` - these are pulled from the `status` key within the
[Releases YAML file](/releases.yml) mentioned above. The appropriate indicator
will then automatically be added to the sidebar navigation.

Additionally, you should manually add a status label to the appropriate
heading on the docs page of each component you make changes to - this is done by
using the `{{ status }}` Jinja partial. For example:

```html
<!-- An example of a New feature heading -->
## Wrap variant {{ status('new') }}

<!-- An example of an Updated feature heading -->
## Nesting {{ status('updated') }}

<!-- An example of a Deprecated feature heading -->
## Separators {{ status('deprecated') }}
```

When a new version of Vanilla is set to be released, any manually-added status
labels should be removed. Sidebar status labels set using the Releases YAML file
will automatically be updated.
