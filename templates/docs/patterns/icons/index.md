---
wrapper_template: '_layouts/docs.html'
context:
  title: Icons | Components
  extra_stylesheet: build/css/standalone/patterns_icons-additional.css
---

{% macro icon_section(icon_set, theme) -%}

<section >
  <div class="p-strip is-shallow u-no-padding--top" {% if theme == "dark" %}style="background-color: transparent;"{% endif %}>{% for row in icon_set | batch(3) %}
  <div class="row u-equal-height">
    {% for icon in row %}<div class="p-card col-4 u-vertically-center {% if theme == "dark" %}is-dark{% endif %}" {% if theme == "dark" %}style="background-color: #111; color: #fff;"{% endif %}>
      <p><i class="p-icon--{{icon}} {% if theme == "dark" %}is-dark{% endif %}" style="margin-right: 0.5rem;"></i>p-icon--{{icon}}</p>
    </div>{% endfor %}
  </div>{% endfor %}
  </div>
</section>
{%- endmacro %}

{% set standard_icons = ['plus', 'minus', 'expand', 'collapse', 'spinner', 'drag', 'close', 'help', 'delete', 'external-link', 'chevron-down', 'chevron-up', 'chevron-left', 'chevron-right', 'menu', 'code', 'copy', 'search', 'share', 'user', 'anchor', 'show', 'hide', 'error-grey', 'success-grey'] %}

{% set status_icons = ['error',  'warning', 'success', 'information'] %}

