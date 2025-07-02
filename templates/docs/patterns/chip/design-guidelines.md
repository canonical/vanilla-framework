---
wrapper_template: '_layouts/docs.html'
context:
  title: Chips | Components
---

## Overview

Chips are compact elements that can be a representation of individual interactive items and metadata. They catch users'
attention and allow them to interact directly with them or their parent component, make selections, filter content, or
trigger actions; these actions, however, should never be the primary action since that's what CTA buttons are for.

Chips will most of the time appear dynamically as a group of multiple interactive elements.

Chips can include a leading label for the metadata displayed in the chip. They can also include
a [Badge](https://discourse.ubuntu.com/t/component-badge/31574) to show a count relating to that metadata and a close
icon button to remove the chip.

---

## Anatomy

Chips are compact UI elements designed to represent individual interactive items or metadata. They are versatile
components that support multiple use cases such as filtering, tagging, and indicating status. Each variant of the
chip—Read-Only, Default, and Dismissible—comprises specific elements and structures tailored to its functionality.

![Anatomy diagram showing the different elements of a chip component including value, key, badge, icon, outline, and dismissible icon](https://assets.ubuntu.com/v1/8b33b9dc-chip_anatomy_canonical.png)

<div style="overflow: auto;">
  <table>
    <thead>
      <tr>
        <th style="width: 250px;">Element</th>
        <th style="width: 100px;">Default</th>
        <th style="width: 100px;">Read-Only</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1. Value</td>
        <td>✓</td>
        <td>✓</td>
        <td>The primary textual information that the chip represents.</td>
      </tr>
      <tr>
        <td>2. Key (Optional)</td>
        <td>✓</td>
        <td>✓</td>
        <td>Provides additional context for the value displayed on the chip.</td>
      </tr>
      <tr>
        <td>3. Badge Component (Optional)</td>
        <td>✓</td>
        <td>✓</td>
        <td>Displays a count or related metadata.</td>
      </tr>
      <tr>
        <td>4. Icon (Optional)</td>
        <td>✓</td>
        <td>✓</td>
        <td>An informative icon that enhances the chip's context or appearance.</td>
      </tr>
      <tr>
        <td>5. Outline</td>
        <td>✓</td>
        <td>—</td>
        <td>Makes the differentiation that the chip is interactive and selectable.</td>
      </tr>
      <tr>
        <td>6. dismissible icon</td>
        <td>✓</td>
        <td>—</td>
        <td>Indicates dismissibility and dismissible area</td>
      </tr>
    </tbody>
  </table>
</div>

### Subcomponents

The default chip uses the subcomponent of the [dismissible icon (6)](#dismissible-icon).

---

## Usage

Chips serve as compact visual elements for representing metadata, making selections, or filtering content. They provide
a secondary layer of interactivity or information in user interfaces and should never serve as the primary
call-to-action or a link to other pages.

### When to use

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Place next to headers or in cards</h4>
    <p>Chips may be used inline with headers or within cards to convey supplementary information like category, type, or metadata.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/f6406472-chip_next_to_cards.png" alt="Chips placed next to headers showing category and metadata information" />
  </div>
  <div class="grid-col-4 grid-col-start-large-5">
   <img src="https://assets.ubuntu.com/v1/5560edb6-chip_card_status.png" alt="Chips used to indicate status in a card">
  </div>
</div>

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Use inside tables</h4>
    <p>Chips are effective in tables for showing quick data tags, such as statuses or attribute types, within table cells.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/72036189-chip_inside_table.png" alt="Chips used inside table cells showing status and attribute types" />
  </div>
</div>

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Use for categorization</h4>
    <p>They help visually differentiate elements quickly when used for category or labelling.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/13f97182-chip_categorization.png" alt="Chips used for categorization and visual differentiation" />
  </div>
</div>

### When not to use

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Don't use as primary navigation or buttons, links</h4>
    <p>Chips are not links or CTAs. Their function is always secondary to other UI controls like buttons or tabs.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/cb699dff-chip_primary_navigation.png" alt="Chips used as primary navigation buttons" />
  </div>
  <div class="grid-col-4 grid-col-start-large-5">
   <img src="https://assets.ubuntu.com/v1/7b94d8a3-chip_pnav_1.png" alt="Chips used as primary navigation buttons">
  </div>
  <div class="grid-col-4 grid-col-start-large-5">
   <img src="https://assets.ubuntu.com/v1/08985ed9-chip_pnav_2.png" alt="Chips used as primary navigation buttons">
  </div>
</div>

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Don't display errors using chips</h4>
    <p>For alerts or warnings, use standard UI components like notifications or inline error messages, not chips.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/292b796b-chip_error.png" alt="Chips used for error messages" />
  </div>
</div>

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Don't use chips for branding</h4>
    <p>Chips should not display brand-specific content like "Ubuntu Pro". Use official branding materials instead.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/4b1f2a06-chip_branding.png" alt="Chips used for branding content" />
  </div>
</div>

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Don't use long phrases</h4>
    <p>Chip values should be between 1-3 words, maximum of five. Longer values reduce readability and visual scannability.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/9bb777ff-chip_long_phrase.png" alt="Chips with overly long text values" />
  </div>
</div>

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Don't use icon-only chips</h4>
    <p>Chips must include a text label. Icons alone don't convey enough context.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/c5ec0270-chip_with_icon_only.png" alt="Chips with only icons and no text labels" />
  </div>
</div>

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Don't use chips in dropdowns selected states</h4>
    <p>When content is selected in a combo box, show the selected value as plain text, not a chip.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/18664695-chip_dropdown_selected_state.png" alt="Chips used in dropdown selected states" />
  </div>
</div>

### Default Chip

#### When to use

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Use for filtering</h4>
    <p>Let users filter page content dynamically by interacting with the chips. ​​Interactive filter chips must be backed by a secondary filtering menu or panel for accessibility and discoverability.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/139e6623-chip_use_for_filtering.png" alt="Default chips used for filtering page content" />
  </div>
</div>

#### When not to use

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Don't use as radio buttons</h4>
    <p>Chips are not a replacement for exclusive selection controls. Use radios or toggles for binary choice input.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/7240b5af-chip_radio.png" alt="Chips used as radio button alternatives" />
  </div>
</div>

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Don't use default chip without filtering functionality</h4>
    <p>Default chips must include active filtering behavior. If no filtering is applied, use a read-only chip instead.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/758fbf0c-chip_default_without_filtering.png" alt="Default chips without filtering functionality" />
  </div>
</div>

### Read-only Chip

#### When to use

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Indicate status</h4>
    <p>Use read-only chips to indicate a status like "New" next to the side navigation item.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/55f94020-chip_indicate_status.png" alt="Read-only chips indicating status next to navigation items" />
  </div>
</div>

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Show non-interactive status or labels</h4>
    <p>Read-only chips convey static information like availability, type, or other types of metadata.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/72036189-chip_noninteractive_state.png" alt="Read-only chips showing non-interactive status and labels" />
  </div>
</div>

#### When not to use

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Don't make read-only chips interactive</h4>
    <p>Read-only chips must not include hover or click states.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/f5f5d422-chip_readonly_interactive.png" alt="Read-only chips with interactive hover states" />
  </div>
</div>

---

## Properties

Chips can be further tailored through customizable attributes that extend the primary variants. These attributes—such as
color, icon, and size—add flexibility and adaptability to meet various design and functionality requirements.

### Value

Value is the mandatory text (string of characters) attribute of the chip, with an advised number of words between 1 and
3, with a maximum of 5. Do not use the value property to only indicate numeric values. Use
the [badge](/docs/patterns/badge) component instead.

### State

Chips support interactive states to provide clear feedback on user interactions. These states ensure usability and
accessibility across different interactions. Currently there is no disabled chip state.

#### Supported States

- **Default:** The chip's standard appearance when not interacted with.
- **Hover:** A visual highlight when the user hovers over the chip, indicating interactivity.
- **Active:** The state when a user clicks or selects the chip, providing clear feedback.

![Chip states including default, hover, and active states](https://assets.ubuntu.com/v1/0a9853cc-chip_pseudo_classes.png)

Default chips have **default**, **hover** and **active** states while the read-only chips only have a **default** state.
The dismissible chip's interactive area is limited to the chip's icon area. In any use-case chips should have only one
interaction associated with them.

### Color

Colors - for background and stroke color - can have semantic connotation, reinforcing meaning or status visually,
making it easier for users to interpret contextual information, but can be also used to indicate categorization. If
there is a need for additional color(s), a [contribution must be made](https://github.com/canonical/vanilla-framework/issues/new/choose) to the design system.

#### Supported Variants

- **Gray:** Used for categorization when no additional semantic meaning is added.
- **Green:** Can be used to communicate a positive connotation, such as confirmation or success.
- **Blue:** Can be used for giving additional information, preventive but not risk related.
- **Red:** Can be used for communicating a negative connotation.
- **Yellow:** Can be used for prevention or notifying of state with risk.

![Chips in different semantic colors: gray, green, blue, red, and yellow variants](https://assets.ubuntu.com/v1/2c04668e-chip_supported_colors.png)

### Size

Chips are available in two sizes affecting the height of the chip, to accommodate different UI needs. Width is defined
by the value text's length.

#### Supported Sizes

- **Default**: The standard chip size.
- **Dense**: A compact version with reduced height and padding, designed for tighter spaces.

![Default and dense chip sizes side by side](https://assets.ubuntu.com/v1/a88b305f-chip_size_supported_sizes.png)

### Icon

The Icon property on the left hand side of the component is an optional attribute. It is used to display additional
contextual data related to the chip's content, providing an easy way to distinguish between chips. The icon on the right
hand side is reserved for the dismissible chip - having the Close icon as part of its anatomy.

#### Supported Icons

All non-semantic icons from the icon library are supported for chips. Semantic icons should be only used with the
corresponding semantic background color.

![Chips with various icons from the icon library](https://assets.ubuntu.com/v1/3b6e88cd-chip_icon_supported_variants.png)

### Key

Keys (also referred to as leads) are optional, leading text elements that provide context to the chip's primary value.

**Example**: For a filter labeled "Month: June," "Month" is the key, and "June" is the value.

#### Supported Variants

![Chips with key-value pairs like Month: June](https://assets.ubuntu.com/v1/4bfd89cb-chip_key_supported_variants.png)

### Badge

The Badge property is an optional attribute. It is used to display a quantitative value related to the chip's content,
providing additional context at a glance.

**Example**: In Landscape the chip's value could represent a group of machines while the badge would refer to the number of
machines in that group.

#### Supported Variants

![Chips with badges displaying quantitative values](https://assets.ubuntu.com/v1/74aa7d1f-chip_badge_supported_variants.png)

### dismissible icon

The dismissible icon is a subcomponent of the Default chip. When present it becomes the interactive area of the chip.

![Chip with dismissible icon](https://assets.ubuntu.com/v1/1146d7f6-chip_dismissible_icon.png)

---

## Styling

### Layout and Spacing

#### Vertical

![Chip vertical spacing settings](https://assets.ubuntu.com/v1/4276f417-chip_spacing_vertical.jpg)

The spacing in the default sized chip has a `0.25rem` padding, including the outline stroke of the component on both top and bottom of the chip.  
Label wrappers have a `5.5px` padding vertically.
In the dense sized chip, the outline stroke is excluded from the body of the chip, so that the padding is only including the `1.5px` border.

Read-only chips have the same dimensions as default chips. The transparent borders are calculated into the size of the chip.

#### Horizontal

![Chip horizontal spacing settings](https://assets.ubuntu.com/v1/01b1b550-chip_spacing_horizontal.jpg)

In the default chip the spacing between icon, label, badge and dismissible icon is `4px`. The chip's horizontal padding is `10.5px`.

We recommend a spacing of minimum `8px` between chip components and chip components with other components.

### Colors

![Chip component colors](https://assets.ubuntu.com/v1/d1d0f2d0-chip_colors.png)

### Text overflow

The chip width mainly depends on the number of characters included in the chip's value. We would like to advise you to keep the length of the chip between one and three words. The hard requirement is having the chip with a maximum of five words.  
In the case of an overflow, the chip's value truncates rather than wrapping it inside the chip.

### Responsiveness

Responsiveness is inherited from the already documented chip component.

### Tokens

The source of truth can be found in the [Figma file](https://www.figma.com/design/Y0cqKbTG4rejU9xm2oh5pR/%F0%9F%92%A0-Vanilla---Core-component-library?node-id=1-8&p=f&vars=1&var-id=b9d535f654f0fc25bd7eafb20325a7f13b002282%2F3595-780&m=dev) for spacing and color tokens.

---

## Reference

- [Chip Figma File](https://www.figma.com/design/2sIfSFOcU2SEiPe4xtrJmC/%F0%9F%8D%9F-Chip?node-id=68-1007)
- [Material Design - Chips](https://material.io/components/chips#input-chips)
- [Carbon - Tag](https://www.carbondesignsystem.com/components/tag/usage/)
- [Clarity - Label](https://clarity.design/angular-components/label/)
- [Bolt - Chip](https://boltdesignsystem.com/pattern-lab/?p=viewall-components-chip)
- [Atlassian - Tag](https://atlassian.design/components/tag/examples)
