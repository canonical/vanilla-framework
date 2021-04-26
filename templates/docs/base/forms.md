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

Use the checkbox component to select one or more options. To provide fully featured Vanilla style and behaviour of the checkbox a specific markup structure is needed around the checkbox input (see example below).

To disable the checkbox component, add the `disabled` attribute to the respective `<input type='checkbox'>` element.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/checkbox/" class="js-example">
View example of the checkbox components
</a></div>

#### Inline checkbox

When placing the checkbox component in padded containers (table cells, some list items), use the `.p-checkbox--inline` variant. It ensures the checkbox and the label text are properly aligned with other inline text.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/checkbox-inline/" class="js-example">
View example of the inline checkbox components
</a></div>

#### Heading checkbox

To use checkbox component in headings use the `.p-checkbox--heading` variant of the component to make sure the checkbox and the label text are properly aligned.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/checkbox-heading/" class="js-example">
View example of the heading checkbox components
</a></div>

#### Indeterminate state checkbox

When a checkbox requires a state between checked and unchecked, `checkbox.indeterminate = true;` can be set via JavaScript, which will cause the checkbox appear in an "indeterminate" state.

In cases when JavaScript can't be used for that, set `aria-checked="mixed"` on checkbox to show "indeterminate" state. Please note that it will only change the visual look of the checkbox, it will not affect its state available to the browser via JavaScript.

<div class="embedded-example"><a href="/docs/examples/base/forms/checkbox-indeterminate/" class="js-example">
View example of the indeterminate checkbox component
</a></div>

#### Deprecated base checkboxes

<span class="p-label--deprecated">Deprecated</span>

The base element styling for checkbox inputs (`<input type="checkbox">`) outside of the `.p-checkbox` component is now deprecated and will be removed in a future version of Vanilla framework.

This applies also to all modifier classes on checkbox elements, such as `is-h1`, `is-h2`, `is-h3`, `is-h4`, `is-h5`, `is-muted-heading`, `is-muted-inline-heading`, `is-inline-label`, or `is-table-header`.

Please refer to the [tick elements comparison example](/docs/examples/patterns/forms/tick-comparison) to find equivalent usage of new `.p-checkbox` component.

### Radio button

Use radio buttons to select one of the given set of options. To provide fully featured Vanilla style and behaviour of the radio button a specific markup structure is needed around the radio button input (see example below).

To disable the radio component, add the `disabled` attribute to the respective `<input type='radio'>` element.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/radio/" class="js-example">
View example of the radio components
</a></div>

#### Inline radio button

When placing the radio component in padded containers (table cells, some list items), use the `.p-radio--inline` variant of the component to make sure the radio button and the label text are properly aligned with other inline text.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/radio-inline/" class="js-example">
View example of the inline radio components
</a></div>

#### Heading radio button

To use radio component in headings use the `.p-checkbox--heading` variant of the component to make sure the radio button and the label text are properly aligned.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/radio-heading/" class="js-example">
View example of the heading radio components
</a></div>

#### Deprecated base radio buttons

<span class="p-label--deprecated">Deprecated</span>

The base element styling for radio inputs (`<input type="radio">`) outside of the `.p-radio` component is now deprecated and will be removed in a future version of Vanilla framework.

This applies also to all modifier classes on checkbox elements, such as `is-h1`, `is-h2`, `is-h3`, `is-h4`, `is-h5`, `is-muted-heading`, `is-muted-inline-heading`, `is-inline-label`, or `is-table-header`.

Please refer to the [tick elements comparison example](/docs/examples/patterns/forms/tick-comparison) to find equivalent usage of new `.p-radio` component.

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

### React

You can use forms in React by installing our react-component library and importing `Form` and `Input` component.

[See the documentation for our React `Form` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/form--default-story#form)

[See the documentation for our React `Input` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/input--text-input#input)
