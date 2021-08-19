## Done

[List of work items including drive-bys]

Fixes [list issues/bugs if needed]

## QA

- Open [demo](insert-demo-url)
- [Add QA steps]
- Review updated documentation:
  - [List any updated documentation for review]

### Check if PR is ready for release

If this PR contains Vanilla SCSS code changes, it should contain the following changes to make sure it's ready for the release:

- [ ] PR should have one of the following labels to automatically categorise it in release notes:
  - `Feature 🎁`, `Breaking Change 💣`, `Bug 🐛`, `Documentation 📝`, `Maintenance 🔨`.
- [ ] Vanilla version in `package.json` should be updated relative to the [most recent release](https://github.com/canonical-web-and-design/vanilla-framework/releases/latest), following semver convention:
  - if CSS class names are not changed it can be bugfix relesase (x.x.**X**)
  - if CSS class names are changed/added/removed it should be minor version (x.**X**.0)
  - see the [wiki for more details](https://github.com/canonical-web-and-design/vanilla-framework/wiki/Release-process#pre-release-tasks)
- [ ] Any changes to component class names (new patterns, variants, removed or added features) should be listed on the [what's new page](https://github.com/canonical-web-and-design/vanilla-framework/blob/master/templates/docs/whats-new.md).
- [ ] Documentation side navigation should be updated with the relevant labels.


## Screenshots

[if relevant, include a screenshot or screen capture]
