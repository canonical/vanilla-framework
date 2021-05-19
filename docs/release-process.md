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
- Choose the correct version number, following the conventions of [semver](https://semver.org/) based on the changes included in the release
  - <code>\_.\_.**X**</code>: use a patch release when the release is only bugfixes,
  - <code>\_.**X**.\_</code>: use minor release if there are any added features (new components or new variants/modifiers to existing components)
  - <code>**X**.\_.\_</code>: any big breaking changes should happen in major release (they should happen rarely and be carefully planned)
- For major/minor releases make sure to update all component status labels
  - remove labels from previous minor releases
  - add labels for all new and updated features in current release
  - make sure labels are updated in sidebar, component docs pages, component status page
- Update version of the framework in [package.json](https://github.com/canonical-web-and-design/vanilla-framework/blob/master/package.json)
- On [GitHub releases page](https://github.com/canonical-web-and-design/vanilla-framework/releases) update latest draft automatically created by Release Drafter
  - make sure automatic version is correct
  - clean up the log from unnecessary lines, move changes to relevant section if it didn't happen automatically based on labels, reword the changes for better readability

## Releasing

- Pull locally latest version from master
- `./run build`
  - make sure everything builds without any errors
- `./run test`
  - make sure all test pass

### Releasing on GitHub

- Publish the latest release on [Github](https://github.com/canonical-web-and-design/vanilla-framework/releases/) with the new version number and add the release notes you created earlier.
  - Make sure to mark the release as a pre-release if it's an Alpha or Beta

### Releasng to NPM

This should happen automatically after publishing the release on GH (thanks to [GH actions workflow](https://github.com/canonical-web-and-design/vanilla-framework/blob/master/.github/workflows/publish-on-release.yml)).

In case that fails, here are manual steps to release to NPM:

- Update your local tags with `git fetch --tags`
- Check out the tag with `git checkout TAGNAME`
- Publish the package with `npm publish` and check that your new release appears on the [NPM website](https://www.npmjs.com/package/vanilla-framework)

### Releasing to assets server

This should happen automatically after publishing the release on GH (thanks to [GH actions workflow](https://github.com/canonical-web-and-design/vanilla-framework/blob/master/.github/workflows/publish-on-release.yml)).

In case that fails, here are manual steps to release to assets server:

- `./run build`
- `upload-assets --url-path vanilla-framework-version-X.X.X.min.css build/css/build.css`

## Deploying vanillaframework.io

- [Staging](https://jenkins.canonical.com/webteam/view/vanilla-framework/job/vanillaframework.io-staging/) should be automatically deployed on every push to master
- Test the [staging build](https://staging.vanillaframework.io/)
- Deploy to production on http://releases.demo.haus/
  - or [Deploy the site to production directly on jenkins](https://jenkins.canonical.com/webteam/view/vanilla-framework/job/vanillaframework.io-production/)

## Releasing React Components

## Promotion

Only major/minor releases need to be promoted.

- New releases should be announced on newsletter via MailChimp
- New releases should be announced on the [@vanillaframewrk twitter account](https://twitter.com/vanillaframewrk)
  - this should happen automatically when newsletter is sent
- Major and minor releases should also be announced in detail on the [ubuntu blog](https://blog.ubuntu.com/)
