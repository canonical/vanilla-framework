---
wrapper_template: '_layouts/docs.html'
context:
  title: Brochure site | Layouts
---
<div class="p-strip is-deep">
  <h1 class="p-heading--2"><strong>
    Brochure site layout
  </strong></h1>
</div>

This article outlines the rules we use when designing and building pages using Vanilla 4.0.
Structurally, a page is a sequence of sections sandwiched between a header and a footer. 
To create a successful page, we need to get 3 things right for each section:

- choose a layout that effectively presents the content within each section
- prevent adjacent sections from competing for attention
- ensure the choices above, which are made individually per section, result in a coherent, well paced page


<h2>Choosing a layout</h2>

Layout is controlled by a 12 column grid (on desktop, see the grid article for details on othr screen sizes)(insert link).

<h3 class="p-heading--5">
  Too many options
</h3>
This, however, leaves a lot of choices - few of which work well in a sequence of sections. 
For example, chosing a 5 + 7 column layout followed by a 6 + 6 column layout results in content being staggered by one column, which looks like a mistake/misalignment.

<h3 class="p-heading--5">
  Reducing options with the 25% rule
</h3>
To remedy this, we use a system inspired by an oct-tree: Widths are multiples of 25% of the available space.

This simple choice decimates the available choices, which has the following beneficial effects on our layouts:
- creates up to 3 invisible "fault lines", to one of which all content, across all sections, aligns
- fascilitates scanning/skimming, enabling a reader to quickly navigate by headings for example
- induces a strong sense of internal coherence, order and consistency
- provides enough room for variation to avoid monotony



1. Layout splits
1.1. the system of 25% multiples
1.1.1 On desktop
1.1.2. On tablet
1.1.3 On mobile
1.1.4 Exceptions (2col/4col split inside a 50% parent, etc)
1.2. nesting
1.3 When not to use - e.g. when left column has longer content than right column in a 50/50 split, then just stack vertically
2. Dividers 
2.1. spacing - shallow/regular/emphasis spacing
2.2. hrs - ancoring, indicating beginning of section, guiding eye, etc
2.2.1. Positioning hrs - when you have more than one heading, etc
2.3. background colour change
2.4. Suru separators
3. Typography
3.1. choosing the correct heading style
3.2. using <br>s to create phrasing/pauses


## Example 1

Example 1 is below...

<div class="embedded-example"><a href="/docs/examples/layouts/brochure-site/example-01" class="js-example">View an example</a></div>

## Example 2

Example 2 is below...

<div class="embedded-example"><a href="/docs/examples/layouts/brochure-site/example-02" class="js-example">View an example</a></div>

## Example 3

Example 3 is below...

<div class="embedded-example"><a href="/docs/examples/layouts/brochure-site/example-03" class="js-example">View an example</a></div>

## Example 4

Example 4 is below...

<div class="embedded-example"><a href="/docs/examples/layouts/brochure-site/example-04" class="js-example">View an example</a></div>

## Example 5

Example 5 is below...

<div class="embedded-example"><a href="/docs/examples/layouts/brochure-site/example-05" class="js-example">View an example</a></div>

## Example 6

Example 6 is below...

<div class="embedded-example"><a href="/docs/examples/layouts/brochure-site/example-06" class="js-example">View an example</a></div>

## Example 7

Example 7 is below...

<div class="embedded-example"><a href="/docs/examples/layouts/brochure-site/example-07" class="js-example">View an example</a></div>

## Example 8

Example 8 is below...

<div class="embedded-example"><a href="/docs/examples/layouts/brochure-site/example-08" class="js-example">View an example</a></div>

## Example 9

Example 9 is below...

<div class="embedded-example"><a href="/docs/examples/layouts/brochure-site/example-09" class="js-example">View an example</a></div>

## Example 10

Example 10 is below...

<div class="embedded-example"><a href="/docs/examples/layouts/brochure-site/example-10" class="js-example">View an example</a></div>


[View full screen example of the documentation layout](/docs/examples/layouts/brochure-site/).
