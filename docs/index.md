---
wrapper_template: '_layouts/default.html'
context:
  title: Get started
---

## Get started

<hr>

You can use Vanilla in your projects in a few different ways. See [Building with Vanilla](/building-vanilla) and [Customising Vanilla](/customising-vanilla) for more in-depth setup instructions.

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

<div class="row">
  <div class="col-12">
    <h3>Hotlink</h3>
    <p>You can add Vanilla directly to your markup:</p>
    <pre><code>&lt;link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla-framework-version-{{ version }}.min.css" /&gt;</code></pre>
  </div>
</div>

<br>

<div class="row">
  <div class="col-12">
    <h3>Download</h3>
    <p>Download the latest version of Vanilla from GitHub.</p>
    <button class="p-button--positive"><a href="https://github.com/canonical-web-and-design/vanilla-framework/archive/v{{ version }}.zip">Download v{{ version }}</a></button>
  </div>
</div>

<br>

<div class="row">
<h3>Release notes</h3>
<div class="row">
    <ul class="p-list--divided is-split">
      <li class="p-list__item"><a href="https://github.com/canonical-web-and-design/vanilla-framework/releases/tag/v2.7.0">Release v2.7.0 - 17 February, 2020</a></li>
      <li class="p-list__item"><a href="https://github.com/canonical-web-and-design/vanilla-framework/releases/tag/v2.6.0">Release v2.6.0 - 28 January, 2020</a></li>
      <li class="p-list__item"><a href="https://github.com/canonical-web-and-design/vanilla-framework/releases/tag/v2.5.0">Release v2.5.0 - 5 December, 2019</a></li>
      <li class="p-list__item"><a href="https://github.com/canonical-web-and-design/vanilla-framework/releases/tag/v2.4.1">Release v2.4.1 - 23 October, 2019</a></li>
      <li class="p-list__item"><a href="https://github.com/canonical-web-and-design/vanilla-framework/releases/tag/v2.4.0">Release v2.4.0 - 16 September, 2019</a></li>
      <li class="p-list__item"><a href="https://github.com/canonical-web-and-design/vanilla-framework/releases/tag/v2.3.0">Release v2.3.0 - 9 August, 2019</a></li>
    </ul>
  </div>
  </div>

  <br>

  <div class="row">
  <div class="col-12">
  <h3>Local development</h3>
  <p>To make improvements to Vanilla itself, please follow the instructions on the project’s <a href="https://github.com/canonical-web-and-design/vanilla-framework#vanilla-framework" class="p-link--external">README.md</a>.</p>

  <br>

  <ul class="p-inline-list">
    <li class="p-inline-list__item"><i class="p-list__icon--slack"></i><a href="https://vanillaframework.slack.com/">Join our channel</a></li>
    <li class="p-inline-list__item"><i class="p-list__icon--twitter"></i><a href="https://twitter.com/vanillaframewrk">Tweet us</a></li>
    <li class="p-inline-list__item"><i class="p-list__icon--github"></i><a href="https://github.com/canonical-web-and-design/vanilla-framework/issues/new">Fork us on GitHub</a></li>
  </ul>
  </div>
</div>
