---
wrapper_template: '_layouts/docs.html'
context:
  title: Chips | Components
---

## Overview

Chips are compact elements that can be a representation of individual interactive items and metadata. They catch users’ attention and allow them to interact directly with them or their parent component, make selections, filter content, or trigger actions; these actions, however, should never be the primary action since that’s what CTA buttons are for.

Chips will most of the time appear dynamically as a group of multiple interactive elements.

Chips can include a leading label for the metadata displayed in the chip. They can also include a [Badge](https://discourse.ubuntu.com/t/component-badge/31574) to show a count relating to that metadata and a close icon button to remove the chip.

## Anatomy

![Chips anatomy](https://assets.ubuntu.com/v1/794a37b6-1.jpeg)

The chip is a compact element based on a 24 px high container with a 1 px border and full height border radius. The border colour must satisfy 3:1 contrast against the background colour (more about this in the accessibility section).

Component elements:

1. **Chip Value**
   The main piece of information that the chip represents.

1. **Chip label** (optional)
   As a lead text, this label can provide context or a category for the value text.

1. **Badge** (optional)
   A count related to the chip data.

1. **Close button** (optional)
   Icon button to remove the chip.

### Examples

Search & Filter:

![Chips in search and filter component](https://assets.ubuntu.com/v1/961dbc68-2.png)

**Chip labels** are useful when the chip values in a certain context belong to different categories.
The **close button** makes removing filters easier and faster.

## Usage

### When to use

- Dynamically show metadata that users should be able to interact with.
- Display compact items with an interactive role in the UI: filters, selections, tags, etc.

### When not to use

- Any static scenario, e.g. in a case where info, tags, metadata, etc. have to be dynamically displayed as single items for purely informative reasons, and users will not be able to interact with them. In such scenarios, plain text or status labels are the appropriate choices, depending on how much attention we want from the user.

## Variants

Apart from the **Default**, there are two variants for this component that can actually be combined: **Semantic** and **Dense**. In most cases, the default would be the preferred option.

| Variant              | Description                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------- |
| Semantic colour chip | A background colour provides a semantic meaning: Positive, Warning, Negative, Information |
| Dense chip           | A special kind of chip with less height and padding.                                      |

### Semantic colour chip

#### Definition

This chip doesn’t use the default background colour. Instead, it has a semantic colour to reinforce the status or meaning.

#### The look

There are four semantic colours:
![Example of chips in 4 semantic colours](https://assets.ubuntu.com/v1/706255f6-3.png)

#### Usage

The semantic colours can reinforce the chip's status or meaning in its context. These colours, however, should never be used as a single source of information. For example:

![Example chips usage](https://assets.ubuntu.com/v1/e1166493-4.jpeg)

**Do not rely on colour alone to convey semantic meaning**, as this may not be enough for people with colour blindness. In the example above, the text explicitly states what each group of chips represents.

### Dense chip

#### Definition

A special kind of chip with less height and padding.

#### The look

![Dense chip](https://assets.ubuntu.com/v1/5efc5bae-5.png)

#### Usage

For special circumstances where height is limited, e.g. table rows.

## Questions to ask yourself before using this component

- Is the content not clickable? In that case, use a **Status label**.
- Is the context enough to understand the semantic meaning of a chip? If not, consider adding labels, headings or help text. Don’t rely exclusively on the semantic colour.
