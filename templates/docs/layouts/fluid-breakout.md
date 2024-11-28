---
wrapper_template: '_layouts/docs.html'
context:
  title: Breaking out of the grid | Layouts
---

In some cases, there might be a good reason to break out of the constraints of a 12 column grid and allow content to bleed into the page margins - for example, tables with many columns that would otherwise result in heavy truncation or wrapping, charts with a lot of detail along the x axis, or card layouts that aim to impress with the abundance of available content. The fluid breakout layout allows you to do this.

## Anatomy of the fluid breakout layout

### Wrapper

The `.l-fluid-breakout` serves as a wrapper, and allows for an aside and a main area. On screens smaller than `$breakpoint-large`, it acts as a single column. On larger screens it switches to a 3 column layout - a central area and two aside areas on either side.

The wrapper aims to align as much as possible with the 12 column grid. On smaller screens, that is limited to ensuring the padding of both layouts match. Once the window width becomes large enough, the left edges of the regular 12 column grid and the central column of the fluid breakout layout also align. For this to be possible, two conditions need to be met:

- the central area's width needs to match the 12 column grid's width (we achieve this by setting the central area's max-width to the same value as the 12 column grid's max-width)
- The window width is larger than the combined width of the 3 columns of the layout (`$l-fluid-breakout-max-width + 2 * $l-fluid-breakout-aside-width`)

### Toolbar

The toolbar is optional. When present, the toolbar will be positioned above the aside and main area elements. The toolbar is split in 2 columns, with the second column being aligned to the right on large screens.

<div class="embedded-example"><a href="/docs/examples/layouts/fluid-breakout/fluid-breakout-left-aside-and-toolbar/" class="js-example">
View example of the fluid breakout layout with a left aside and a toolbar
</a></div>

### Aside

The aside is optional. When present, the order of the aside can be changed from before to after the main area by re-arranging the markup. Depending on the screen width, that would place it above / below (on screens smaller than `$breakpoint-large`) or to the left / right on larger screens.

An aside to the left, main area to the right:

<div class="embedded-example"><a href="/docs/examples/layouts/fluid-breakout/fluid-breakout-left-aside/" class="js-example">
View example of the fluid breakout layout with a left aside
</a></div>

Or vice versa:

<div class="embedded-example"><a href="/docs/examples/layouts/fluid-breakout/fluid-breakout-right-aside/" class="js-example">
View example of the fluid breakout layout with a right aside
</a></div>

### Main area

The main area occupies the whole page on screens smaller than `$breakpoint-large`, then on larger screens allows a choice between spanning 2 or 3 of the layout's columns.

Use the class `l-fluid-breakout__main` to span the central area and one of the asides:

<div class="embedded-example"><a href="/docs/examples/layouts/fluid-breakout/fluid-breakout-left-aside/" class="js-example">
View example of the fluid breakout layout without an aside
</a></div>

Use the classes `l-fluid-breakout__main is-full-width` to span the entire layout:

<div class="embedded-example"><a href="/docs/examples/layouts/fluid-breakout/fluid-breakout-full/" class="js-example">
View example of the fluid breakout layout without an aside and a main column spanning all 3 columns:
</a></div>

In the absence of an aside, add the `.no-aside` class to the main area, to ensure it starts from the central column of the layout:

<div class="embedded-example"><a href="/docs/examples/layouts/fluid-breakout/fluid-breakout-no-aside/" class="js-example">
View example of the fluid breakout layout without an aside
</a></div>

## Uses

A couple of examples of where this layout might be useful. Both examples include a section with the regular 12 column grid for comparison.

A card layout where the goal is to fit more cards than the 12 column grid would allow. This what the default arguments to the `layouts_fluid-breakout` mixin provide out of the box:

<div class="embedded-example"><a href="/docs/examples/layouts/fluid-breakout/fluid-breakout-cards-with-aside-and-toolbar/" class="js-example">
View example of the fluid breakout layout with an aside and a series of cards
</a></div>

A large table that would require truncation if fitted within the regular 12 column grid:

<div class="embedded-example"><a href="/docs/examples/layouts/fluid-breakout/fluid-breakout-full--cve-table/" class="js-example">
View example of the fluid breakout layout with a large table inside
</a></div>
Note: This requires invoking the `layouts_fluid-breakout` with `100%` as the second argument: `@include vf-l-fluid-breakout(10rem, 100%, 0, '--custom');`

Alternatively, if `l-fluid-breakout__main` has only one child, you will obtain the same result.

## Import

To import just the fluid breakout layout component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'layouts_fluid-breakout';
@include vf-l-fluid-breakout;
```

The breakout row allows some customisation. The arguments in the table bellow are all optional.

| Argument                             | Use                              | Default value |
| ------------------------------------ | -------------------------------- | ------------- |
| `$l-fluid-breakout-aside-width`      | Aside width                      | `13rem`       |
| `$l-fluid-breakout-main-child-width` | Width of item in the main column | `13rem`       |
| `$grid-gap`                          | Gap between columns in main area | `1rem`        |
| `$suffix`                            | Class modifier                   | `''`          |

<br>

For example to create a breakout row named `.fluid-breakout--custom` that has a `10rem` aside, a main area subdivided into `20rem` columns, with no grid gap in between, you could use:

```scss
@import 'layouts_fluid-breakout';
@include vf-l-fluid-breakout(10rem, 20rem, 0, '--custom');
```
