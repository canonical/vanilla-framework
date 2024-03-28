---
wrapper_template: '_layouts/docs.html'
context:
  title: Badge | Components
---

## Overview

A **badge** is a visual indicator for, and only for, numeric values.

To remove inconsistencies between various Vanilla components used for similar purposes, we decided to redefine some components:

- The [Status label](/docs/patterns/status-labels) component (previously known as "label") is meant for static, non-interactive visual indicators.
- The [Chip](/docs/patterns/chip) component takes the place of the old labels, with a rework and new styles, and is always interactive.
- The [Badge](/docs/patterns/badge) component is included for the simple, numeric labels. It will be static and not interactive. That component is the target of this documentation page.

## Anatomy

![Anatomy of badge component](https://assets.ubuntu.com/v1/d7c43827-4.png)

Variant A: Undefined large number

Variant B: Rounded large number

The Badge is a rectangle with full rounded borders. There will never be more than **4 characters** inside it.

There are three statuses:

1. Default
2. Hover
3. Active

As we said, this component is not interactive. The **hover** and **active** status of this component exist only for situations where the badge is used inside another component. If the parent component has a hover state, the state of the badge will change accordingly.

## Usage

### When to use

When a numeric value has to be shown and highlighted, for instance:

1. New items (notifications, messages, etc.)
2. Updated items (models, machines, subscriptions, etc.)

### When not to use

1. Never use this component to highlight any non-numeric value.
   We will use the [Status label](/docs/patterns/status-labels) for this kind of scenario.

2. Don’t use this component if any kind of interaction is necessary. Badges are static and not interactive.

3. Avoid this component if rounded values are not acceptable. In cases where the exact value is necessary even for large numbers, the badge won’t provide enough information. Consider any other acceptable kind of text form.

## Variants

Since there will never be more than 4 characters in our badge, we need to make a decision on how to show large numbers, i.e. **values larger than 999**. Depending on the nature of the value, it might be enough to know that there are more than 999 items. In some scenarios, though, a rounded approximation to the real value could be necessary. There are, therefore, two variants of this component:

| Variant                | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| Undefined large number | Values over 999 are shown as **999+**                   |
| Rounded large number   | Values over 999 are rounded, e.g. 1.8k, 19k, 5.9M, etc. |

### Undefined large number

When the amount of items is only relevant for small values, this one is the variant that should be used. When the value grows further than 999, the badge will simply show **999+**.

![Badge with undefined large number 999+](https://assets.ubuntu.com/v1/2e3d33c3-6.png)

This is the default variant and it should be used in most cases. Relevant large numbers are probably too important to be inside a badge.

### Rounded large number

When the value of the badge represents a type of information where differences between large amounts of items are relevant, this variant will provide a better experience. It will include a decimal unit prefix and round the value. Since there is a limit of 4 characters, there are two rules regarding the prefix and the decimals:

1. Prefixes: always the largest possible decimal prefix.
   E.g. 2,500.000 should be 2.5M, not 2500k.
2. Decimals: the rounding should only show one decimal number when the prefixed, simplified value has just one character, i.e. more than 1k but less than 10k; more than 1M but less than 10M; etc.

- 1.790 → **1.8k** (between 1k and 10k)
- 18.900 → 19k
- 250.127 → 250k
- 5,950.322 → **5.9M** (between 1M and 10M)
- 52,433.950 → 52M

![Badges with rounded large numbers](https://assets.ubuntu.com/v1/9377888a-7.png)
