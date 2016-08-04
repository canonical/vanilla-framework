---
collection: patterns
title: forms
---

<div class="row">
    <div class="twelve-col">
        <h2>Forms</h2>
    </div>
    <div class="six-col">
        <form action="/">
            <input placeholder="I'm an input text" type="text">
        </form>
    </div>
    <div class="four-col prepend-two last-col">Input</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <label for="information" class="has-information">Label information state</label>
            <input placeholder="I'm an input text" type="text" id="information" class="has-information">
        </form>
    </div>
    <div class="four-col prepend-two last-col">Input with information message</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <label for="success" class="has-success">Label success state</label>
            <input placeholder="I'm an input text" type="text" id="success" class="has-success">
        </form>
    </div>
    <div class="four-col prepend-two last-col">Input with success message</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <label for="warning" class="has-warning">Label warning state</label>
            <input placeholder="I'm an input text" type="text" id="warning" class="has-warning">
        </form>
    </div>
    <div class="four-col prepend-two last-col">Input with warning message</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <label for="error" class="has-error">Label error state</label>
            <input placeholder="I'm an input text" type="text" id="error" class="has-error">
        </form>
    </div>
    <div class="four-col prepend-two last-col">Input with error message</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <fieldset>
                <label for="input">Label</label>
                <input placeholder="I'm an input text" id="input" type="text">
            </fieldset>
        </form>
    </div>
    <div class="four-col prepend-two last-col">Input inside a fieldset</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <input placeholder="I'm an input number" type="number">
        </form>
    </div>
    <div class="four-col prepend-two last-col">Input number</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <input placeholder="I'm an input search" type="search">
        </form>
    </div>
    <div class="four-col prepend-two last-col">Input search</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <input placeholder="I'm an input password" type="password">
        </form>
    </div>
    <div class="four-col prepend-two last-col">Input password</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <input placeholder="I'm an input email" type="email">
        </form>
    </div>
    <div class="four-col prepend-two last-col">Input email</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <input placeholder="I'm an input telephone" type="tel">
        </form>
    </div>
    <div class="four-col prepend-two last-col">Input telephone</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <input disabled="disabled" placeholder="I'm a disabled input" type="text">
        </form>
    </div>
    <div class="four-col prepend-two last-col">Disabled input</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <input type="submit">
        </form>
    </div>
    <div class="four-col prepend-two last-col">Submit input</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <select name="test" id="test">
                <option value="test">I'm a select dropdown</option>
                <option value="test2">I'm a select dropdown</option>
                <option value="test3">I'm a select dropdown</option>
            </select>
        </form>
    </div>
    <div class="four-col prepend-two last-col">Select box</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <input type="checkbox" name="checkbox" id="1">
            <label for="1">I'm a checkbox</label>
        </form>
    </div>
    <div class="four-col prepend-two last-col">Checkbox</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <input type="checkbox" disabled="disabled" name="checkbox" id="2">
            <label for="2">I'm a checkbox</label>
        </form>
    </div>
    <div class="four-col prepend-two last-col">Checkbox disabled</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <input type="radio" name="radio" id="radio">
            <label for="radio">I'm a radio input</label>
        </form>
    </div>
    <div class="four-col prepend-two last-col">Radio</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form action="/">
            <input type="radio" name="radio" id="radio2" disabled="disabled">
            <label for="radio2">I'm a radio input</label>
        </form>
    </div>
    <div class="four-col prepend-two last-col">Radio disabled</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form>
            <textarea>Textarea...</textarea>
        </form>
    </div>
    <div class="four-col prepend-two last-col">Textarea</div>
</div>

<div class="row no-border">
    <div class="six-col">
        <form>
            <textarea readonly="readonly">Textarea...</textarea>
        </form>
    </div>
    <div class="four-col prepend-two last-col">Readonly textarea</div>
</div>

<div class="row">
    <div class="six-col">
        <form action="/">
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
    <div class="four-col prepend-two last-col">Form elements in a list</div>
</div>
