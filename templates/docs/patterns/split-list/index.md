---
wrapper_template: '_layouts/docs.html'
context:
  title: Split List | Patterns
---

The Split List pattern is used to easily implement a list of paired titles and
descriptions, complete with a top-level title and description as well.

## Macro

This pattern is implemented using a Jinja Macro, making it easy to include
and use in your Jinja-based project.

### Example

```
{% raw %}
{% from "_macros/split-list.jinja" import split_list %}

{% call(slot) split_list(is_description_full_width_on_desktop=false, is_list_full_width_on_tablet=false) %}
  {% if slot == 'title' %}
    <h2>
      H2 - this can take up to two lines, but best to stick to one line.
    </h2>
  {% endif %}

  {% if slot == 'description' %}
    <p>
      A <u>private cloud</u> provides organisations with on-demand compute,
      storage and other resources that can be accessed over the network and
      that are reserved exclusively for them - either in their own data centre
      or via a 3rd party.
    </p>
  {% endif %}

  {% if slot == 'list_item_title_1' %}
    <h5>
      Rich portfolio of products
    </h5>
  {% endif %}

  {% if slot == 'list_item_description_1' %}
    <p>
      Resell the full range of Canonical’s portfolio of private and public
      cloud products: Openstack, Kubernetes, IoT, support, security and
      compliance for Ubuntu.
    </p>
  {% endif %}

  {% if slot == 'list_item_title_2' %}
    <h5>
      Sales enablement
    </h5>
  {% endif %}

  {% if slot == 'list_item_description_2' %}
    <p>
      Canonical can help train your field sales and presales teams and
      provide you with sales collateral and permission to use the Canonical
      and Ubuntu trademarks in your own materials.
    </p>
  {% endif %}
{% endcall %}
{% endraw %}
```

### Params

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| `is_description_full_width_on_desktop` | boolean | `true` | Whether the `description` element should appear full-width on its own row on desktop |
| `is_list_full_width_on_tablet` | boolean | `true` | Whether the list items should appear full-width on their own rows on tablet |

### Slots

| Name | Description |
| --- | --- |
| `title` | HTML to be rendered as the Split List title |
| `description` | HTML to be rendered as the Split List description; if omitted, `title` will always display full-width |
| `list_item_title_1` - `list_item_title_10` | HTML to be rendered for each list item's title; max of 10 |
| `list_item_description_1` - `list_item_description_10` | HTML to be rendered for each list item's description; max of 10 |

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>
    <span class="p-notification__message">The following examples display rendered output HTML for reference purposes, but the Macro should be used whenever possible - it's easier to use!</span>
  </p>
</div>

## 50/50 on desktop w/ description

<div class="embedded-example"><a href="/docs/examples/patterns/split-list/50-50-desktop-with-description/" class="js-example">
View example of the matrix pattern
</a></div>

## 50/50 on tablet w/o description

<div class="embedded-example"><a href="/docs/examples/patterns/split-list/50-50-tablet-no-description/" class="js-example">
View example of the matrix pattern
</a></div>

## 50/50 on tablet w/ description

<div class="embedded-example"><a href="/docs/examples/patterns/split-list/50-50-tablet-with-description/" class="js-example">
View example of the matrix pattern
</a></div>

## 50/50 w/ description

<div class="embedded-example"><a href="/docs/examples/patterns/split-list/50-50-with-description/" class="js-example">
View example of the matrix pattern
</a></div>

## Full-width w/o description

<div class="embedded-example"><a href="/docs/examples/patterns/split-list/full-width-no-description/" class="js-example">
View example of the matrix pattern
</a></div>

## Full-width w/ description

<div class="embedded-example"><a href="/docs/examples/patterns/split-list/full-width-with-description/" class="js-example">
View example of the matrix pattern
</a></div>

## Import

To import and use this Macro in your project, follow the steps on the
[Macro installation guide](TODO).

For more information see [Customising Vanilla](/docs/customising-vanilla/) in
your projects, which includes overrides and importing instructions.
