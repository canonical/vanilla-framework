# Release process

## Table of contents

- [Pre release tasks](#pre-release-tasks)
- [Releasing](#releasing)
  - [Releasing on GitHub](#releasing-on-github)
  - [Releasing to NPM](#releasing-to-npm)
  - [Releasing to assets server](#releasing-to-assets-server)
- [Deploying vanillaframework.io](#deploying-vanillaframeworkio)
- [Releasing React Components](#react-components)
- [Promotion](#promotion)

## Pre release tasks

- Merge all pull requests relating to the given release
- On [GitHub releases page](https://github.com/canonical/vanilla-framework/releases) update latest draft automatically created by Release Drafter
  - make sure automatic version is correct
  - clean up the log from unnecessary lines, move changes to relevant section if it didn't happen automatically based on labels, reword the changes for better readability

## Releasing

- Pull locally latest version from the main branch
- `dotrun build`
  - make sure everything builds without any errors
- `dotrun test`
  - make sure all test pass

### Releasing on GitHub

- Publish the latest release on [Github](https://github.com/canonical/vanilla-framework/releases/) with the new version number and add the release notes you created earlier.
  - Make sure to mark the release as a pre-release if it's an Alpha or Beta

### Releasing to NPM

This should happen automatically after publishing the release on GH (thanks to [GH actions workflow](https://github.com/canonical/vanilla-framework/blob/main/.github/workflows/publish-on-release.yml)).

In case that fails, here are manual steps to release to NPM:

- Update your local tags with `git fetch --tags`
- Check out the tag with `git checkout TAGNAME`
- Publish the package with `npm publish` and check that your new release appears on the [NPM website](https://www.npmjs.com/package/vanilla-framework)

### Releasing to assets server

This should happen automatically after publishing the release on GH (thanks to [GH actions workflow](https://github.com/canonical/vanilla-framework/blob/main/.github/workflows/publish-on-release.yml)).

In case that fails, here are manual steps to release to assets server:

- `dotrun build`
- `upload-assets --url-path vanilla-framework-version-X.X.X.min.css build/css/build.css`

## Deploying vanillaframework.io

- [Staging](https://jenkins.canonical.com/webteam/view/vanilla-framework/job/vanillaframework.io-staging/) should be automatically deployed on every push to the main branch
- Test the [staging build](https://staging.vanillaframework.io/)
- Deploy to production on https://webteam.canonical.com/releases
  - or [Deploy the site to production directly on jenkins](https://jenkins.canonical.com/webteam/view/vanilla-framework/job/vanillaframework.io-production/)

## Releasing React Components

When the Vanilla npm package is published, [react-components](https://github.com/canonical/react-components/) project should be updated to latest version of Vanilla (renovate should prepare an update PR) and the updated `react-components` package should be published as well.

Please follow the [release process](https://github.com/canonical/react-components/blob/main/PUBLISH-NPM-PACKAGE.md) documented in the `react-components` repository.

## Promotion

Only major/minor releases need to be promoted.

- New releases should be announced on newsletter via MailChimp
- New releases should be announced on the [@vanillaframewrk twitter account](https://twitter.com/vanillaframewrk)
  - this should happen automatically when newsletter is sent
- Major and minor releases should also be announced in detail on the [ubuntu blog](https://blog.ubuntu.com/)
