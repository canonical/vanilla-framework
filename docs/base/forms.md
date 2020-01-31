---
wrapper_template: '_layouts/default.html'
context:
  title: Forms
---

## Forms

<hr>

Form controls have global styling defined at the HTML element level. Labels and most input types are 100% width of the `<form>` parent element.

<a href="/examples/base/forms/form/" class="js-example">
View example of a base form
</a>

### Input

An input field where the user can enter data, which can vary in many ways, depending on the type attribute.

<a href="/examples/base/forms/input/" class="js-example">
View example of an input element
</a>

### HTML5

We support all HTML5 input types: `text`, `password`, `datetime`, `datetime-local`, `date`, `month`, `time`, `week`, `color`, `number`, `email`, `url`, `search` and `tel`.

### Textarea

The `<textarea>` tag defines a multi-line text input control.

<a href="/examples/base/forms/textarea/" class="js-example">
View example of an input element
</a>

Note: The attribute `readonly` disables the input but it still retains a default cursor.

### Checkbox

Use checkboxes to select one or more options, default checkboxes can appear in three states: selected, unselected and disabled.

<a href="/examples/base/forms/checkboxes/" class="js-example">
View example of the base checkboxes
</a>

<span class="p-label--updated">Updated</span>

By default, checkboxes are vertically aligned to the baseline of text wrapped in a `label`, `h5`, `h6`, or `p` tag. If you need to align them to other elements, use one of the following classes:
`is-h1`, `is-h2`, `is-h3`, `is-h4`, `is-h5`, `is-muted-heading`, `is-muted-inline-heading`, `is-inline-label`, or `is-table-header`.

<a href="/examples/base/forms/aligned-checkboxes/" class="js-example">
View example of checkboxes aligned to different headings
</a>

### Radio button

Use radio buttons to select one or more options, our radio buttons can appear in four states: both selected, unselected and disabled.

<a href="/examples/base/forms/radio-buttons/" class="js-example">
View example of the base radio buttons
</a>

<span class="p-label--updated">Updated</span>

By default, radio buttons are vertically aligned to the baseline of text wrapped in a `label`, `h5`, `h6`, or `p` tag. If you need to align them to other elements, use one of the following classes:
`is-h1`, `is-h2`, `is-h3`, `is-h4`, `is-h5`, `is-muted-heading`, `is-muted-inline-heading`, `is-inline-label`, or `is-table-header`.

<a href="/examples/base/forms/aligned-radio/" class="js-example">
View example of the aligned radio buttons
</a>

### Select

Use the `<select>` element to create a drop-down list.

<a href="/examples/base/forms/selects/" class="js-example">
View example of the base selects
</a>

Use the `multiple` attribute to create a multiple select control.

<a href="/examples/base/forms/select-multiple/" class="js-example">
View example of the base multiple selects
</a>

### Range

<span class="p-label--new">New</span>

The `<input type="range">` allows a user to select from a specified range of values, where the precise value is not considered important.

<a href="/examples/base/forms/range/" class="js-example">
View example of the slider pattern
</a>

### Fieldset

You can use the `<fieldset>` element to divide the form into different logical sections.

<a href="/examples/base/forms/fieldset/" class="js-example">
View example of the base form fieldset
</a>

### Inline

By applying the class `.p-form--inline` and wrapping any form control in `.p-form__group` you can change the layout style of any form to be inline.

<a href="/examples/patterns/forms/form-inline/" class="js-example">
View examples of form inline patterns
</a>

### Stacked

By applying the class `.p-form--stacked` and wrapping any form control in `.p-form__group` you can change the layout style of any form to be stacked.

<a href="/examples/patterns/forms/form-stacked/" class="js-example">
View examples of form stacked patterns
</a>

### Disabled

Adding the `disabled` attribute to an input will prevent user interaction.

<div class="p-notification--information">
  <p class="p-notification__response">
    <span class="p-notification__status">Note:</span>All disabled inputs have an opacity of `0.5` and `not-allowed` cursor on hover.
  </p>
</div>

<a href="/examples/base/forms/disabled-input/" class="js-example">
View example of a disabled input
</a>

### Validation

To use form validation feedback - which includes feedback messages, icons and border colours - wrap individual input elements in a `p-form-validation` and additionally apply the `.is-error`, `.is-caution` or `.is-success` to the wrapper as appropriate.

If your form uses select elements then you will additionally need to wrap only the `<select>` element in a wrapper with the class `p-form-validation__select-wrapper` to mitigate some of the quirks of this specific HTML element across browsers.

Descriptive text relating to the element's validation status should use the class `p-form-validation__message`.

<a href="/examples/patterns/forms/form-validation/" class="js-example">
View example of form validation patterns
</a>

### Required

By applying the class `.is-required` the attribute specifies that an input field must be filled out before submitting the form.

<a href="/examples/patterns/forms/forms-required/" class="js-example">
View example of an input required element
</a>

### Dense form elements

In contexts where vertical space is limited, e.g. inside a table row, you might prefer form elements with reduced vertical padding. Add class `.is-dense` to achieve that:

<a href="/examples/patterns/forms/dense/" class="js-example">
View example of the dense form elements
</a>

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

For more information see [Customising Vanilla](/customising-vanilla/) in your projects, which includes overrides and importing instructions.

### Design

For more information [view the forms design spec](https://github.com/ubuntudesign/vanilla-design/tree/master/Forms), which includes the specification in markdown format and a PNG image.
