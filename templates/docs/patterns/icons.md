---
wrapper_template: '_layouts/docs.html'
context:
  title: Icons | Components
  extra_stylesheet: build/css/standalone/patterns_icons-additional.css
---

## Icons

<hr>

Icons provide visual context and enhance usability, they can be added via an `<i>` element like so: `<i class="p-icon--{name}"></i>`.

<div class="embedded-example"><a href="/docs/examples/patterns/icons/icons-light" class="js-example">
View example of icons
</a></div>

### Icons as links

If an icon needs to act as a link, `p-icon--` classes can instead be applied to `<a>` elements:

<div class="embedded-example"><a href="/docs/examples/patterns/icons/icons-links" class="js-example">
View example of icons as links
</a></div>

### Accessibility

For accessibility purposes, you can add text inside the icon element which will not be displayed to the user. E.g.

`<i class="p-icon--chevron-down">This text will not be displayed</i>`

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
        <p><i class="p-icon--chevron-down" style="margin-right: 1rem;"></i>p-icon--chevron-down</p>
      </div>
    </div>
    <div class="row u-equal-height">
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--chevron-up" style="margin-right: 1rem;"></i>p-icon--chevron-up</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--menu" style="margin-right: 1rem;"></i>p-icon--menu</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--code" style="margin-right: 1rem;"></i>p-icon--code</p>
      </div>
    </div>
    <div class="row u-equal-height">
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--copy" style="margin-right: 1rem;"></i>p-icon--copy</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--search" style="margin-right: 1rem;"></i>p-icon--search</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--share" style="margin-right: 1rem;"></i>p-icon--share</p>
      </div>
    </div>
    <div class="row u-equal-height">
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--user" style="margin-right: 1rem;"></i>p-icon--user</p>
      </div>
      <div class="p-card col-3 u-vertically-center">
        <p><i class="p-icon--anchor" style="margin-right: 1rem;"></i>p-icon--anchor</p>
      </div>
    </div>
  </div>
</section>

<span class="p-label--deprecated">Deprecated</span> The `.p-icon--question` class has been deprecated and will be removed in version 3.0. Use class `.p-icon--help` instead. We will also be removing <code>p-icon--contextual-menu</code>, please use <code>p-icon--chevron-down</code> instead.

### Dark theme

Our dark-themed icons are available when placed within a container that has the suffix `--dark` ex) `help-container--dark`. Icon colors will then be inverted to ensure legibility as shown in our example.

Alternatively to use light version of icons outside of the dark strip, add `is-light` class to the icon element (e.g. `p-icon--plus is-light`).

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

### Additional

Outside of the standard set, additional icons are available for use, and need to be individually imported.

<section>
  <div class="p-strip is-shallow u-no-padding--top">
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--applications" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--applications
      </div>
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--controllers" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--controllers
      </div>
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--fullscreen" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--fullscreen
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--models" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--models
      </div>
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--machines" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--machines
      </div>
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--pin" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--pin
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--units" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--units
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--priority-critical" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--priority-critical
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--priority-high" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--priority-high
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--priority-low" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--priority-low
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--priority-medium" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--priority-medium
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--priority-negligible" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--priority-negligible
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--priority-unknown" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--priority-unknown
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--add-canvas" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--add-canvas
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--add-logical-volume" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--add-logical-volume
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--add-partition" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--add-partition
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--back-to-top" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--back-to-top
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--begin-downloading" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--begin-downloading
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--bundle" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--bundle
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--canvas" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--canvas
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--change-version" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--change-version
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--comments" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--comments
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--conflict-grey" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--conflict-grey
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--conflict" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--conflict
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--conflict-resolution-grey" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--conflict-resolution-grey
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--conflict-resolution" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--conflict-resolution
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--connected" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--connected
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--containers" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--containers
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--copy-to-clipboard" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--copy-to-clipboard
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--disconnect" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--disconnect
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--edit" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--edit
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--export" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--export
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--exposed" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--exposed
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--filter" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--filter
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--fork" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--fork
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--get-link" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--get-link
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--halfscreen-bar" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--halfscreen-bar
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--hide" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--hide
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--highlight-off" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--highlight-off
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--highlight-on" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--highlight-on
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--home" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--home
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--import" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--import
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--in-progress" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--in-progress
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--inspector-debug" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--inspector-debug
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--loading-steps" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--loading-steps
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--lock-locked-active" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--lock-locked-active
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--lock-locked" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--lock-locked
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--lock-unlock" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--lock-unlock
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--maximise-bar" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--maximise-bar
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--minimise-bar" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--minimise-bar
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--mount-2" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--mount-2
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--mount" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--mount
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--unmount" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--unmount
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--open-terminal" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--open-terminal
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--plans" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--plans
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--pods" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--pods
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--power-error" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--power-error
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--power-off" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--power-off
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--power-on" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--power-on
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--profile" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--profile
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--restart" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--restart
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--revisions" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--revisions
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--security" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--security
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--settings" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--settings
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--show" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--show
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--sort-both" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--sort-both
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--sort-down" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--sort-down
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--sort-up" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--sort-up
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--starred" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--starred
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--status-failed-small" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--status-failed-small
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--status-in-progress-small" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--status-in-progress-small
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--status-queued-small" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--status-queued-small
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--status-succeeded-small" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--status-succeeded-small
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--status-waiting-small" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--status-waiting-small
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--status-in-progress" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--status-in-progress
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--status-queued" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--status-queued
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--status-waiting" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--status-waiting
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--status" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--status
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--submit-bug" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--submit-bug
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--success-grey" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--success-grey
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--switcher-dashboard" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--switcher-dashboard
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--switcher-environments" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--switcher-environments
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--switcher" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--switcher
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--tag" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--tag
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--task-outstanding" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--task-outstanding
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--timed-out-grey" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--timed-out-grey
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--timed-out" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--timed-out
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--topic" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--topic
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--unit-pending" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--unit-pending
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--unit-running" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--unit-running
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--unstarred" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--unstarred
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--user-group" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--user-group
      </div>
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--video-play" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--video-play
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display: flex; align-item: center;">
        <i class="p-icon--warning-grey" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--warning-grey
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
        <i class="p-icon--github" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--github
      </div>
    </div>
    <div class="row">
      <div class="p-card col-3 u-vertically-center" style="display:flex; align-items:center;">
        <i class="p-icon--rss" style="margin-right: 1rem; flex-shrink: 0;"></i>p-icon--rss
      </div>
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
        <a href="https://docs.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/plugins/share-plugin">LinkedIn</a>
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

