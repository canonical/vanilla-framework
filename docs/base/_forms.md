---
collection: base
title: Forms
---

Vanilla form controls have global styling defined at the HTML element level. Labels and most input types are set to 100% width of the ```<form>``` parent element.

<form>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" id="exampleInputEmail1" placeholder="Email">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" id="exampleInputPassword1" placeholder="Password">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <input type="checkbox" id="CheckMe">
    <label for="CheckMe">Check me</label>
    <button type="submit" class="p-button">Submit</button>
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
    <button type="submit" class="p-button">Submit</button>
</form>
```

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

Checkboxes and radio buttonss are used for selecting one or multiple options, respectively.

<form>
    <input type="checkbox" id="checkExample1">
    <label for="checkExample1">Checkbox option 1</label>
    <input type="checkbox" id="checkExample2" disabled="disabled">
    <label for="checkExample2">Checkbox option 2 - disabled</label>
</form>

```
<input type="checkbox" id="checkExample1">
<label for="checkExample1">Checkbox option 1</label>

<input type="checkbox" id="checkExample2" disabled="disabled">
<label for="checkExample2">Checkbox option 2 - disabled</label>
```

<form>
    <input type="radio" name="RadioOptions" id="Radio1" value="option1">
    <label for="Radio1">Radio option 1</label>
    <input type="radio" name="RadioOptions" id="Radio2" value="option2">
    <label for="Radio2">Radio option 2</label>
    <input type="radio" name="RadioOptions" id="Radio4" value="option4" disabled="disabled">
    <label for="Radio4">Radio option 3 - disabled</label>
</form>

```
<input type="radio" name="RadioOptions" id="Radio1" value="option1">
<label for="Radio1">Radio option 1</label>

<input type="radio" name="RadioOptions" id="Radio4" value="option4" disabled="disabled">
<label for="Radio4">Radio option 3 - disabled</label>
```

### Select

The ```<select>``` element is used to create a drop-down list.

<form>
    <label for="exampleSelect">Label</label>
    <select name="exampleSelect" id="exampleSelect">
        <option value="" disabled="disabled" selected>Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
</form>

```
<select name="exampleSelect" id="exampleSelect">
    <option value="" disabled="disabled" selected>Select an option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
```

You can use the ```multiple``` attribute  to create a multiple select control.

<form>
    <label for="exampleSelectMulti">Label</label>
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

Adding the ```[disabled="disabled"]``` attribute to an input will prevent user interaction. All disabled inputs have an opacity of ```0.5``` and ```not-allowed``` cursor on hover.

<form>
    <label for="disabled-input">Label</label>
    <input type="text" id="disabled-input" placeholder="Input is disabled" disabled="disabled">
</form>

## Feedback classes

Applying the classes ```.has-error```, ```.has-success``` or ```.has-warning``` to an input or label will style that element differently to provide visual feedback in case there is an error, success or warning notification related to the element.

<form>
    <label class="has-success" for="inputSuccess">Label success</label>
    <input type="text" id="inputSuccess" class="has-success" placeholder="Input has-success class">
    <label class="has-error" for="inputError">Label error</label>
    <input type="text" id="inputError" class="has-error" placeholder="Input has-error class">
    <label class="has-warning" for="inputWarning">Label warning</label>
    <input type="text" id="inputWarning" class="has-warning" placeholder="Input has-warning class">
    <input type="checkbox" id="checkboxExampleSuccess" class="has-success">
    <label for="checkboxExampleSuccess" class="has-success">Checkbox success</label>
    <input type="checkbox" id="checkboxExampleError" class="has-error">
    <label for="checkboxExampleError" class="has-error">Checkbox error</label>
    <input type="checkbox" id="checkboxExampleWarning" class="has-warning">
    <label for="checkboxExampleWarning" class="has-warning">Checkbox warning</label>
</form>

```
<label class="has-success" for="inputSuccess">Label success</label>
<input type="text" id="inputSuccess" class="has-success" placeholder="Input has-success class">

<label class="has-error" for="inputError">Label error</label>
<input type="text" id="inputError" class="has-error" placeholder="Input has-error class">

<label class="has-warning" for="inputWarning">Label warning</label>
<input type="text" id="inputWarning" class="has-warning" placeholder="Input has-warning class">

<input type="checkbox" class="has-success">
<label for="checkboxExampleSuccess" class="has-success">Checkbox success</label>

<input type="checkbox" class="has-error">
<label for="checkboxExampleError" class="has-error">Checkbox error</label>

<input type="checkbox" class="has-warning">
<label for="checkboxExampleWarning" class="has-warning">Checkbox warning</label>
```

## Fieldset

You can use the ```<fieldset>``` element to divide the form into different logical sections.

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
