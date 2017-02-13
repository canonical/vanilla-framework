---
title: Buttons
---

# Buttons

You can apply `button` classes on buttons and link elements.

**Note:** Avoid using more than two button styles together.

## Base button

A base button is usually used alongside a neutral button.

<div class="twelve-col">
    <p><button class="p-button--base">Base button</button></p>
    <p><button class="p-button--base" disabled>Base button disabled</button></p>
</div>

```html
<p><button class="p-button--base">Base button</button></p>
<p><button class="p-button--base" disabled>Base button disabled</button></p>
```

<div class="twelve-col">
    <p><a href="#" class="p-button--base">Base link</a></p>
    <p><a href="#" class="p-button--base is--disabled" aria-disabled="true">Base link disabled</a></p>
</div>

```html
<p><a href="#" class="p-button--base">Base link</a></p>
<p><a href="#" class="p-button--base is--disabled" aria-disabled="true">Base link button</a></p>
```

## Neutral button

A neutral button can be used to indicate a positive action that isn't necessarily the main call-to-action.

<div class="twelve-col">
    <p><button class="p-button--neutral">Neutral button</button></p>
    <p><button class="p-button--neutral" disabled>Neutral button disabled</button></p>
</div>

```html
<p><button class="p-button--neutral">Neutral button</button></p>
<p><button class="p-button--neutral" disabled>Neutral button disabled</button></p>
```

<div class="twelve-col">
    <p><a href="#" class="p-button--neutral">Neutral link</a></p>
    <p><a href="#" class="p-button--neutral is--disabled" aria-disabled="true">Neutral link disabled</a></p>
</div>

```html
<p><a href="#" class="p-button--neutral button">Neutral link</a></p>
<p><a href="#" class="p-button--neutral is--disabled" aria-disabled="true">Neutral link disabled</a></p>
```

## Positive button

<div class="twelve-col">
    <p><button class="p-button--positive">Positive button</button></p>
    <p><button class="p-button--positive" disabled>Positive button disabled</button></p>
</div>

```html
<p><button class="p-button--positive">Positive button</button></p>
<p><button class="p-button--positive" disabled>Positive button disabled</button></p>
```

<div class="twelve-col">
    <p><a href="#" class="p-button--positive">Positive link</a></p>
    <p><a href="#" class="p-button--positive is--disabled" aria-disabled="true">Positive link disabled</a></p>
</div>

```html
<p><a href="#" class="p-button--positive">Positive link</a></p>
<p><a href="#" class="p-button--positive is--disabled" aria-disabled="true">Positive link disabled</a></p>
```

## Negative button

<div class="twelve-col">
    <p><button class="p-button--negative">Negative button</button></p>
    <p><button class="p-button--negative" disabled>Negative button disabled</button></p>
</div>

```html
<p><button class="p-button--negative">Negative button</button></p>
<p><button class="p-button--negative" disabled>Negative button disabled</button></p>
```

<div class="twelve-col">
    <p><a href="#" class="p-button--negative">Negative link</a></p>
    <p><a href="#" class="p-button--negative is--disabled" aria-disabled="true">Negative link disabled</a></p>
</div>

```html
<p><a href="#" class="p-button--negative">Negative link</a></p>
<p><a href="#" class="p-button--negative is--disabled" aria-disabled="true">Negative link disabled</a></p>
```

## Brand button

You can use the brand button with the main color of your brand.

<div class="twelve-col">
    <p><button class="p-button--brand">Brand button</button></p>
    <p><button class="p-button--brand" disabled>Brand button disabled</button></p>
</div>

```html
<p><button class="p-button--brand">Brand button</button></p>
<p><button class="p-button--brand" disabled>Brand button disabled</button></p>
```

<div class="twelve-col">
    <p><a href="#" class="p-button--brand">Brand link</a></p>
    <p><a href="#" class="p-button--brand is--disabled" aria-disabled="true">Brand link disabled</a></p>
</div>

```html
<p><a href="#" class="p-button--brand">Brand link</a></p>
<p><a href="#" class="p-button--brand is--disabled" aria-disabled="true">Brand link disabled</a></p>
```
## Inline button

Should you wish to place a button after a line of inline text, as a CTA for example, you can do so by wrapping the text in a `<span>` and placing the button immediately after it.

<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
<button>Button</button>

```html
<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
<button>Button</button>
```
