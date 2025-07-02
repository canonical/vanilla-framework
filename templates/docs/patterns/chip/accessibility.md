---
wrapper_template: '_layouts/docs.html'
context:
  title: Chip | Components
---

## Considerations

### Color

Border colors need to satisfy 3:1 contrast against the lightest/darkest background color state for default chips.

Avoid semantic color variants on top of colored backgrounds.

### Alternative text

There should be an alternative text specified when the value (text) doesn't provide enough contextual information

- E.g. "status important" instead of the default "important" as the value of the chip

### Keyboard interactions

When pressing 'Enter' a default chip should perform the filtering action based on its value, the dismissible chip should revert the filtering behavior.

#### Focus behavior

When tabulating through chips the focus area should be the whole chip for the default chip, the dismissible area for the dismissible chip. Read-only chips should be skipped during tabulation.

## Reference

- [Accessibility guidelines](https://discourse.ubuntu.com/t/quick-accessibility-audit-for-designers/35120)
