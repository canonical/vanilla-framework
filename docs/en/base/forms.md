---
title: Forms
---

# Forms

Vanilla form controls have global styling defined at the HTML element level. Labels and most input types are set to 100% width of the ```<form>``` parent element.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/form"
    class="js-example">
    View example of a base form
</a>

## Input elements

### HTML5 elements

Vanilla supports all HTML5 input types: ```text```, ```password```, ```datetime```, ```datetime-local```, ```date```, ```month```, ```time```, ```week```, ```color```, ```number```, ```email```, ```url```, ```search``` and ```tel```.

<form>
    <label for="exampleTextInput">Label</label>
    <input type="text" id="exampleTextInput" placeholder="Placeholder text" />
</form>

```
<input type="text">
```

### Textarea

The ```<textarea>``` tag defines a multi-line text input control.

<form>
    <label for="textarea">Label</label>
    <textarea id="textarea" rows="3">Textarea</textarea>
</form>

```
<textarea rows="3">Textarea</textarea>
```

The attribute ```readonly``` disables the input but it still retains a default cursor.

<form>
    <label for="textarea2">Label</label>
    <textarea id="textarea2" rows="3" readonly="readonly">Read-only textarea</textarea>
</form>

```
<textarea rows="3" readonly>Textarea</textarea>
```


### Checkbox and radio button

Checkboxes and radio buttons are used for selecting one or multiple options, respectively.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/checkboxes"
    class="js-example">
    View example of the base checkboxes
</a>

<form>
    <input type="radio" name="RadioOptions" id="Radio1" value="option1">
    <label for="Radio1">Radio option 1</label>
    <input type="radio" name="RadioOptions" id="Radio2" value="option2">
    <label for="Radio2">Radio option 2</label>
    <input type="radio" name="RadioOptions" id="Radio4" value="option4" disabled="disabled">
    <label for="Radio4">Radio option 3 - disabled</label>
</form>

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/radio-buttons"
    class="js-example">
    View example of the base radio buttons
</a>

### Select

The ```<select>``` element is used to create a drop-down list.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/selects"
    class="js-example">
    View example of the base selects
</a>

You can use the ```multiple``` attribute  to create a multiple select control.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/select-multiple"
    class="js-example">
    View example of the base multiple selects
</a>

## Disabled state

Adding the ```[disabled="disabled"]``` attribute to an input will prevent user interaction. All disabled inputs have an opacity of ```0.5``` and ```not-allowed``` cursor on hover.

<form>
    <label for="disabled-input">Label</label>
    <input type="text" id="disabled-input" placeholder="Input is disabled" disabled="disabled">
</form>

## Feedback classes

Applying the classes ```.has-error```, ```.has-success``` or ```.has-warning``` to an input or label will style that element differently to provide visual feedback in case there is an error, success or warning notification related to the element.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/feedback"
    class="js-example">
    View example of the base form feedback
</a>

## Fieldset

You can use the ```<fieldset>``` element to divide the form into different logical sections.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/fieldset"
    class="js-example">
    View example of the base form fieldset
</a>

<hr />

Related:
* [Buttons pattern](https://docs.vanillaframework.io/patterns/buttons/)
