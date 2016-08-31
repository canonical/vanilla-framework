---
collection: base
title: forms
---

Our form controls all receive global styling. All elements and labels are set to 100% width of the ```<form>``` parent element. Wrapping all form elements in a list ```<ul>``` for optium verticle spacing between form elements.

### Example

<div class="twelve-col">
    <form>
        <ul>
            <li>
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" id="exampleInputEmail1" placeholder="Email">
            </li>
            <li>
                <label for="exampleInputPassword1">Password</label>
                <input type="password" id="exampleInputPassword1" placeholder="Password">
            </li>
            <li>
                <label for="exampleSelect">Choose</label>
                <select name="exampleSelect" id="exampleSelect">
                    <option value="" disabled="disabled">Select...</option>
                    <option value="1">Value 1</option>
                    <option value="2">Value 2</option>
                    <option value="3">Value 3</option>
                </select>
            </li>
            <li>
                <label for"textarea">Message</label>
                <textarea id="textarea">Message...</textarea>
            </li>
            <li>
                <label for="exampleInputFile">File input</label>
                <input type="file" id="exampleInputFile">
            </li>
            <li>
                <input type="checkbox" id="CheckMe">
                <label for="CheckMe">Check me out</label>
            </li>
            <li>
                <input type="radio" name="RadioOptions" id="Radio1" value="option1">
                <label for="Radio1">Radio 1</label>
            </li>
            <li>
                <input type="radio" name="RadioOptions" id="Radio2" value="option2">
                <label for="Radio2">Radio 2</label>
            </li>
            <li>
                <input type="radio" name="RadioOptions" id="Radio4" value="option4">
                <label for="Radio4">Radio 4</label>
            </li>
            <li>
                <input type="radio" name="RadioOptions" id="Radio6" value="option6">
                <label for="Radio6">Radio 6</label>
            </li>
        </ul>
        <button type="submit" class="button--primary button--inline">Submit</button>
    </form>
</div>

```
<form>
    <ul>
        <li>
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" id="exampleInputEmail1" placeholder="Email">
        </li>
        <li>
            <label for="exampleInputPassword1">Password</label>
            <input type="password" id="exampleInputPassword1" placeholder="Password">
        </li>
        <li>
            <label for="exampleSelect">Choose</label>
            <select name="exampleSelect" id="exampleSelect">
                <option value="" disabled="disabled">Select...</option>
                <option value="1">Value 1</option>
                <option value="2">Value 2</option>
                <option value="3">Value 3</option>
            </select>
        </li>
        <li>
            <label for"textarea">Message</label>
            <textarea id="textarea">Message...</textarea>
        </li>
        <li>
            <label for="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile">
        </li>
        <li>
            <input type="checkbox" id="CheckMe">
            <label for="CheckMe">Check me out</label>
        </li>
        <li>
            <input type="radio" name="RadioOptions" id="Radio1" value="option1">
            <label for="Radio1">Radio 1</label>
        </li>
        <li>
            <input type="radio" name="RadioOptions" id="Radio2" value="option2">
            <label for="Radio2">Radio 2</label>
        </li>
        <li>
            <input type="radio" name="RadioOptions" id="Radio4" value="option4">
            <label for="Radio4">Radio 4</label>
        </li>
        <li>
            <input type="radio" name="RadioOptions" id="Radio6" value="option6">
            <label for="Radio6">Radio 6</label>
        </li>
    </ul>
    <button type="submit" class="button--primary button--inline">Submit</button>
</form>
```

## Feedback states

Applying classes ```.has-error```, ```.has-success```, ```.has-warning``` on either the element or label will give form response to a user.

### Example

<div class="twelve-col">
    <form>
        <ul>
            <li>
                <label class="has-error" for="has-error">Label error state</label>
                <input type="text" id="has-error" class="has-error" placeholder="Input has-error class">
            </li>
            <li>
                <label class="has-success" for="has-success">Label success state</label>
                <input type="text" id="has-success" class="has-success" placeholder="Input has-success class">
            </li>
            <li>
                <label class="has-warning" for="has-warning">Label warning state</label>
                <input type="text" id="has-warning" class="has-warning" placeholder="Input has-warning class">
            </li>
        </ul>
    </form>
</div>

## Disabled state

Adding the ```[disabled="disabled"]``` attribute to an input will prevent user interactions. All disabled inputs will have an opacity of ```0.5``` and ```not-allowed``` cursor on hover.

### Example

<div class="twelve-col">
    <form>
        <ul>
            <li>
                <label for="disabled-input">Disabled input</label>
                <input type="text" id="disabled-input" placeholder="Input is disabled" disabled="disabled">
            </li>
        </ul>
    </form>
</div>

## Fieldset

The ```<fieldset>``` container applies a background and a ```8px``` padding around any form input.

### Example

<div class="twelve-col">
    <form>
        <fieldset>
            <label for="input-fieldset">Label</label>
            <input placeholder="Example input" id="input-fieldset" type="text">
        </fieldset>
    </form>
</div>

## Fielset form list

### Example

<div class="twelve-col">
    <form>
        <fieldset>
            <ul>
                <li>
                    <label for="list-input-1">Label</label>
                    <input placeholder="I'm an input text" id="list-input-1" type="text">
                </li>
                <li>
                    <label for="list-input-2">Label</label>
                    <input placeholder="I'm an input text" id="list-input-2" type="text">
                </li>
                <li>
                    <label for="list-input-3">Label</label>
                    <input placeholder="I'm an input text" id="list-input-3" type="text">
                </li>
            </ul>
        </fieldset>
    </form>
</div>
