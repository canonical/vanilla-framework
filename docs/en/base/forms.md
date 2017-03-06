---
title: Forms
---

# Forms

Vanilla form controls have global styling defined at the HTML element level. Labels and most input types are 100% width of the ```<form>``` parent element.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/form/"
    class="js-example">
    View example of a base form
</a>

## Input elements

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/input/"
    class="js-example">
    View example of an input element
</a>

### HTML5 elements

Vanilla supports all HTML5 input types: ```text```, ```password```, ```datetime```, ```datetime-local```, ```date```, ```month```, ```time```, ```week```, ```color```, ```number```, ```email```, ```url```, ```search``` and ```tel```.

### Textarea

The ```<textarea>``` tag defines a multi-line text input control.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/textarea/"
    class="js-example">
    View example of an input element
</a>

Note: The attribute ```readonly``` disables the input but it still retains a default cursor.

### Checkbox and radio button

Use checkboxes and radio buttons to select one or more options.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/checkboxes/"
    class="js-example">
    View example of the base checkboxes
</a>

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/radio-buttons/"
    class="js-example">
    View example of the base radio buttons
</a>

### Select

Use the ```<select>``` element to create a drop-down list.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/selects/"
    class="js-example">
    View example of the base selects
</a>

Use the ```multiple``` attribute to create a multiple select control.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/select-multiple/"
    class="js-example">
    View example of the base multiple selects
</a>

## Disabled state

Adding the ```[disabled="disabled"]``` attribute to an input will prevent user interaction. All disabled inputs have an opacity of ```0.5``` and ```not-allowed``` cursor on hover.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/disabled-input/"
    class="js-example">
    View example of a disabled input
</a>  

## Feedback classes

Applying the classes ```.has-error```, ```.has-success``` or ```.has-warning``` to an input or label will style that element differently to provide visual feedback in case there is an error, success or warning notification related to the element.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/feedback/"
    class="js-example">
    View example of the base form feedback
</a>

## Fieldset

You can use the ```<fieldset>``` element to divide the form into different logical sections.

<a href="https://vanilla-framework.github.io/vanilla-framework/examples/base/forms/fieldset/"
    class="js-example">
    View example of the base form fieldset
</a>

<hr />

Related:
* [Buttons pattern](/en/patterns/buttons/)
