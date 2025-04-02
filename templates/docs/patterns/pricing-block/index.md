---
wrapper_template: '_layouts/docs.html'
context:
  title: Pricing block | Patterns
---

The Pricing block pattern is used to display individual cards representing different tiers of pricing and their associated offerings, positioned below a title and a description of the product. It uses the 4-4-8 grid pattern with subgrid, to retain alignment between rows. There are three variations of the block layout, depending on the number of cards displayed, ranging from two to four:

- 2 block, 50-50 split
- 3 block, 25-75 split
- 4 block, 25-25-25-25 split

The Pricing block pattern is composed of the following elements:

| Element                                                  | Description                                                                   |
| -------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Title (**required**)                                     | <code>h2</code> title text                                                    |
| Description                                              | <code>p</code> description text                                               |
| Tiers (**required**)                                     | An `Array<Object>` of individual tiers representing different pricing options |
| Tiers[].Name (**required**)                              | <code>h2</code> tier title                                                    |
| Tiers[].Price (**required**)                             | The price of the tier                                                         |
| Tiers[].Price explanation (**required**)                 | The timeframe/coverage for the pricing tier                                   |
| Tier[].Description                                       | Descriptive text for the pricing tier                                         |
| Tier[].List label (**required**)                         | A header for the list of offerings                                            |
| Tier[].Tier offerings (**required**)                     | An `Array<Object>` of what is offered in this tier                            |
| Tier[].Tier offerings[].List item style                  | The style of the list item                                                    |
| Tier[].Tier offerings[].List item content (**required**) | The list item content                                                         |
| Call to action                                           | [Call to action block](/docs/patterns/cta-block) beneath the list             |

## 4-blocks

The cards are evenly spread across the available space, with any gaps in content not affecting the alignment of the grid.

<div class="embedded-example"><a href="/docs/examples/patterns/pricing-block/4-blocks" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## 3-blocks

With 3 tier blocks, a 25-75 split will be used on large screens.

<div class="embedded-example"><a href="/docs/examples/patterns/pricing-block/3-blocks" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## 2-blocks

With two tier blocks, they will take all the available space.

<div class="embedded-example"><a href="/docs/examples/patterns/pricing-block/2-blocks" class="js-example" data-lang="jinja">
View example of the tiered list pattern
</a></div>

## Jinja Macro

The `vf_pricing_block` Jinja macro can be used to generate a pricing tier comparison. The API for the macro is shown below.

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
          Title of the pricing section.
        </td>
      </tr>
      <tr>
        <td>
          <code>tiers</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>Array&lt;Object&gt;</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          A list of offerings included in this tier.
        </td>
      </tr>
      <tr>
        <td>
          <code>tiers[].tier_name_text</code>
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
          Title for the pricing tier.
        </td>
      </tr>
      <tr>
        <td>
          <code>tiers[].tier_price_text</code>
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
          The pricing of a given tier
        </td>
      </tr>
      <tr>
        <td>
          <code>tiers[].tier_price_explanation</code>
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
          The timeframe/coverage for the pricing tier.
        </td>
      </tr>
      <tr>
        <td>
          <code>tiers[].tier_description_html</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          A description of the pricing tier.
        </td>
      </tr>
      <tr>
        <td>
          <code>tiers[].tier_label_text</code>
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
          A header for the offerings list.
        </td>
      </tr>
      <tr>
        <td>
          <code>tiers[].tier_offerings</code>
        </td>
        <td>
          Yes
        </td>
        <td>
          <code>Array&lt;Object&gt;</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          A list of the pricing tier's offerings.
        </td>
      </tr>
      <tr>
        <td>
          <code>tiers[].tier_offerings[].list_item_style</code>
        </td>
        <td>
          No
        </td>
        <td>
          One of: <br>
          <code>'ticked'</code><br>
          <code>'crossed'</code>
        </td>
        <td>
          <code>'bullet'</code>
        </td>
        <td>
          The styling of the individual list item.
        </td>
      </tr>
      <tr>
        <td>
          <code>tiers[].tier_offerings[].list_item_content_html</code>
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
          The content of the individual list item.
        </td>
      </tr>
      <tr>
        <td>
          <code>cta_html</code>
        </td>
        <td>
          No
        </td>
        <td>
          <code>string</code>
        </td>
        <td>
          <code>N/A</code>
        </td>
        <td>
          HTML for a CTA.
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
          No
        </td>
        <td>
          Paragraph-style description of the pricing section.
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Class reference

{{ class_reference("pricing-block") }}

## Import

### Jinja Macro

To import the Pricing block Jinja macro, copy the following statement into your Jinja template.

```jinja
{% raw -%}
{% from "_macros/vf_pricing-block.jinja" import vf_pricing_block %}
{%- endraw -%}
```

View the [building with Jinja macros guide](/docs/building-vanilla#jinja-macros)
for macro installation instructions.

### SCSS

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
