---
wrapper_template: '_layouts/docs.html'
context:
  title: Icons | Components
---

## Icons

<span class="p-label--updated">Updated</span>

<hr>

Icons provide visual context and enhance usability, they can be added via an `<i>` element like so: `<i class="p-icon--{name}"></i>`

### Accessibility

For accessibility purposes, you can add text inside the icon element which will not be displayed to the user. E.g.

`<i class="p-icon--contextual-menu">This text will not be displayed</i>`

### Standard

Our icons have two predefined color styles: light and dark. The light variant is the default style.

<section>
  <div class="p-strip is-shallow u-no-padding--top">
    <div class="row u-equal-height">
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--plus" style="margin-right: 1rem;"></i>p-icon--plus</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--minus" style="margin-right: 1rem;"></i>p-icon--minus</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--expand" style="margin-right: 1rem;"></i>p-icon--expand</p>
      </div>
    </div>

    <div class="row u-equal-height">
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--collapse" style="margin-right: 1rem;"></i>p-icon--collapse</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--spinner" style="margin-right: 1rem;"></i>p-icon--spinner</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--drag" style="margin-right: 1rem;"></i>p-icon--drag</p>
      </div>
    </div>

    <div class="row u-equal-height">
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--close" style="margin-right: 1rem;"></i>p-icon--close</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--help" style="margin-right: 1rem;"></i>p-icon--help</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--information" style="margin-right: 1rem;"></i>p-icon--information</p>
      </div>
      </div>

    <div class="row u-equal-height">
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--delete" style="margin-right: 1rem;"></i>p-icon--delete</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--external-link" style="margin-right: 1rem;"></i>p-icon--external-link</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--contextual-menu" style="margin-right: 1rem;"></i>p-icon--contextual-menu</p>
      </div>
    </div>

    <div class="row u-equal-height">
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--menu" style="margin-right: 1rem;"></i>p-icon--menu</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--code" style="margin-right: 1rem;"></i>p-icon--code</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--copy" style="margin-right: 1rem;"></i>p-icon--copy</p>
      </div>
    </div>

    <div class="row u-equal-height">
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--search" style="margin-right: 1rem;"></i>p-icon--search</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--share" style="margin-right: 1rem;"></i>p-icon--share</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--user" style="margin-right: 1rem;"></i>p-icon--user</p>
      </div>
    </div>

    <div class="row u-equal-height">
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--anchor" style="margin-right: 1rem;"></i>p-icon--anchor</p>
      </div>
    </div>

  </div>
</section>

<span class="p-label--deprecated">Deprecated</span> The `.p-icon--question` class has been deprecated and will be removed in version 3.0. Use class `.p-icon--help` instead.

### Dark theme

Our dark-themed icons are available when placed within a container that has the suffix `--dark` ex) `help-container--dark`. Icon colors will then be inverted to ensure legibility as shown in our example.

<section>
<div class="p-strip--dark is-shallow u-no-padding--top" style="background-color: transparent;">
    <div class="row u-equal-height">
      <div class="p-card col-3 u-vertically-center" style="background-color:#111;">
        <p style="color: #fff;"><i class="p-icon--plus" style="margin-right: 1rem;"></i>p-icon--plus</p>
      </div>
      <div class="p-card col-3 u-vertically-center" style="background-color:#111;">
        <p style="color: #fff;"><i class="p-icon--external-link" style="margin-right: 1rem;"></i>p-icon--external-link</p>
      </div>
      <div class="p-card col-3 u-vertically-center" style="background-color:#111;">
        <p style="color: #fff;"><i class="p-icon--search" style="margin-right: 1rem;"></i>p-icon--search</p>
      </div>
    </div>
</div>
</section>

### Alert

Our alert icons are used to indicate the status of a message in a notification.

<section>
  <div class="p-strip is-shallow u-no-padding--top">
    <div class="row u-equal-height">
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--error" style="margin-right: 1rem;"></i>p-icon--error</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--warning" style="margin-right: 1rem;"></i>p-icon--warning</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--success" style="margin-right: 1rem;"></i>p-icon--success</p>
      </div>
    </div>
  </div>
</section>

### Social

Our social icons are used to drive users to social content.

<section>
  <div class="p-strip is-shallow u-no-padding--top">
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--facebook" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--facebook
      </div>
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--instagram" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--instagram
      </div>
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--twitter" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--twitter
      </div>
    </div>

    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--linkedin" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--linkedin
      </div>
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--youtube" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--youtube
      </div>
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--rss" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--rss
      </div>
    </div>

    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--email" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--email
      </div>
    </div>

  </div>
</section>

<span class="p-label--deprecated">Deprecated</span> We will be removing <code>p-icon--canonical</code> and <code>p-icon--ubuntu</code> from our social icon set, they will no longer be available from our future release v3.0.

### Share

If you wish to add share icons for Twitter, Facebook or LinkedIn, we recommend using the networks' official buttons:

<div class="p-strip is-shallow u-no-padding--top">
  <div class="row">
    <ul class="p-inline-list--middot">
      <li class="p-inline-list__item">
        <a href="https://dev.twitter.com/web/tweet-button/">Twitter</a>
      </li>
      <li class="p-inline-list__item">
        <a href="https://developers.facebook.com/docs/plugins/share-button/">Facebook</a>
      </li>
      <li class="p-inline-list__item">
        <a href="https://developer.linkedin.com/plugins/share">LinkedIn</a>
      </li>
    </ul>
  </div>
</div>

### Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_icons';
@include vf-p-icons;

// for spin animation on the spinner icon you need to include animations utility
@import 'utilities_animations';
@include vf-u-animations;
```

If you use a limited set of icons you may want to include them individually to reduce the size of your CSS file.

```scss
@import 'patterns_icons';

// include common styles shared by all icons
@include vf-p-icons-common;

// include only the icons that you use in your project
@include vf-p-icon-anchor;
@include vf-p-icon-plus;
@include vf-p-icon-minus;
@include vf-p-icon-expand;
@include vf-p-icon-collapse;
@include vf-p-icon-contextual-menu;
@include vf-p-icon-close;
@include vf-p-icon-help;
@include vf-p-icon-info;
@include vf-p-icon-delete;
@include vf-p-icon-error;
@include vf-p-icon-warning;
@include vf-p-icon-external-link;
@include vf-p-icon-drag;
@include vf-p-icon-code;
@include vf-p-icon-menu;
@include vf-p-icon-copy;
@include vf-p-icon-search;
@include vf-p-icon-success;
@include vf-p-icon-share;
@include vf-p-icon-user;
@include vf-p-icon-question;
@include vf-p-icon-spinner;
@include vf-p-icon-facebook;
@include vf-p-icon-twitter;
@include vf-p-icon-instagram;
@include vf-p-icon-linkedin;
@include vf-p-icon-youtube;
@include vf-p-icon-canonical;
@include vf-p-icon-ubuntu;
@include vf-p-icon-rss;
@include vf-p-icon-email;
@include vf-p-icon-sizes;
@include vf-p-icon-in-button;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information view the [icons design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Icons) which includes the specification in markdown format and a PNG image.
