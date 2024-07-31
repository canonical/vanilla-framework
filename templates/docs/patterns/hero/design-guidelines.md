---
wrapper_template: '_layouts/docs.html'
context:
  title: Hero | Patterns
---

This article explains how to design and build hero sections on brochure sites:

<ul class="p-list--divided">
  <li class="p-list__item has-bullet">Considerations for different types of content</li>
  <li class="p-list__item has-bullet">Considerations based on the volume of content</li>
  <li class="p-list__item has-bullet">How to use the different Suru backgrounds</li>
  <li class="p-list__item has-bullet">Responsive layouts</li>
</ul>

## Content

### Headings section

In its simplest form, a hero is a single `h1` heading wrapped in a [section container](/docs/patterns/section#hero-sections) with `p-section--hero` class name (that provides the necessary shallow top padding and deep bottom padding). The `h1` heading is the only required element in all hero sections. Examples of this type of usage can be found on [Canonical blog](https://canonical.com/blog), archive and similar pages.

<div>
  <a href="/docs/examples/patterns/hero/hero-heading-1">
    {{ image (
      url="https://assets.ubuntu.com/v1/9c285bce-vanilla-docs-hero-1.jpg",
      alt="",
      width="2464",
      height="368",
      hi_def=True,
      loading="auto"
      ) | safe
    }}
  </a>
</div>

[See example of a hero with a single heading](/docs/examples/patterns/hero/hero-heading-1)

### Headings section with a subtitle

Often the `h1` heading is followed by a subtitle or another kind of supplementary text. It should be implemented as a paragraph with `p-heading--2`. The spacing between `h1` and `h2`-sized headings is adjusted by Vanilla to shave off the excess margin and padding. This makes them look like they are part of the same paragraph:

<div>
  <a href="/docs/examples/patterns/hero/hero-heading-2">
    {{ image (
      url="https://assets.ubuntu.com/v1/96f7b929-vanilla-docs-hero-2.jpg",
      alt="",
      width="2464",
      height="447",
      hi_def=True,
      loading="auto"
      ) | safe
    }}
  </a>
</div>

[See example of a hero with a heading and a subtitle](/docs/examples/patterns/hero/hero-heading-2)

### Additional content following the headings section

Any additional content should be separated from headings by wrapping them in another section with `p-section--shallow` class. This creates the visual equivalent of a pause in speech.

In the following example, we have a headings section, then pause, then a paragraph:

<div>
  <a href="/docs/examples/patterns/hero/hero-sections">
    {{ image (
      url="https://assets.ubuntu.com/v1/1b4c51ac-vanilla-docs-hero-3.jpg",
      alt="",
      width="2464",
      height="721",
      hi_def=True,
      loading="auto|lazy"
      ) | safe
    }}
  </a>
</div>

[See example of a hero with additional content](/docs/examples/patterns/hero/hero-sections)

Below, the paragraph is followed by another pause, followed by a form element:

<div>
  <a href="/docs/examples/patterns/hero/hero-sections-search">
    {{ image (
      url="https://assets.ubuntu.com/v1/ef213b79-vanilla-docs-hero-4.jpg",
      alt="",
      width="2464",
      height="785",
      hi_def=True,
      loading="auto"
      ) | safe
    }}
  </a>
</div>

[See example of a hero with a form element](/docs/examples/patterns/hero/hero-sections-search)

### Using horizontal rules

We insert [muted rules](/docs/patterns/rule) (`p-rule--muted`) when large blocks of content are followed by one or more small elements, to help turn the small elements into a block that doesn’t seem overshadowed by preceding content.

<div>
  <a href="/docs/examples/patterns/hero/hero-rules">
    {{ image (
      url="https://assets.ubuntu.com/v1/ff310d3b-vanilla-docs-hero-5.jpg",
      alt="",
      width="2464",
      height="897",
      hi_def=True,
      loading="auto"
      ) | safe
    }}
  </a>
</div>

[See example of a hero with horizontal rules](/docs/examples/patterns/hero/hero-rules)

### Deliberate line breaks

When text in headings wraps, wherever possible, choose the best place in the sentence to wrap onto a new line. A good way to think about this is, if you had to take a breath (or insert a comma) in the middle of the sentence, where would you do it?

We have [utilities to show/hide](https://vanillaframework.io/docs/utilities/hide) line breaks at specific breakpoints. We can also insert non-breaking spaces (`&nbsp`) to achieve the same effect near the end of the line.

<div>
  <a href="/docs/examples/patterns/hero/hero-line-breaks">
    {{ image (
      url="https://assets.ubuntu.com/v1/9daafb94-vanilla-docs-hero-6.jpg",
      alt="",
      width="2464",
      height="817",
      hi_def=True,
      loading="auto"
      ) | safe
    }}
  </a>
</div>

[See example of a hero with deliberate line breaks](/docs/examples/patterns/hero/hero-line-breaks)

## Layouts

### The 25/75% split on large screens

The examples above use [the 25/75% section layout](/docs/patterns/grid#common-patterns). We have so far only placed content in the 75% column, leaving the first 3 columns of the 12 column large screen grid empty.

The first three columns (25% column) can be used for purposes other than adding white space, provided content fits comfortably and doesn’t wrap excessively.

A few examples:

As a container for content that is known to be short and unlikely to become longer due to copy changes:

<div>
  <a href="/docs/examples/patterns/hero/hero-404">
    {{ image (
      url="https://assets.ubuntu.com/v1/868ab9c8-vanilla-docs-hero-layout-1.jpg",
      alt="",
      width="2464",
      height="673",
      hi_def=True,
      loading="auto"
      ) | safe
    }}
  </a>
</div>

[See example of a hero with a heading in 25% column (404 error screen)](/docs/examples/patterns/hero/hero-404)

<div>
  <a href="/docs/examples/patterns/hero/hero-blog">
    {{ image (
      url="https://assets.ubuntu.com/v1/f84666c6-vanilla-docs-hero-layout-2.jpg",
      alt="",
      width="2464",
      height="721",
      hi_def=True,
      loading="auto"
      ) | safe
    }}
  </a>
</div>

[See example of a hero with a portrait in 25% column (blog post)](/docs/examples/patterns/hero/hero-blog)

As a “signpost” - a place to insert relevant small logos for example.

Wherever possible, take care to align the baseline of any text in the logo to the baseline of the `h1`. This can be done by exporting the logo with the needed amount of white space inside the image file itself:

<div>
  <a href="/docs/examples/patterns/hero/hero-signpost">
    {{ image (
      url="https://assets.ubuntu.com/v1/00a46094-vanilla-docs-hero-layout-3.jpg",
      alt="",
      width="2464",
      height="641",
      hi_def=True,
      loading="auto"
      ) | safe
    }}
  </a>
</div>

[See example of a hero with a signpost logo in 25% column](/docs/examples/patterns/hero/hero-signpost)

### The 25/75% split on medium screens

By default, the 25/75 split is preserved on medium screens by using 2 and 4 of the available columns (turning it into 33/66% split).

It is fine as long as the content of first column is small enough to fit in 2 of the grid’s 6 columns, as in the following example:

<div class="row--25-75">
  <div class="col">
    <a href="/docs/examples/patterns/hero/hero-signpost">
      {{ image (
        url="https://assets.ubuntu.com/v1/0099306a-vanilla-docs-hero-layout-4.jpg",
        alt="",
        width="1600",
        height="735",
        hi_def=True,
        loading="auto"
        ) | safe
      }}
    </a>
    <a href="/docs/examples/patterns/hero/hero-signpost">See example of a hero with 25/75 layout split on medium screens</a>
  </div>
</div>

In a case where content in the first column is too large to fit in 2 columns, or the content of second column being long enough to justify using full width of the screen, the layout should be adjusted to stack on medium screens (by using `row--25-75-on-large` [variant](/docs/patterns/grid#common-patterns)).

<div class="row--25-75">
  <div class="col">
    <a href="/docs/examples/patterns/hero/hero-nested-grid">
      {{ image (
        url="https://assets.ubuntu.com/v1/f4ca6477-vanilla-docs-hero-layout-5.jpg",
        alt="",
        width="1600",
        height="761",
        hi_def=True,
        loading="auto"
        ) | safe
      }}
    </a>
    <a href="/docs/examples/patterns/hero/hero-nested-grid">See example of a hero with 25/75 layout stacked on medium screens</a>
  </div>
</div>

We encourage examining the content and finding a layout that makes better use of the available space. It is also important to pay attention to the layout in subsequent sections, and ensure the overall sequence of layouts is well balanced.

### Nested grid rows

Layouts where the 25% column on desktop is empty automatically stretch the 75% container to fill the full width on medium screens. Any nested layouts, like the "Resources" and "Get in touch" section in the example below, should be handled on case-by-case basis. Here, they are adapted into a 33/66% layout, providing more space to the section that needs it:

<div>
  <a href="/docs/examples/patterns/hero/hero-line-breaks">
    {{ image (
      url="https://assets.ubuntu.com/v1/371c9de8-vanilla-docs-hero-layout-6.jpg",
      alt="",
      width="2464",
      height="849",
      hi_def=True,
      loading="auto"
      ) | safe
    }}
  </a>
</div>

<div class="row--25-75">
  <div class="col">
    <a href="/docs/examples/patterns/hero/hero-line-breaks">
      {{ image (
        url="https://assets.ubuntu.com/v1/618e6977-vanilla-docs-hero-layout-7.jpg",
        alt="",
        width="1600",
        height="621",
        hi_def=True,
        loading="auto"
        ) | safe
      }}
    </a>
  </div>
</div>

[See example of a hero with a nested row in 75% column](/docs/examples/patterns/hero/hero-line-breaks)

For more complicated layouts utilise both columns of the 25/75% split and a nested grid row inside the 75% column. This allows for more complex layouts, like the one below:

<div>
  <a href="/docs/examples/patterns/hero/hero-nested-grid">
    {{ image (
      url="https://assets.ubuntu.com/v1/a77be808-vanilla-docs-hero-layout-8.jpg",
      alt="",
      width="2464",
      height="754",
      hi_def=True,
      loading="auto"
      ) | safe
    }}
  </a>
</div>

[See example of a hero with a signpost logo and nested grid row in 75% column](/docs/examples/patterns/hero/hero-nested-grid)

## Suru

Suru backgrounds are a common way to provide visual separation between hero and rest of the page.

Check out the [Suru component documentation](/docs/patterns/suru) for more information on how to use it and relevant examples.
