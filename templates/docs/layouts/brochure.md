---
wrapper_template: '_layouts/docs.html'
context:
  title: Brochure site | Layouts
---
<div class="row">
  <div class="col-6 col-start-large-4">
    <div class="p-strip">
      <h1 class="p-heading--2 u-no-margin--bottom">
        <strong>
          Brochure site layouts
        </strong>
      </h1>
      <h2>
        The rules we use when designing and building pages with Vanilla 4.0
      </h2>
    </div>
    <div class="p-strip u-no-padding--top">
      <div class="u-fixed-width">
        <p class="u-no-margin--bottom">
          Structurally, a page is a sequence of sections sandwiched between a header and a footer. 
          To create a successful page, we need to get 3 things right:
        <p>
        <ul class="p-list--divided p-max-width">
          <li class="p-list__item has-bullet">
            choose section layouts that present content effectively
          <li class="p-list__item has-bullet">
            prevent adjacent sections from competing for attention 
          </li>
          <li class="p-list__item has-bullet">
            ensure the choices above, which are made individually per section, result in a coherent, well paced page
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<hr class="is-fixed-width u-no-margin--bottom">

<div class="row p-strip is-shallow u-no-padding--top">
  <div class="col-3 col-medium-3">
    <h2 class="p-heading--5">Choosing section layouts</h2>
  </div>
  <div class="col-6 col-medium-3">
    <p>
      Layout is controlled by a responsive grid that has 4, 6 or 12 columns depending on the browser window width.
    </p>
    <p> 
      Having 12 columns is necessary in order to create versatile layouts, however, it provides far too many choices - few of which work well in a sequence of sections. 
    </p>
    <p> 
      In the example below, chosing a 5 + 7 column layout followed by a 6 + 6 column layout results in content being staggered by one column, which looks like a mistake/misalignment:
    </p>
  </div>
</div>
<div class="p-strip is-shallow u-no-padding--top">
  <div class="p-strip--light">
    <div class="row">
      <div class="col-7">
          <p>
              <strong>7 columns</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>
      <div class="col-5">
          <p>
            <strong>5 columns</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>
  </div>
  <div class="row">
      <div class="col-4">
          <p><strong>4 columns</strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>
      <div class="col-4">
          <p><strong>4 columns</strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>
      <div class="col-4">
          <p><strong>4 columns - staggered by one column compared to the 5 column container above. Not a good look.</strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>
  </div>
  </div>
</div>
<!-- <div class="embedded-example"><a href="/docs/examples/layouts/brochure-site/example-01" class="js-example">View an example</a></div> -->
<hr class="is-fixed-width u-no-margin--bottom">
<div class="row p-strip is-shallow u-no-padding--top">
  <div class="col-3 col-medium-3">
    <h3 class="p-heading--5">
      Reducing options <br class="u-hide--medium  u-hide--small">with the 25% rule
    </h3>  
  </div>
  <div class="col-6">
    <p>
      To remedy this, we use a system inspired by an oct-tree: Widths are multiples of 25% of the available space.
      This simple rule decimates the available choices, which has the following beneficial effects on our layouts:
    </p>
    <ul class="p-list--divided">
      <li class="p-list__item has-bullet">
        creates up to 4 invisible "fault lines" (at 0%, 25%, 50%, 75%, or at the start of the first, fourth, sixth and nineth column), to one of which all content, across all sections, aligns
      </li>
      <li class="p-list__item has-bullet">
        fascilitates scanning/skimming, enabling a reader to quickly navigate by headings for example
    </li>
    <li class="p-list__item has-bullet">
      induces a strong sense of internal coherence, order and consistency
    </li>
    <li class="p-list__item has-bullet">
      provides enough room for variation to avoid monotony
    </li>
  </ul>
  <p>A few examples on wide screens:</p>
  </div>
</div>

