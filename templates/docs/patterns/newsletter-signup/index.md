---
wrapper_template: '_layouts/docs.html'
context:
  title: Newsletter signup | Patterns
---

{% from "docs/macros/patterns/wip-notice.jinja" import pattern_wip_notice %}

{{- pattern_wip_notice() }}

Newsletter signup is a form which allows users to subscribe to a newsletter for updates.

- [25-75](#25-75)
- [50-50](#50-50)
- [col-2](#col-2)
- [col-4](#col-4)
- [newsletter-block-rule-on-smaller-screens](#newsletter-block-rule-on-smaller-screens)

The Newsletter signup pattern is composed of the following elements:

| Element                                 | Description                                       |
| --------------------------------------- | ------------------------------------------------- |
| Title (**required**)                    | Title text (to be placed in `h2` or `h3` heading) |
| - `h2` for `50-50` and `25-75` variants |
| - `h3` for `col-2` and `col-4` variants |
| Description (**required**)              | Description text (one or more paragraphs)         |
| Label + input (**required**)            | Single-line input field with label                |
| Label + checkbox (**required**)         | Checkbox with a label                             |
| Button (**required**)                   | Single default button                             |

## 25-75

This is the default variant. It consists of a 25-75 split, with title on the left, and description(s) with form on the right.

<div class="embedded-example"><a href="/docs/examples/patterns/newsletter-signup/25-75" class="js-example" data-lang="jinja">
View example of the 25-75 newsletter signup
</a></div>

## 50-50

This variant consists of a 50-50 split, with title on the left, and description(s) with form on the right.

<div class="embedded-example"><a href="/docs/examples/patterns/newsletter-signup/50-50" class="js-example" data-lang="jinja">
View example of the 50-50 newsletter signup
</a></div>

## 2-col

This variant can be used to add a newsletter block within a grid.
Internally, it utilizes the new <a href="/docs/patterns/grid">4-4-8 column grid</a>.
The newsletter block itself takes 2 columns on large dimension (hence the name "2-col"), and 4 columns on both medium and small dimensions.
For the other adjacent content in the grid, you can utilize <a href="#col_slots">col_1..X slots</a>, each of which takes 2 columns on large dimensions, and 4 columns on both medium and small dimensions.

<div class="embedded-example"><a href="/docs/examples/patterns/newsletter-signup/2-col" class="js-example" data-lang="jinja">
View example of the 2-col newsletter signup
</a></div>

## 4-col

This variant is another option to add a newsletter block within a grid.
Internally, it also utilizes the new <a href="/docs/patterns/grid">4-4-8 column grid</a>.
The newsletter block itself takes 4 columns on all dimensions (hence the name "4-col").
For the other adjacent content in the grid, you can utilize <a href="#col_slots">col_1..X slots</a>, each of which takes 2 columns on large dimensions, and 4 columns on both medium and small dimensions.

<div class="embedded-example"><a href="/docs/examples/patterns/newsletter-signup/4-col" class="js-example" data-lang="jinja">
View example of the 4-col newsletter signup
</a></div>

## Newsletter block rule on smaller screens

The <code>2-col</code> variant comes with a [muted-rule](/docs/patterns/rule#muted) on small screens.<br/>
Similarly, the <code>4-col</code> variant comes with a [muted-rule](/docs/patterns/rule#muted) on both small and medium screens.<br/>
To hide this rule, you can pass <code>hide_newsletter_block_rule</code>.<br />
The following example shows both 2-col and 4-col variants not having a muted rule on medium/small screens.

<div class="embedded-example"><a href="/docs/examples/patterns/newsletter-signup/x-col-without-newsletter-block-rule" class="js-example" data-lang="jinja">
View example of the 2-col/4-col newsletter signup without a newsletter block-level rule on smaller screens
</a></div>

## Jinja Macro

The `vf_newsletter_signup` Jinja macro can be used to generate a Newsletter signup pattern. The API for the macro is shown below.

### Parameters

<div style="overflow: auto;">
  <table>
    <thead>
      <tr>
        <th style="width: 220px;">Name</th>
        <th style="width: 160px;">Required?</th>
        <th style="width: 160px;">Type</th>
        <th style="width: 160px;">Default</th>
        <th style="width: 250px;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <code>title_text</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          <code>h2/h3</code> title text
          <ul>
            <li class="p-list__item"><code>h2</code> for <code>'25-75', '50-50' variants</code></li> 
            <li class="p-list__item"><code>h3</code> for <code>'2-col', '4-col' variants</code></li> 
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <code>input_label</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          Label for the input field
        </td>
      </tr>
      <tr>
        <td>
          <code>checkbox_id</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>canonicalUpdatesOptIn</code>
        </td>
        <td>
          ID for the checkbox field, used for agreeing to something before submitting the form. This may vary based on the backend used to collect form responses.
        </td>
      </tr>
      <tr>
        <td>
          <code>checkbox_label</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          Label for the checkbox
        </td>
      </tr>
      <tr>
        <td>
          <code>layout</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>25-75</code>
        </td>
        <td>
          Variant of the newsletter signup pattern<br/>
          One of <code>`25-75`</code>, <code>`50-50`</code>, <code>`2-col`</code>, <code>`4-col`</code>
        </td>
      </tr>
      <tr>
        <td>
          <code>form_id</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          The ID passed to the form element. For example <code>mktoForm_XXXX</code>
        </td>
      </tr>
      <tr>
        <td>
          <code>form_action</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>https://ubuntu.com/marketo/submit</code>
        </td>
        <td>
          Action URL for the form submission, typically the form endpoint.
        </td>
      </tr>
      <tr>
        <td>
          <code>return_url</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          URL to return to after form submission
        </td>
      </tr>
      <tr>
        <td>
          <code>top_rule_variant</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>One of:</code><br />
          <code>'default'</code><br />
          <code>'highlighted'</code><br />
          <code>'muted'</code><br />
          <code>'none'</code>
        </td>
        <td>
          <code>'default'</code>
        </td>
        <td>
          Variant of the top rule
          <ul class="u-no-margin--bottom">
            <li class="p-list__item">
              Use <code>'default'</code> for a <a href="/docs/patterns/rule#default">default rule</a>. This can also be used when the pricing block is a standalone section
            </li>
            <li class="p-list__item">
              Use <code>'highlighted'</code> for a <a href="/docs/patterns/rule#highlighted">highlighted rule</a>. This should be used when the pricing block is a standalone section
            </li>
            <li class="p-list__item">
              Use <code>'muted'</code> for a <a href="/docs/patterns/rule#muted">muted rule</a>. This should be used when the pricing block is a subsection and has other subsections before it
            </li>
            <li class="p-list__item">
              Use <code>'none'</code> for no rule. This should be used when the pricing block is the first or only item in a subsection.
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <code>hide_newsletter_block_rule</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>boolean</code>
        </td>
        <td>
          <code>False</code>
        </td>
        <td>
          Whether to hide the newsletter block rule on medium/small screens.<br />
          Only applicable to <code>2-col</code> and <code>4-col</code> variants
        </td>
      </tr>
      <tr>
        <td>
          <code>submit_btn_class</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>'js-submit-button'</code>
        </td>
        <td>
          Additional classes added to form submit button
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Slots

<div style="overflow: auto;">
  <table>
    <thead>
      <tr>
        <th style="width: 220px;">Name</th>
        <th style="width: 160px;">Required?</th>
        <th style="width: 250px;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <code>description</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          Paragraph-style content. One or more paragraphs
        </td>
      </tr>
      <tr>
        <td>
          <code>addendum</code>
        </td>
        <td>
          No
        </td>
        <td>
          Additional content to include in the form, such as a disclaimer or additional information. Paragraph-style content
        </td>
      </tr>
      <tr>
        <td>
          <code>hidden_fields</code>
        </td>
        <td>
          No
        </td>
        <td>
          Additional hidden fields to include in the form
        </td>
      </tr>
      <tr>
        <td>
          <code>honeypot_fields</code>
        </td>
        <td>
          No
        </td>
        <td>
          Hidden honeypot fields for spam prevention
        </td>
      </tr>
      <tr id="col_slots">
        <td>
          <code>col_1..X</code><br />
          <ul>
            <li class="p-list__item">X = 3, for <code>'2-col'</code></li>
            <li class="p-list__item">X = 2, for <code>'4-col'</code></li>
          </ul>
        </td>
        <td>
          Only for <code>'2-col'</code> and <code>'4-col'</code> variants
        </td>
        <td>
          Content for the neighbouring columns in the grid. Only applicable to <code>'2-col'</code> and <code>'4-col'</code> layouts.<br />
          <ul class="u-no-margin--bottom">
            <li class="p-list__item">
              In the <code>4-col</code> variant, the newsletter block takes up 4 columns on large screens. This leaves space for two 2-column blocks, which can be populated with the `col_1` and `col_2` slots.
            </li>
            <li class="p-list__item">
              In the <code>2-col</code> variant, the newsletter block takes up 2 columns on large screens. This leaves space for three 2-column blocks, which can be populated with the `col_1`, `col_2`, and `col_3` slots.
            </li>
          </ul>
          For more information, please see the new <a href="/docs/patterns/grid">4-4-8 column grid</a>.
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Import

### Jinja Macro

To import the Newsletter signup Jinja macro, copy the following import statement into your
Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_newsletter-signup.jinja" import vf_newsletter_signup %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
