---
wrapper_template: '_layouts/docs.html'
context:
  title: Search and filter | Components
---

## Search and filter

<span class="p-label--new">New</span>

<hr>

This pattern provides the ability to search and apply filter chips with a panel listing available options.

This pattern requires JavaScript to provide the full functionality.

<div class="embedded-example"><a href="/docs/examples/patterns/search-and-filter/default/" class="js-example">
View example of the search and filter pattern
</a></div>

### Selected chips

When a selection is made a chip is prepended to the input container.

<div class="embedded-example"><a href="/docs/examples/patterns/search-and-filter/with-chips/" class="js-example">
View example of the search and filter with chips pattern
</a></div>

#### Functionality

Please use toggle the `aria-hidden` attribute on the `.p-search-and-filter__panel` element when you want to reveal the filter panel. When a user makes a selection you can append a [chip element](/docs/patterns/chip) to the `.search-and-filter__search-container` element.

### Overflowing chips

When the selection reaches the end of the container the chips wrap and should display the number of wrapping chips in the selected-count element. The element becomes a hit target to expand the selected chips section.

<div class="embedded-example"><a href="/docs/examples/patterns/search-and-filter/chip-overflow/" class="js-example">
View example of the search and filter chip overflow pattern
</a></div>

#### Functionality

When a click event is triggered on the selected-count element you need need to toggle three states.

- Switch `.p-search-and-filter__box` data-overflow attribute from false to true
- Switch `.p-search-and-filter__panel` aria-hidden attribute from true to false
- Switch `.p-search-and-filter__search-container` aria-expanded attribute from false to true

<div class="p-notification--information">
  <p class="p-notification__response" role="status">You will have to handle the overflowing chip count yourself. Unfortunately that is out of scope for this example but this can be handled for you by the <a href="#react">React component</a>.</p>
</div>

### Search prompt

When you type in the search input the behaviour should be that the available selections are filtered to match the input. Also, a raw string input should be made available.

<div class="embedded-example"><a href="/docs/examples/patterns/search-and-filter/with-search-prompt/" class="js-example">
View example of the search and filter with search prompt pattern
</a></div>

#### Functionality

<div class="p-notification--information">
  <p class="p-notification__response" role="status">You will have to handle filtering the available chips yourself by removing or hiding chips that do not match. Unfortunately that is out of scope for this example but this can be handled for you by the <a href="#react">React component</a>.</p>
</div>

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import '../base';
@include vf-base;

@import '../patterns_chip';
@import '../patterns_search-box';
@import '../patterns_search-and-filter';
@import '../utilities_off-screen';
@include vf-p-chip;
@include vf-p-search-box;
@include vf-p-search-and-filter;
@include vf-u-off-screen;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### React

You can use search and filter in React by installing our react-component library and importing `SearchAndFilter` component.

[See the documentation for our React `SearchAndFilter` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/search-and-filter--default-story#search-and-filter)
