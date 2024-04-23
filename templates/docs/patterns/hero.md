---
wrapper_template: '_layouts/docs.html'
context:
  title: Hero pattern | Components
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

In its simplest form, a hero is a single `h1` heading wrapped in a section container with `p-section--hero` class name (that provides the necessary 1.5rem top padding and 4rem bottom padding). The `h1` heading is the only required element in all heros. Examples of this type of usage can be found on [canonical.com/blog](https://canonical.com/blog), archive and similar pages.

<div>
  {{ image (
    url="https://assets.ubuntu.com/v1/9c285bce-vanilla-docs-hero-1.jpg",
    alt="",
    width="2464",
    height="368",
    hi_def=True,
    loading="auto"
    ) | safe
  }}
</div>

### Headings section with a subtitle

Often the `h1` heading is followed by a subtitle or another kind of suplementary text. It should be implemented as a paragraph with `p-heading--2`. The spacing between `h1` and `h2`-sized headings is adjusted by Vanilla to shave off the excess margin and paddding. This makes them look like they are part of the same paragraph:

<div>
  {{ image (
    url="https://assets.ubuntu.com/v1/96f7b929-vanilla-docs-hero-2.jpg",
    alt="",
    width="2464",
    height="447",
    hi_def=True,
    loading="auto"
    ) | safe
  }}
</div>

### Additional content following the headings section

Any additional content should be separated from headings by wrapping them in another section with `p-section--shallow` class. This creates the visual equivalent of a pause in speech.

In the following example, we have a headings section, then pause, then a paragraph:

<div>
  {{ image (
    url="https://assets.ubuntu.com/v1/1b4c51ac-vanilla-docs-hero-3.jpg",
    alt="",
    width="2464",
    height="721",
    hi_def=True,
    loading="auto|lazy"
    ) | safe
  }}
</div>

Below, the paragraph is followed by another pause, followed by a form element:

<div>
  {{ image (
    url="https://assets.ubuntu.com/v1/ef213b79-vanilla-docs-hero-4.jpg",
    alt="",
    width="2464",
    height="785",
    hi_def=True,
    loading="auto"
    ) | safe
  }}
</div>

### Using horizontal rules

We insert [rules](/docs/patterns/rule) (`p-rule`) when large blocks of content are followed by one or more small elements, to help turn the small elements into a block that doesn’t seem overshadowed by preceding content.

A couple of examples below demonstrating both options below:

<div>
  {{ image (
    url="https://assets.ubuntu.com/v1/9daafb94-vanilla-docs-hero-6.jpg",
    alt="",
    width="2464",
    height="817",
    hi_def=True,
    loading="auto"
    ) | safe
  }}
</div>

### Deliberate line breaks

When text in headings wraps, wherever possible, choose the best place in the sentence to wrap onto a new line. A good way to think about this is, if you had to take a breath (or insert a comma) in the middle of the sentence, where would you do it?

We have [utilities to show/hide](https://vanillaframework.io/docs/utilities/hide) line breaks at specific breakpoints. We can also insert non-breaking spaces (`&nbsp`) to achieve the same effect near the end of the line.

<div>
  {{ image (
    url="https://assets.ubuntu.com/v1/ff310d3b-vanilla-docs-hero-5.jpg",
    alt="",
    width="2464",
    height="897",
    hi_def=True,
    loading="auto"
    ) | safe
  }}
</div>

---

## Layouts

### The 25/75% split on large screens

The examples above use the 25/75% section layout. We have so far only placed content in the 75% column, leaving the first 3 columns of the 12-column large screen grid empty.

The first three columns (25% column) can be used for purposes other than adding white space, provided content fits comfortably and doesn’t wrap excessively.

A few examples:

As a container for content that is known to be short and unlikely to become longer due to copy changes:

<div>
  {{ image (
    url="https://assets.ubuntu.com/v1/868ab9c8-vanilla-docs-hero-layout-1.jpg",
    alt="",
    width="2464",
    height="673",
    hi_def=True,
    loading="auto"
    ) | safe
  }}
</div>

<div>
  {{ image (
    url="https://assets.ubuntu.com/v1/f84666c6-vanilla-docs-hero-layout-2.jpg",
    alt="",
    width="2464",
    height="721",
    hi_def=True,
    loading="auto"
    ) | safe
  }}
</div>

As a “signpost” - a place to insert relevant small logos for example.

Wherever possible, take care to align the baseline of any text in the logo to the baseline of the `h1`. This can be done by exporting the logo with the needed amount of white space inside the image file itself:

<div>
  {{ image (
    url="https://assets.ubuntu.com/v1/74fb0cc7-vanilla-docs-hero-layout-3.jpg",
    alt="",
    width="2464",
    height="625",
    hi_def=True,
    loading="auto"
    ) | safe
  }}
</div>

### The 25/75% split on medium screens

By default, the 25/75 split is preserved on medium screens by using 2 and 4 of the available columns (turning it into 33/66% split).

It is fine as long as the content of first column is small enough to fit in 2 of the grid’s 6 columns, as in the following example:

<div class="row--25-75">
  <div class="col">
    {{ image (
      url="https://assets.ubuntu.com/v1/20d3e0a4-vanilla-docs-hero-layout-5.jpg",
      alt="",
      width="1600",
      height="673",
      hi_def=True,
      loading="auto"
      ) | safe
    }}
  </div>
</div>

In a case where content in the first column is too large to fit in 2 columns, or the content of second column being long enough to justify using full width of the screen, the layout should be adjusted to stack on medium screens (by using `row--25-75-on-large` variant).

<div class="row--25-75">
  <div class="col">
    {{ image (
      url="https://assets.ubuntu.com/v1/1a900733-vanilla-docs-hero-layout-4.jpg",
      alt="",
      width="1600",
      height="747",
      hi_def=True,
      loading="auto"
      ) | safe
    }}
  </div>
</div>

We encourage examining the content and finding a layout that makes better use of the available space. It is also important to pay attention to the layout in subsequent sections, and ensure the overall sequence of layouts is well balanced.

Layouts where the 25% column on desktop is empty automatically stretch the 75% container to fill the full width on medium screens. Any nested layouts, like the "Resources" and "Get in touch" section in the example below, should be handled on case-by-case basis. Here, they are adapted into a 33/66% layout, providing more space to the section that needs it:

<div>
  {{ image (
    url="https://assets.ubuntu.com/v1/371c9de8-vanilla-docs-hero-layout-6.jpg",
    alt="",
    width="2464",
    height="849",
    hi_def=True,
    loading="auto"
    ) | safe
  }}
</div>

<div class="row--25-75">
  <div class="col">
    {{ image (
      url="https://assets.ubuntu.com/v1/618e6977-vanilla-docs-hero-layout-7.jpg",
      alt="",
      width="1600",
      height="621",
      hi_def=True,
      loading="auto"
      ) | safe
    }}
  </div>
</div>

### Nested grid rows

For more complicated layouts use the nested grid row inside the 75% column. This allows for more complex layouts, like the one below:

<div>
  {{ image (
    url="https://assets.ubuntu.com/v1/a77be808-vanilla-docs-hero-layout-8.jpg",
    alt="",
    width="2464",
    height="754",
    hi_def=True,
    loading="auto"
    ) | safe
  }}
</div>

<div>

</div>