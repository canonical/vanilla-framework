---
layout: default
homepage: true
---

## Get started

You can use Vanilla in your projects in a few different ways.

See [Building with Vanilla](/building-vanilla) and [Customising Vanilla](/customising-vanilla) for more in-depth setup instructions.

<hr class="is-deep">

<h3>Install</h3>
<div class="row">
  <div class="col-6">
    <p>The recommended way to get Vanilla is with <a href="https://www.yarnpkg.com/" class="p-link--external">yarn</a>:</p>
    <pre><code>yarn add vanilla-framework</code></pre>
    <p>Or <a href="https://www.npmjs.com/" class="p-link--external">npm</a>:</p>
    <pre><code>npm install vanilla-framework</code></pre>
    <p>This will pull down the latest version into your local <code>node_modules</code> folder and save it into your project's dependencies in <code>package.json</code>.</p>
  </div>
  <div class="col-6">
    <p>You can now reference Vanilla from your main Sass file - note that the path to <code>node_modules</code> might be different for your project:</p>
    <pre><code>// Import the framework
@import 'node_modules/vanilla-framework/scss/vanilla';

// Include all of Vanilla Framework
@include vanilla;</code></pre>

    <p><em>For information on overriding settings and importing only parts of Vanilla, see <a href="/customising-vanilla">Customising Vanilla</a>.</em></p>

  </div>
</div>

<hr class="is-deep">
<div class="u-equal-height">
  <div class="col-12">
    <h3>Hotlink</h3>
    <p>You can add Vanilla directly to your markup:</p>
    <pre><code>&lt;link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla-framework-version-2.3.0.min.css" /&gt;</code></pre>
  </div>
</div>

<hr class="is-deep">

<div class="u-equal-height">
  <div class="col-12">
    <h3>Download</h3>
    <p>Download the latest version of Vanilla from GitHub.</p>
    <a href="https://github.com/canonical-web-and-design/vanilla-framework/archive/v2.3.0.zip" class="p-button--positive">Download v2.3.0</a>
  </div>
</div>

<hr class="is-deep">

<div class="row">
  <div class="col-6">
    <h3>What's new</h3>
    <ul class="p-list">
      <li class="p-list__item--deep">
        <a href="https://github.com/canonical-web-and-design/vanilla-framework/releases/tag/v2.3.0">Release notes: v2.3.0</a>
      </li>
      <li class="p-list__item--deep">
        <a href="https://github.com/canonical-web-and-design/vanilla-framework/releases/tag/v2.2.0">Release notes: v2.2.0</a>
      </li>
      <li class="p-list__item--deep">
        <a href="https://github.com/canonical-web-and-design/vanilla-framework/releases/tag/v2.1.0">Release notes: v2.1.0</a>
      </li>
    </ul>
  </div>

  <hr class="is-deep u-hide--medium u-hide--large">

  <div class="col-6">
    <h3>Getting help</h3>
    <ul class="p-list">
      <li class="p-list__item">
        <i class="p-list__icon--github"></i><a href="https://github.com/canonical-web-and-design/vanilla-framework/issues/new">GitHub</a>
      </li>
      <li class="p-list__item">
        <i class="p-list__icon--twitter"></i><a href="https://twitter.com/vanillaframewrk">Twitter</a>
      </li>
      <li class="p-list__item">
        <i class="p-list__icon--slack"></i><a href="https://vanillaframework.slack.com/">Slack</a>
      </li>
    </ul>
  </div>
</div>

<hr class="is-deep">

<h3>Local development</h3>
<p>To make improvements to Vanilla itself, please follow the instructions on the project’s <a href="https://github.com/canonical-web-and-design/vanilla-framework#vanilla-framework" class="p-link--external">README.md</a>.</p>
