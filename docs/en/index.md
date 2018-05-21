---
title: Home
homepage: true
---

<h2>Get started</h2>
<p>You can use Vanilla in your projects in a few different ways.</p>
<p class="p-heading--four">
<div class="u-equal-height">
    <div class="col-6">
        <h3>Install via npm</h3>
        <p>The recommended way to get Vanilla is through <a href="https://www.npmjs.com/" class="p-link--external">npm</a>:</p>
        <pre><code>npm install --save-dev vanilla-framework</code></pre>
        <p>This will pull down the latest version into your local <code>node_modules</code> folder and save it into your project's dependencies in <code>package.json</code>.</p>
        <p>Now when you build Sass, make sure to include modules from node_modules. E.g. for <a href="https://github.com/sass/node-sass" class="p-link--external">node-sass</a>:</p>
        <pre><code>$ node-sass --include-path node_modules {file}.scss {file}.css</code></pre>
    </div>
    <div class="col-6">
        <h3 class="u-hide--small" style="visibility: hidden;">&nbsp;</h3>
        <p>Finally, reference it from your own Sass files, with optional settings:</p>
        <pre><code>// Optionally override some settings
$color-brand: #ffffff;

// Import the framework
@import 'vanilla-framework/scss/vanilla';

// Include all of Vanilla Framework
@include vanilla;</code></pre>
        <p><em>Note: If you don't need the whole framework, you can just include specific parts, e.g. <code>@include vf-b-forms</code>.</em></p>
    </div>
</div>
<hr class="is-deep">
<div class="u-equal-height">
    <div class="col-6">
        <h3>Hotlink</h3>
        <p>Alternatively, you an add Vanilla directly to your markup:</p>
        <p><code>&lt;link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla-framework-version-1.7.1.min.css" /&gt;</code></p>
    </div>
    <hr class="is-deep u-hide--medium u-hide--large">
    <div class="col-6">
        <h3>Download</h3>
        <p>Download the latest version of Vanilla from <a href="https://github.com/vanilla-framework/vanilla-framework/releases/" class=" p-link--external">GitHub</a></p>
    </div>
</div>
<hr class="is-deep">
<div class="u-equal-height">
    <div class="col-6">
        <h3>Using with GitHub Pages via Git submodules</h3>
        <p>Creating a submodule in the git repo does not add all the code to the project but includes a reference and path to include the framework. You may find this method useful if you're planing to host on GitHub Pages.</p>
    </div>
    <div class="col-6">
        <p>Run this command at the root of your project (replacing vX.X.X with the release you wish to use)</p>
        <pre><code>git submodule add -b vX.X.X -- git@github.com:vanilla-framework/vanilla-framework.git _sass/vanilla-framework</code></pre>
        <p>By running the following command it will pull down the framework into the correct location:</p>
        <pre><code>git submodule update</code></pre>
    </div>
</div>
<hr class="is-deep">
<h3>What's new</h3>
<ul class="p-list">
    <li class="p-list__item--deep">
        <a href="https://github.com/vanilla-framework/vanilla-framework/releases/tag/v1.7.1">Releases: v1.7.1</a>
    </li>
    <li class="p-list__item--deep">
        <a href="https://github.com/vanilla-framework/vanilla-framework/releases/tag/v1.7.0">Releases: v1.7.0</a>
    </li>
    <li class="p-list__item--deep">
        <a href="https://github.com/vanilla-framework/vanilla-framework/releases/tag/v1.6.7">Releases: v1.6.7</a>
    </li>
</ul>
<hr class="is-deep">
<div class="u-equal-height">
    <div class="col-6">
        <h3>Getting help</h3>
        <ul class="p-list">
            <li class="p-list__item">
                <i class="p-list__icon--github"></i><a href="https://github.com/vanilla-framework/vanilla-framework/issues/new">GitHub</a>   
            </li>
            <li class="p-list__item">
                <i class="p-list__icon--twitter"></i><a href="https://twitter.com/vanillaframewrk">Twitter</a>    
            </li>
            <li class="p-list__item">
                <i class="p-list__icon--slack"></i><a href="https://vanillaframework.slack.com/">Slack</a>    
            </li>
        </ul>
    </div>
    <hr class="is-deep u-hide--medium u-hide--large">
    <div class="col-6">
        <h3>Local development</h3>
        <p>To make improvements to Vanilla itself, please follow the instructions on the project’s <a href="https://github.com/vanilla-framework/vanilla-framework#vanilla-framework" class="p-link--external">README.md</a>.</p>
    </div>
</div>