The [additional](#additional) set of icons is not included in Vanilla by default, if you require them you can add them to your project, as in the example below.

```scss
@import 'patterns_icons';
@include vf-p-icon-status-waiting;
@include vf-p-icon-user-group;
@include vf-p-icon-video-play;
@include vf-p-icon-warning-grey;
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
@include vf-p-icon-chevron;
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

// additional icons
@include vf-p-icon-applications;
@include vf-p-icon-controllers;
@include vf-p-icon-fullscreen;
@include vf-p-icon-models;
@include vf-p-icon-machines;
@include vf-p-icon-pin;
@include vf-p-icon-units;
@include vf-p-icon-priority-critical;
@include vf-p-icon-priority-high;
@include vf-p-icon-priority-low;
@include vf-p-icon-priority-medium;
@include vf-p-icon-priority-negligible;
@include vf-p-icon-priority-unknown;
@include vf-p-icon-add-canvas;
@include vf-p-icon-add-logical-volume;
@include vf-p-icon-add-partition;
@include vf-p-icon-back-to-top;
@include vf-p-icon-begin-downloading;
@include vf-p-icon-bundle;
@include vf-p-icon-canvas;
@include vf-p-icon-change-version;
@include vf-p-icon-comments;
@include vf-p-icon-conflict-grey;
@include vf-p-icon-conflict-resolution-grey;
@include vf-p-icon-conflict-resolution;
@include vf-p-icon-conflict;
@include vf-p-icon-connected;
@include vf-p-icon-containers;
@include vf-p-icon-copy-to-clipboard;
@include vf-p-icon-disconnect;
@include vf-p-icon-edit;
@include vf-p-icon-export;
@include vf-p-icon-exposed;
@include vf-p-icon-filter;
@include vf-p-icon-fork;
@include vf-p-icon-get-link;
@include vf-p-icon-halfscreen-bar;
@include vf-p-icon-hide;
@include vf-p-icon-highlight-off;
@include vf-p-icon-highlight-on;
@include vf-p-icon-home;
@include vf-p-icon-import;
@include vf-p-icon-in-progress;
@include vf-p-icon-inspector-debug;
@include vf-p-icon-loading-steps;
@include vf-p-icon-lock-locked-active;
@include vf-p-icon-lock-locked;
@include vf-p-icon-lock-unlock;
@include vf-p-icon-maximise-bar;
@include vf-p-icon-minimise-bar;
@include vf-p-icon-mount-2;
@include vf-p-icon-mount;
@include vf-p-icon-open-terminal;
@include vf-p-icon-plans;
@include vf-p-icon-pods;
@include vf-p-icon-power-error;
@include vf-p-icon-power-off;
@include vf-p-icon-power-on;
@include vf-p-icon-profile;
@include vf-p-icon-restart;
@include vf-p-icon-revisions;
@include vf-p-icon-security;
@include vf-p-icon-settings;
@include vf-p-icon-show;
@include vf-p-icon-sort-both;
@include vf-p-icon-sort-down;
@include vf-p-icon-sort-up;
@include vf-p-icon-starred;
@include vf-p-icon-status-failed-small;
@include vf-p-icon-status-in-progress-small;
@include vf-p-icon-status-in-progress;
@include vf-p-icon-status-queued-small;
@include vf-p-icon-status-queued;
@include vf-p-icon-status-succeeded-small;
@include vf-p-icon-status-waiting-small;
@include vf-p-icon-status-waiting;
@include vf-p-icon-status;
@include vf-p-icon-submit-bug;
@include vf-p-icon-success-grey;
@include vf-p-icon-switcher-dashboard;
@include vf-p-icon-switcher-environments;
@include vf-p-icon-switcher;
@include vf-p-icon-tag;
@include vf-p-icon-task-outstanding;
@include vf-p-icon-timed-out-grey;
@include vf-p-icon-timed-out;
@include vf-p-icon-topic;
@include vf-p-icon-unit-pending;
@include vf-p-icon-unit-running;
@include vf-p-icon-unmount;
@include vf-p-icon-unstarred;
@include vf-p-icon-user-group;
@include vf-p-icon-video-play;
@include vf-p-icon-warning-grey;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### React

You can use icons in React by installing our react-component library and importing `Icon` component.

[See the documentation for our React `Icon` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/icon--default-story#icon)
