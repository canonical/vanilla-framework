---
wrapper_template: '_layouts/docs.html'
context:
  title: Forms | Base elements
---

Form controls have global styling defined at the HTML element level.

Most labels and controls are 100% the width of the `<form>` parent element, unless you [specify inline layout](#inline).

<div class="embedded-example"><a href="/docs/examples/base/forms/form/" class="js-example">
View example of a base form
</a></div>

## Single-line text field

`<input type="text">` is a single-line text field.

<div class="embedded-example"><a href="/docs/examples/base/forms/input/" class="js-example">
View example of a single-line text field
</a></div>

Vanilla also styles HTML’s other single-line field types: `password`, `datetime`, `datetime-local`, `date`, `month`, `time`, `week`, `number`, `email`, `url`, `search` and `tel`. For the `search` type, see <a href="../patterns/search-box">Search box</a>.

## Multi-line text field

`<textarea>` is a multi-line text field.

<div class="embedded-example"><a href="/docs/examples/base/forms/textarea/" class="js-example">
View example of a textarea
</a></div>

Note: The attribute `readonly` disables the input but it still retains a default cursor.

## Checkbox

Use the checkbox component to select one or more options. To provide fully featured Vanilla style and behaviour of the checkbox a specific markup structure is needed around the checkbox input (see example below).

To disable the checkbox component, add the `disabled` attribute to the respective `<input type='checkbox'>` element.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/checkbox/" class="js-example">
View example of the checkbox components
</a></div>

### Inline checkbox

When placing the checkbox component in padded containers (table cells, some list items), use the `.p-checkbox--inline` variant. It ensures the checkbox and the label text are properly aligned with other inline text.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/checkbox-inline/" class="js-example">
View example of the inline checkbox components
</a></div>

### Heading checkbox

To use checkbox component in headings use the `.p-checkbox--heading` variant of the component to make sure the checkbox and the label text are properly aligned.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/checkbox-heading/" class="js-example">
View example of the heading checkbox components
</a></div>

### Indeterminate state checkbox

When a checkbox requires a state between checked and unchecked, `checkbox.indeterminate = true;` can be set via JavaScript, which will cause the checkbox appear in an "indeterminate" state.

In cases when JavaScript can't be used for that, set `aria-checked="mixed"` on checkbox to show "indeterminate" state. Please note that it will only change the visual look of the checkbox, it will not affect its state available to the browser via JavaScript.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/checkbox-indeterminate/" class="js-example">
View example of the indeterminate checkbox component
</a></div>

## Radio button

Use radio buttons to select one of the given set of options. To provide fully featured Vanilla style and behaviour of the radio button a specific markup structure is needed around the radio button input (see example below).

To disable the radio component, add the `disabled` attribute to the respective `<input type='radio'>` element.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/radio/" class="js-example">
View example of the radio components
</a></div>

### Inline radio button

When placing the radio component in padded containers (table cells, some list items), use the `.p-radio--inline` variant of the component to make sure the radio button and the label text are properly aligned with other inline text.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/radio-inline/" class="js-example">
View example of the inline radio components
</a></div>

### Heading radio button

To use radio component in headings use the `.p-checkbox--heading` variant of the component to make sure the radio button and the label text are properly aligned.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/radio-heading/" class="js-example">
View example of the heading radio components
</a></div>

## Select

Use the `<select>` element to create a drop-down list.

<div class="embedded-example"><a href="/docs/examples/base/forms/selects/" class="js-example">
View example of the base selects
</a></div>

Use the `multiple` attribute to create a multiple select control.

<div class="embedded-example"><a href="/docs/examples/base/forms/select-multiple/" class="js-example">
View example of the base multiple selects
</a></div>

## Datalist

Use the `<datalist>` element to create drop-down list with text input.

<div class="embedded-example"><a href="/docs/examples/base/forms/datalist/" class="js-example">
View example of the base datalist
</a></div>

## Range

The `<input type="range">` allows a user to select from a specified range of values, where the precise value is not considered important.

<div class="embedded-example"><a href="/docs/examples/base/forms/range/" class="js-example">
View example of the slider pattern
</a></div>

## Fieldset

You can use the `<fieldset>` element to divide the form into different logical sections.

<div class="embedded-example"><a href="/docs/examples/base/forms/fieldset/" class="js-example">
View example of the base form fieldset
</a></div>

You can add `is-required` to `<legend>` to indicate required fields.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/fieldset-required/" class="js-example">
  View example of fieldset required fields
</a></div>

## Inline

By applying the class `.p-form--inline` and wrapping any form control in `.p-form__group` you can change the layout style of any form to be inline.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/form-inline/" class="js-example">
View examples of form inline patterns
</a></div>

## Stacked

By applying the class `.p-form--stacked` and wrapping any form control in `.p-form__group` you can change the layout style of any form to be stacked.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/form-stacked/" class="js-example">
View examples of form stacked patterns
</a></div>

## Disabled

Adding the `disabled` attribute to an input will prevent user interaction.

<div class="p-notification--information">
  <p class="p-notification__content">
    <span class="p-notification__title">Note:</span>
    <span class="p-notification__message">All disabled inputs have an opacity of <code>0.5</code> and <code>not-allowed</code> cursor on hover.</span>
  </p>
</div>

<div class="embedded-example"><a href="/docs/examples/base/forms/disabled-input/" class="js-example">
View example of a disabled input
</a></div>

## Help text

Supplementary help text can be provided for the form fields by adding an element with `.p-form-help-text` class name. If the help text follows a checkbox or radio button use an additional `is-tick-element` class name to align help text with the label.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/form-help-text/" class="js-example">
View example of a form fields with help text
</a></div>

### Dense help text {{ status('updated') }}

To use help text with a [dense input element](#dense-form-elements), add `.is-dense` to the `.p-form-validation__input` element.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/form-help-text-dense" class="js-example">
View example of a form fields with dense help text
</a></div>

## Validation

To use form validation feedback - which includes feedback messages, icons and border colours - wrap individual input elements in a `p-form-validation` and additionally apply the `.is-error`, `.is-caution` or `.is-success` to the wrapper as appropriate.

If your form uses select elements then you will additionally need to wrap only the `<select>` element in a wrapper with the class `p-form-validation__select-wrapper` to mitigate some of the quirks of this specific HTML element across browsers.

Descriptive text relating to the element's validation status should use the class `p-form-validation__message`.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/form-validation/" class="js-example">
View example of form validation patterns
</a></div>

### Dense form validation select wrapper {{ status('updated') }}

To create a [dense input](#dense-form-elements) inside a `p-form-validation__select-wrapper`, add the `.is-dense` class to the select wrapper, not the input.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/form-validation-select-wrapper-dense" class="js-example">
View example of form validation patterns
</a></div>

## Required

Apply the class `.is-required` to mandatory input fields. You should also add a legend to the form to be explicit about the meaning of the asterisk.

<div class="embedded-example"><a href="/docs/examples/patterns/forms/forms-required/" class="js-example">
View example of an input required element
</a></div>

## Dense form elements

In contexts where vertical space is limited, e.g. inside a table row, you might prefer form elements with reduced vertical padding. Add class `.is-dense` to achieve that:

<div class="embedded-example"><a href="/docs/examples/patterns/forms/dense/" class="js-example">
View example of the dense form elements
</a></div>

## Password toggle

When using a password field, use this pattern to allow the user to toggle the password visibility.

<div class="p-notification--information is-inline">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Note:</h5>
    <p class="p-notification__message">Do not use this pattern in inline forms</p>
  </div>
</div>

<div class="embedded-example"><a href="/docs/examples/patterns/forms/password-toggle/" class="js-example">
View example of the password toggle
</a></div>

## Dark theme

By default, the form elements are displayed in the light theme. To display them in the dark theme, add the class `.is-dark` to the input elements.

View example of [dark form validation](/docs/examples/patterns/forms/form-validation?theme=dark).

## Accessibility

Validated form input elements should indicate errors with `aria-invalid` attribute.

See [WCAG Success Criterion 3.3.1 - Using Aria-Invalid to Indicate An Error Field](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA21) for further information.

## Import

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

## React

You can use forms in React by installing our react-component library and importing `Form`, `Input`, `PasswordToggle`, `Textarea`, `CheckboxInput`, `RadioInput`, `Select` and `MultiSelect` components.

[See the documentation for our React `Form` component](https://canonical.github.io/react-components/?path=/docs/components-form--docs)

[See the documentation for our React `Input` component](https://canonical.github.io/react-components/?path=/docs/components-input--docs)

[See the documentation for our React `PasswordToggle` component](https://canonical.github.io/react-components/?path=/docs/components-passwordtoggle--docs)

[See the documentation for our React `Textarea` component](https://canonical.github.io/react-components/?path=/docs/components-textarea--docs)

[See the documentation for our React `CheckboxInput` component](https://canonical.github.io/react-components/?path=/docs/components-checkboxinput--docs)

[See the documentation for our React `RadioInput` component](https://canonical.github.io/react-components/?path=/docs/components-radioinput--docs)

[See the documentation for our React `Select` component](https://canonical.github.io/react-components/?path=/docs/components-select--docs)

[See the documentation for our React `MultiSelect` component](https://canonical.github.io/react-components/?path=/docs/components-multiselect--docs)
