---
collection: patterns
title: Card
---

There are two card styles available to use in Vanilla. 

A card will expand to fill the full width of its parent container.

All card styles, but in particular the highlighted card, should be used sparingly.

## Basic card

The purpose of the basic card is to display information, without user interaction.

<div class="p-card">
    <h3 class="p-card__title">Card</h3>
    <p class="p-card__content">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    <footer class="p-card__footer">
        Card action or summary
    </footer>
</div>

```html
<div class="p-card">
    <h3 class="p-card__title">Card</h3>
    <p class="p-card__content">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    <footer class="p-card__footer">
        Card action or summary
    </footer>
</div>
```

## Highlighted card

The highlighted card should be used when you can interact with the content.

<div class="p-card p-card--highlighted">
    <h3 class="p-card__title">Card (Highlighted)</h3>
    <p class="p-card__content">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    <footer class="p-card__footer">
        Card action or summary
    </footer>
</div>

```html
<div class="p-card--highlighted">
    <h3 class="p-card__title">Card (Highlighted)</h3>
    <p class="p-card__content">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    <footer class="p-card__footer">
        Card action or summary
    </footer>
</div>
```
