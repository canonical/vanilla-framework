---
wrapper_template: '_layouts/docs.html'
context:
  title: Forms | Base elements
---

## Forms

<hr>

Form controls have global styling defined at the HTML element level.

Most labels and controls are 100% the width of the `<form>` parent element, unless you [specify inline layout](#inline).

<div class="embedded-example"><a href="/docs/examples/base/forms/form/" class="js-example">
View example of a base form
</a></div>

### Single-line text field

`<input type="text">` is a single-line text field.

<div class="embedded-example"><a href="/docs/examples/base/forms/input/" class="js-example">
View example of a single-line text field
</a></div>

Vanilla also styles HTML’s other single-line field types: `password`, `datetime`, `datetime-local`, `date`, `month`, `time`, `week`, `number`, `email`, `url`, `search` and `tel`. For the `search` type, see <a href="../patterns/search-box">Search box</a>.

### Multi-line text field

`<textarea>` is a multi-line text field.

<div class="embedded-example"><a href="/docs/examples/base/forms/textarea/" class="js-example">
View example of a textarea
</a></div>

Note: The attribute `readonly` disables the input but it still retains a default cursor.

### Checkbox

Use checkboxes to select one or more options, default checkboxes can appear in three states: selected, unselected and disabled.

<div class="embedded-example"><a href="/docs/examples/base/forms/checkboxes/" class="js-example">
View example of the base checkboxes
</a></div>

<span class="p-label--updated">Updated</span>

By default, checkboxes are vertically aligned to the baseline of text wrapped in a `label`, `h5`, `h6`, or `p` tag. If you need to align them to other elements, use one of the following classes:
`is-h1`, `is-h2`, `is-h3`, `is-h4`, `is-h5`, `is-muted-heading`, `is-muted-inline-heading`, `is-inline-label`, or `is-table-header`.

<div class="embedded-example"><a href="/docs/examples/base/forms/aligned-checkboxes/" class="js-example">
View example of checkboxes aligned to different headings
</a></div>

### Radio button

Use radio buttons to select one or more options, our radio buttons can appear in four states: both selected, unselected and disabled.

<div class="embedded-example"><a href="/docs/examples/base/forms/radio-buttons/" class="js-example">
View example of the base radio buttons
</a></div>

<span class="p-label--updated">Updated</span>

By default, radio buttons are vertically aligned to the baseline of text wrapped in a `label`, `h5`, `h6`, or `p` tag. If you need to align them to other elements, use one of the following classes:
`is-h1`, `is-h2`, `is-h3`, `is-h4`, `is-h5`, `is-muted-heading`, `is-muted-inline-heading`, `is-inline-label`, or `is-table-header`.

<div class="embedded-example"><a href="/docs/examples/base/forms/aligned-radio/" class="js-example">
View example of the aligned radio buttons
</a></div>

### Select

Use the `<select>` element to create a drop-down list.

<div class="embedded-example"><a href="/docs/examples/base/forms/selects/" class="js-example">
View example of the base selects
</a></div>

Use the `multiple` attribute to create a multiple select control.

<div class="embedded-example"><a href="/docs/examples/base/forms/select-multiple/" class="js-example">
View example of the base multiple selects
</a></div>

### Range

<span class="p-label--new">New</span>

The `<input type="range">` allows a user to select from a specified range of values, where the precise value is not considered important.

<div class="embedded-example"><a href="/docs/examples/base/forms/range/" class="js-example">
View example of the slider pattern
</a></div>

### Fieldset

You can use the `<fieldset>` element to divide the form into different logical sections.

<div class="embedded-example"><a href="/docs/examples/base/forms/fieldset/" class="js-example">
View example of the base form fieldset
</a></div>

### Inline

By applying the class `.p-form--inline` and wrapping any form control in `.p-form__group` you can change the layout style of any form to be inline.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/form-inline/" class="js-example">
View examples of form inline patterns
</a></div>

### Stacked

By applying the class `.p-form--stacked` and wrapping any form control in `.p-form__group` you can change the layout style of any form to be stacked.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/form-stacked/" class="js-example">
View examples of form stacked patterns
</a></div>

### Disabled

Adding the `disabled` attribute to an input will prevent user interaction.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>All disabled inputs have an opacity of `0.5` and `not-allowed` cursor on hover.
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/base/forms/disabled-input/" class="js-example">
View example of a disabled input
</a></div>

### Validation

To use form validation feedback - which includes feedback messages, icons and border colours - wrap individual input elements in a `p-form-validation` and additionally apply the `.is-error`, `.is-caution` or `.is-success` to the wrapper as appropriate.

If your form uses select elements then you will additionally need to wrap only the `<select>` element in a wrapper with the class `p-form-validation__select-wrapper` to mitigate some of the quirks of this specific HTML element across browsers.

Descriptive text relating to the element's validation status should use the class `p-form-validation__message`.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/form-validation/" class="js-example">
View example of form validation patterns
</a></div>

### Required

By applying the class `.is-required` the attribute specifies that an input field must be filled out before submitting the form.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/forms-required/" class="js-example">
View example of an input required element
</a></div>

### Dense form elements

In contexts where vertical space is limited, e.g. inside a table row, you might prefer form elements with reduced vertical padding. Add class `.is-dense` to achieve that:

<div class="embedded-example"><a href="/docs/examples/patterns/forms/dense/" class="js-example">
View example of the dense form elements
</a></div>

### Import

To import just this base element into your project, copy the snippet below and include it in your main Sass file.

<pre><code>@import 'patterns_forms';</code></pre>

To add form help text or validation into your project, copy either or both snippets below and include it in your main Sass file.

```scss
@import 'patterns_form-help-text';
```

```scss
@import 'patterns_form-validation';
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the forms design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Forms), which includes the specification in markdown format and a PNG image.