<div class="grid-demo">
  <div class="row">
    <div class="col-6">
      <p>50%</p>
    </div>
    <div class="col-6">
      <p>50%</p>
    </div>
  </div>
  <hr class="is-fixed-width">
  <div class="row">
    <div class="col-3">
      <p>25%</p>
    </div>
    <div class="col-9">
      <p>75%</p>
      <div class="row">
        <div class="col-6">
          <p>50%</p>
        </div>
        <div class="col-3">
          <p>25%</p>
        </div>
    </div>
  </div>
  <hr class="is-fixed-width">
  <div class="row">
    <div class="col-3">
      <p>25%</p>
    </div>
    <div class="col-9">
      <p>75%</p>
      <div class="row">
        <div class="col-3">
          <p>25%</p>
        </div>
        <div class="col-3">
          <p>25%</p>
        </div>
        <div class="col-3">
          <p>25%</p>
        </div>
      </div>
    </div>
  </div>
  <hr class="is-fixed-width">
  <div class="row">
      <div class="col-3">
          <p>25%</p>
      </div>
      <div class="col-3">
          <p>25%</p>
      </div>
      <div class="col-3">
          <p>25%</p>
      </div>
      <div class="col-3">
          <p>25%</p>
      </div>
  </div>
</div>
</div>

<hr class="is-fixed-width">
<div class="p-strip u-no-padding--top">
  <div class="row">
    <div class="col-3">
      <h3 class="p-heading--5">The 50/50 split</h3>
    </div>
    <div class="col-9">
      <div class="row">
          <p>
            The 50/50 split is a versatile layout:
          </p>
          <ul class="p-list--divided">
            <li class="p-list__item has-bullet">
                It provides enough room for large headings and long paragraphs
            </li>
            <li class="p-list__item has-bullet">
              it makes it easy to scan by headings
            </li>
            <li class="p-list__item has-bullet">
              it is very compact - as the headings do not push body text down
            </li>
          </ul>
          <p>
            Do not use it when the heading is longer than the text it accompanies, or when you expect the content to be read sequentially. as in a documentation page or tutorial.<br>
            For those cases, allow the content to flow normally, in a single column.
          </p>
          <p>The 50/50 split performs equally well on the medium breakpoint - all you need to do is add col-medium-3 to each col-6:</p>
        <div class="embedded-example"><a href="/docs/examples/layouts/brochure-site/example-03" class="js-example">View an example</a></div>
      </div>
    </div>
  </div>
</div>


<hr class="is-fixed-width">
<div class="p-strip u-no-padding--top">
  <div class="row">
    <div class="col-3">
      <h3 class="p-heading--5">The 25/75 split</h3>
    </div>
    <div class="col-9">
      <div class="row">
          <p>
            The 25/75 split uses the first 25% as structural white space, with an optional small caps heading. It is a good basis for a nested 
          </p>
          <img src="https://assets.ubuntu.com/v1/08a447dd-25-75split.png" alt="">
          <ul class="p-list--divided">
            <li class="p-list__item has-bullet">
                It provides enough room for large headings and long paragraphs
            </li>
            <li class="p-list__item has-bullet">
              it makes it easy to scan by headings
            </li>
            <li class="p-list__item has-bullet">
              it is very compact - as the headings do not push body text down
            </li>
          </ul>
          <p>
            Do not use it when the heading is longer than the text it accompanies, or when you expect the content to be read sequentially. as in a documentation page or tutorial.<br>
            For those cases, allow the content to flow normally, in a single column.
          </p>
          <h6>Responsive considerations</h6>
          <p>
            Depending on thew content, you could either allow the two containers (25% and 75%) to stack up, or you could transform it into a 2col/4col layout, provided the resulting division is not too narrow forthe content within.
          </p> 
          <div class="embedded-example"><a href="/docs/examples/layouts/brochure-site/example-04" class="js-example">View an example</a></div>
        </div>
    </div>
  </div>
</div>


-------------
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
