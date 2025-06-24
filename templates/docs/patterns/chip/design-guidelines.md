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

## Anatomy

Chips are compact UI elements designed to represent individual interactive items or metadata. They are versatile
components that support multiple use cases such as filtering, tagging, and indicating status. Each variant of the
chip—Read-Only, Default, and Dismissible—comprises specific elements and structures tailored to its functionality.

![Anatomy diagram showing the different elements of a chip component including value, key, badge, icon, outline, and dismissible icon](https://assets.ubuntu.com/v1/f07c5040-chip-anatomy-202506.png)

| Element                       | Default Chip | Read-Only Chip | Description                                                            |
| ----------------------------- | ------------ | -------------- | ---------------------------------------------------------------------- |
| 1. Value                      | ✓            | ✓              | The primary textual information that the chip represents.              |
| 2. Key (Optional)             | ✓            | ✓              | Provides additional context for the value displayed on the chip.       |
| 3. Badge Component (Optional) | ✓            | ✓              | Displays a count or related metadata.                                  |
| 4. Icon (Optional)            | ✓            | ✓              | An informative icon that enhances the chip's context or appearance.    |
| 5. Outline                    | ✓            | —              | Makes the differentiation that the chip is interactive and selectable. |
| 6. Dismissable icon           | ✓            | —              | Indicates dismissability and dismissable area                          |

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
    <img src="https://assets.ubuntu.com/v1/ae1f70a7-chip_icon_only.png" alt="Chips with only icons and no text labels" />
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

---

## Default Chip

### When to use

<div class="grid-row">
  <div class="grid-col-4">
    <h4>Use for filtering</h4>
    <p>Let users filter page content dynamically by interacting with the chips. ​​Interactive filter chips must be backed by a secondary filtering menu or panel for accessibility and discoverability.</p>
  </div>
  <div class="grid-col-4">
    <img src="https://assets.ubuntu.com/v1/18664695-chip_filtering.png" alt="Default chips used for filtering page content" />
  </div>
</div>

### When not to use

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
    <img src="https://assets.ubuntu.com/v1/7240b5af-chip_default_without_filtering.png" alt="Default chips without filtering functionality" />
  </div>
</div>

---

## Read-only Chip

### When to use

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

### When not to use

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

# Properties

Chips can be further tailored through customizable attributes that extend the primary variants. These attributes—such as
color, icon, and size—add flexibility and adaptability to meet various design and functionality requirements.

## Value

Value is the mandatory text (string of characters) attribute of the chip, with an advised number of words between 1 and
3, with a maximum of 5. Do not use the value property to only indicate numeric values. Use
the [badge](/docs/patterns/badge) component instead.

## State

Chips support interactive states to provide clear feedback on user interactions. These states ensure usability and
accessibility across different interactions. Currently there is no disabled chip state.

### Supported States

- **Default:** The chip's standard appearance when not interacted with.
- **Hover:** A visual highlight when the user hovers over the chip, indicating interactivity.
- **Active:** The state when a user clicks or selects the chip, providing clear feedback.

![Chip states including default, hover, and active states](https://assets.ubuntu.com/v1/0a9853cc-chip_pseudo_classes.png)

Default chips have **default**, **hover** and **active** states while the read-only chips only have a **default** state.
The dismissible chip's interactive area is limited to the chip's icon area. In any use-case chips should have only one
interaction associated with them.

## Color

Colors - for background and stroke color - can have semantic connotation, reinforcing meaning or status visually,
making it easier for users to interpret contextual information, but can be also used to indicate categorization. If
there is a need for additional color(s) a contribution must be made to the design system.

### Supported Variants

- **Gray:** Used for categorization when no additional semantic meaning is added.
- **Green:** Can be used to communicate a positive connotation, such as confirmation or success.
- **Blue:** Can be used for giving additional information, preventive but not risk related.
- **Red:** Can be used for communicating a negative connotation.
- **Yellow:** Can be used for prevention or notifying of state with risk.

![Chips in different semantic colors: gray, green, blue, red, and yellow variants](https://assets.ubuntu.com/v1/2c04668e-chip_supported_colors.png)

## Size

Chips are available in two sizes affecting the height of the chip, to accommodate different UI needs. Width is defined
by the value text's length.

### Supported Sizes

- **Default**: The standard chip size.
- **Dense**: A compact version with reduced height and padding, designed for tighter spaces.

![Default and dense chip sizes side by side](https://assets.ubuntu.com/v1/a88b305f-chip_size_supported_sizes.png)

## Icon

The Icon property on the left hand side of the component is an optional attribute. It is used to display additional
contextual data related to the chip's content, providing an easy way to distinguish between chips. The icon on the right
hand side is reserved for the dismissible chip - having the Close icon as part of its anatomy.

### Supported Icons

All non-semantic icons from the icon library are supported for chips. Semantic icons should be only used with the
corresponding semantic background color.

![Chips with various icons from the icon library](https://assets.ubuntu.com/v1/3b6e88cd-chip_icon_supported_variants.png)

## Key

Keys (also referred to as leads) are optional, leading text elements that provide context to the chip's primary value.

**Example**: For a filter labeled "Month: June," "Month" is the key, and "June" is the value.

### Supported Variants

![Chips with key-value pairs like Month: June](https://assets.ubuntu.com/v1/4bfd89cb-chip_key_supported_variants.png)

## Badge

The Badge property is an optional attribute. It is used to display a quantitative value related to the chip's content,
providing additional context at a glance.

**Example**: In Landscape the chip's value could represent a group of machines while the badge would refer to the number of
machines in that group.

### Supported Variants

![Chips with badges displaying quantitative values](https://assets.ubuntu.com/v1/28a5d9e1-chip_badge_supported_variants.png)
