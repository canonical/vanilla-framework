---
collection: base
title: forms
---

Our form controls all receive global styling. All elements and labels are set to 100% width of the ```<form>``` parent element.

<form>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" id="exampleInputEmail1" placeholder="Email">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" id="exampleInputPassword1" placeholder="Password">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <input type="checkbox" id="CheckMe">
    <label for="CheckMe">Check me</label>
    <button type="submit" class="button">Submit</button>
</form>

```
<form>
    <label for="exampleInputEmail1">Email address</label>
    <input type="date" id="exampleInputEmail1" placeholder="Email">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" id="exampleInputPassword1" placeholder="Password">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <input type="checkbox" id="CheckMe">
    <label for="CheckMe">Check me out</label>
    <button type="submit" class="button">Submit</button>
</form>
```

## Styled form elements

### inputs

All common input styles are supported with in the framework. We support all HTML5 text input types; ```text```, ```password```, ```datetime```, ```datetime-local```, ```date```, ```month```, ```time```, ```week```, ```color```, ```number```, ```email```, ```url```, ```search``` &amp; ```tel```.

<form>
    <label for="exampleTextInput">Example input</label>
    <input type="text" id="exampleTextInput" placeholder="Example input" />
</form>

```
<input type="text">
```

### Textarea

The ```<textarea>``` tag defines a multi-line text input control.

<form>
    <label for"textarea">Example textarea</label>
    <textarea id="textarea" rows="3">Textarea...</textarea>
</form>

```
<textarea rows="3">Textarea</textarea>
```

Read only state attribute ```readonly```, disabled the input but retains a default cursor.

<form>
    <label for"textarea">Example readonly textarea</label>
    <textarea id="textarea" rows="3" readonly="readonly">Textarea...</textarea>
</form>

```
<textarea rows="3" readonly>Textarea</textarea>
```


### Checkboxes and radios

Checkboxes and radios are used for selecting one or multiple options

<form>
    <input type="checkbox" id="checkExample1">
    <label for="checkExample1">Checkbox example</label>
    <input type="checkbox" id="checkExample2" disabled="disabled">
    <label for="checkExample2">Checkbox example - disabled</label>
</form>

```
<input type="checkbox" id="checkExample1">
<label for="checkExample1">Checkbox example</label>

<input type="checkbox" id="checkExample2" disabled="disabled">
<label for="checkExample2">Checkbox example - disabled</label>
```

<form>
    <input type="radio" name="RadioOptions" id="Radio1" value="option1">
    <label for="Radio1">Radio example 1</label>
    <input type="radio" name="RadioOptions" id="Radio2" value="option2">
    <label for="Radio2">Radio example 2</label>
    <input type="radio" name="RadioOptions" id="Radio4" value="option4" disabled="disabled">
    <label for="Radio4">Radio example 3 - disabled</label>
</form>

```
<input type="radio" name="RadioOptions" id="Radio1" value="option1">
<label for="Radio1">Radio example 1</label>

<input type="radio" name="RadioOptions" id="Radio4" value="option4" disabled="disabled">
<label for="Radio4">Radio example 3 - disabled</label>
```

### Selects

The ```<select>``` element is used to create a drop-down list.

<form>
    <label for="exampleSelect">Example select</label>
    <select name="exampleSelect" id="exampleSelect">
        <option value="" disabled="disabled">Select...</option>
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
        <option value="3">Value 3</option>
    </select>
</form>

```
<select name="exampleSelect" id="exampleSelect">
    <option value="" disabled="disabled" selected>Select...</option>
    <option value="1">Value 1</option>
    <option value="2">Value 2</option>
    <option value="3">Value 3</option>
</select>
```

Modify using the ```multiple``` attribute on to create a multiple select controls

<form>
    <label for="exampleSelectMulti">Example multi select</label>
    <select name="exampleSelectMulti" id="exampleSelectMulti" multiple>
        <option value="" disabled="disabled">Select...</option>
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
        <option value="3">Value 3</option>
    </select>
</form>

```
<select name="exampleSelectMulti" id="exampleSelectMulti" multiple>
    <option value="" disabled="disabled">Select...</option>
    <option value="1">Value 1</option>
    <option value="2">Value 2</option>
    <option value="3">Value 3</option>
</select>
```

## Disabled state

Adding the ```[disabled="disabled"]``` attribute to an input will prevent user interactions. All disabled inputs will have an opacity of ```0.5``` and ```not-allowed``` cursor on hover.

<form>
    <label for="disabled-input">Disabled input</label>
    <input type="text" id="disabled-input" placeholder="Input is disabled" disabled="disabled">
</form>

## Feedback classes

Applying classes ```.has-error```, ```.has-success```, ```.has-warning``` on either the element or label will give form response to a user.

<form>
    <label class="has-success" for="inputSuccess">Input success</label>
    <input type="text" id="inputSuccess" class="has-success" placeholder="Input has-success class">
    <label class="has-error" for="inputError">Input error</label>
    <input type="text" id="inputError" class="has-error" placeholder="Input has-error class">
    <label class="has-warning" for="inputWarning">Input warning</label>
    <input type="text" id="inputWarning" class="has-warning" placeholder="Input has-warning class">
    <input type="checkbox" class="has-success">
    <label for="checkboxExampleSuccess" class="has-success">Checkbox with success</label>
    <input type="checkbox" class="has-error">
    <label for="checkboxExampleError" class="has-error">Checkbox with error</label>
    <input type="checkbox" class="has-warning">
    <label for="checkboxExampleWarning" class="has-warning">Checkbox with warning</label>
</form>

```
<label class="has-success" for="inputSuccess">Input success</label>
<input type="text" id="inputSuccess" class="has-success" placeholder="Input has-success class">

<label class="has-error" for="inputError">Input error</label>
<input type="text" id="inputError" class="has-error" placeholder="Input has-error class">

<label class="has-warning" for="inputWarning">Input warning</label>
<input type="text" id="inputWarning" class="has-warning" placeholder="Input has-warning class">

<input type="checkbox" class="has-success">
<label for="checkboxExampleSuccess" class="has-success">Checkbox with success</label>

<input type="checkbox" class="has-error">
<label for="checkboxExampleError" class="has-error">Checkbox with error</label>

<input type="checkbox" class="has-warning">
<label for="checkboxExampleWarning" class="has-warning">Checkbox with warning</label>
```

## Fieldset

The ```<fieldset>``` container applies a background and a ```8px``` padding around any form input.

<form>
    <fieldset>
        <label for="input-fieldset">Label</label>
        <input placeholder="Example input" id="input-fieldset" type="text">
    </fieldset>
</form>

```
<fieldset>
    <label for="input-fieldset">Label</label>
    <input placeholder="Example input" id="input-fieldset" type="text">
</fieldset>
```

<form>
    <fieldset>
        <label for="list-input-1">Label</label>
        <input placeholder="I'm an input text" id="list-input-1" type="text">
        <label for="list-input-2">Label</label>
        <input placeholder="I'm an input text" id="list-input-2" type="text">
        <label for="list-input-3">Label</label>
        <input placeholder="I'm an input text" id="list-input-3" type="text">
    </fieldset>
</form>

```
<fieldset>
    <label for="list-input-1">Label</label>
    <input placeholder="I'm an input text" id="list-input-1" type="text">
    <label for="list-input-2">Label</label>
    <input placeholder="I'm an input text" id="list-input-2" type="text">
    <label for="list-input-3">Label</label>
    <input placeholder="I'm an input text" id="list-input-3" type="text">
</fieldset>
```