{% set additional_icons = ['applications', 'controllers', 'credit-card', 'fullscreen', 'models', 'machines', 'pin', 'units', 'priority-critical', 'priority-high', 'priority-low', 'priority-medium', 'priority-negligible', 'priority-unknown', 'add-canvas', 'add-logical-volume', 'add-partition', 'back-to-top', 'begin-downloading', 'bundle', 'canvas', 'change-version', 'comments', 'conflict-grey', 'conflict-resolution-grey', 'conflict-resolution', 'conflict', 'connected', 'containers', 'copy-to-clipboard', 'desktop', 'disconnect', 'edit', 'export', 'exposed', 'filter', 'fork', 'get-link', 'halfscreen-bar', 'heading', 'highlight-off', 'highlight-on', 'home', 'import', 'in-progress', 'inspector-debug', 'loading-steps', 'lock-locked-active', 'lock-locked', 'lock-unlock', 'maximise-bar', 'minimise-bar', 'mount-2', 'mount', 'open-terminal', 'pause', 'plans', 'play', 'pods', 'power-error', 'power-off', 'power-on', 'profile', 'restart', 'revisions', 'security', 'settings', 'sort-both', 'sort-down', 'sort-up', 'starred', 'status-failed-small', 'status-in-progress-small', 'status-in-progress', 'status-queued-small', 'status-queued', 'status-succeeded-small', 'status-waiting-small', 'status-waiting', 'status', 'stop', 'submit-bug', 'switcher-dashboard', 'switcher-environments', 'switcher', 'tag', 'task-outstanding', 'timed-out-grey', 'timed-out', 'topic', 'unit-pending', 'unit-running', 'unmount', 'unstarred', 'user-group', 'video-play', 'warning-grey', 'archive', 'arrow-bottom-left', 'arrow-bottom-right', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-top-left', 'arrow-top-right', 'arrow-up', 'blueprint', 'book', 'certificate', 'certification', 'cluster-host', 'contact', 'contextual-menu', 'cursor', 'file-blank', 'file', 'folder', 'gift', 'image', 'iso', 'log-out', 'map', 'notifications', 'location', 'private-key', 'profiles', 'quote', 'repository', 'security-error', 'security-tick', 'security-warning', 'select-add', 'select-remove', 'select', 'single-host', 'snapshot', 'snooze', 'statistics', 'thumbs-down', 'thumbs-up', 'tidy', 'toggle-side-nav', 'turn-off-notification', 'upload', 'usb', 'website'] %}

{% set additional_icons_new = ['history'] %}

{% set social_icons = ['facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'github', 'rss', 'email'] %}

{#
'chevron-up', 'chevron-down', 'chevron-left', 'chevron-right' are class names, not mixin names; instead use 'chevron' for mixin import
TODO We should fix this icon-mixin naming discrepancy in the next major version.
See https://github.com/canonical/vanilla-framework/pull/5100
#}

{% set standard_icon_mixin_names = standard_icons
  | map('replace', 'chevron-down', 'chevron')
  | map('replace', 'chevron-up', 'chevron')
  | map('replace', 'chevron-left', 'chevron')
  | map('replace', 'chevron-right', 'chevron')
  | list
%}

{#
'information' is a class name, not a mixin name; instead use 'info' for mixin import
TODO We should fix this icon-mixin naming discrepancy in the next major version.
See https://github.com/canonical/vanilla-framework/pull/5100
#}

{% set status_icon_mixin_names = status_icons | map('replace', 'information', 'info') | list %}

{#
Remove duplicates from the list of mixin names; otherwise there would be two 'chevron' entries
#}

{% set base_icon_mixin_names = (standard_icon_mixin_names + status_icon_mixin_names + social_icons) | unique %}

Icons provide visual context and enhance usability, they can be added via an `<i>` element like so: `<i class="p-icon--{name}"></i>`.

<div class="embedded-example"><a href="/docs/examples/patterns/icons/standard" class="js-example">
View example of icons
</a></div>

## Icons as links

If an icon needs to act as a link, `p-icon--` classes can instead be applied to `<a>` elements:

<div class="embedded-example"><a href="/docs/examples/patterns/icons/icons-links" class="js-example">
View example of icons as links
</a></div>

## Standard

Our icons have two predefined color styles: light and dark. The light variant is the default style.

{{ icon_section(standard_icons, 'light') }}

## Dark theme

Our standard icons fully support theming, so when placed in a container with `is-dark` class name (for example `body.is-dark`), or when having `is-dark` class name directly, they will be inverted to ensure legibility.

{{ icon_section(standard_icons, 'dark')}}

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Deprecated</h3>
    <p class="p-notification__message">Prior to Vanilla 4.8.0 the dark theme for icons was provided by <code>is-light</code> class name on the icon, or by a container with <code>--dark</code> suffix. This approach is now deprecated and will be removed in future versions of Vanilla. Please use the new theming using <code>is-dark</code> class name.</p>
  </div>
</div>

{{ status("deprecated") }}

## Alert

Our alert icons are used to indicate the status of a message in a notification.

{{ icon_section(status_icons, 'light')}}

## Additional

Outside of the standard set, additional icons are available for use, and need to be individually imported.

{{ icon_section(additional_icons, 'light')}}

### Recently Added Icons {{ status("new") }}

In Vanilla 4.26.0 we introduced an additional icon listed below.

{{ icon_section(additional_icons_new, 'light')}}

## Social

Our social icons are used to drive users to social content.

{{ icon_section(social_icons, 'light')}}

## Share

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

## Import

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
{% for mixin_name in base_icon_mixin_names %}@include vf-p-icon-{{ mixin_name }};
{% endfor %}
// additional icons
{% for icon in additional_icons %}@include vf-p-icon-{{ icon }};
{% endfor %}
{% for icon in additional_icons_new %}@include vf-p-icon-{{ icon }};
{% endfor %}
```

## Customisation

<div class="p-notification--caution">
  <div class="p-notification__content">
    <h3 class="p-notification__title">Deprecated</h3>
    <p class="p-notification__message">Customisation of icons is not supported by new theming system and is discouraged. We may remove this functionality in future version of Vanilla. Please, whenever possible, use the icons in default colours provided by Vanilla themes.</p>
  </div>
</div>

Should you wish to change the colour of an icon, this can be achieved by using an icon mixin and passing a color as an argument to the mixin.

In the below example, the `.p-icon--share` class includes the `vf-icon-share` mixin, and overrides the icon's default `$color-mid-dark` with `$color-dark`:

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-icons;

.p-icon--share {
  @include vf-icon-share($color-dark);
}
```

You can find all of the available icon mixins listed [here](https://github.com/canonical/vanilla-framework/blob/main/scss/_base_icon-definitions.scss).

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use icons in React by installing our react-component library and importing `Icon` component.

[See the documentation for our React `Icon` component](https://canonical.github.io/react-components/?path=/docs/components-icon--docs)
