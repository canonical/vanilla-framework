---
collection: layout
title: Grid
---

The grid is constructing using `*-col` elements nested inside a single `.row` parent element.

```html
<div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
</div>
```

<div class="row">
    <div class="col-12">.col-12</div>
    <div class="col-11">.col-11</div>
    <div class="col-1 last-col">&nbsp;</div>
    <div class="col-10">.col-10</div>
    <div class="two-col last-col">.two-col</div>
    <div class="col-9">.col-9</div>
    <div class="col-3 last-col">.col-3</div>
    <div class="col-8">.col-8</div>
    <div class="col-4 last-col">.col-4</div>
    <div class="col-7">.col-7</div>
    <div class="col-5 last-col">.col-5</div>
    <div class="col-6">.col-6</div>
    <div class="col-6 last-col">.col-6</div>
    <div class="col-4">.col-4</div>
    <div class="col-4">.col-4</div>
    <div class="col-4 last-col">.col-4</div>
    <div class="col-3">.col-3</div>
    <div class="col-3">.col-3</div>
    <div class="col-3">.col-3</div>
    <div class="col-3 last-col">.col-3</div>
    <div class="two-col">.two-col</div>
    <div class="col-8">.col-8</div>
    <div class="two-col last-col">.two-col</div>
    <div class="col-3">.col-3</div>
    <div class="col-6">.col-6</div>
    <div class="col-3 last-col">.col-3</div>
</div>

<div class="row">
    <h2>Nested grid</h2>
    <p>You can nest grid elements as well.</p>
    <div class="col-12">
        <p>.col-12 with an .col-8 and .col-4</p>
        <div class="col-8">.col-8</div>
        <div class="col-4 last-col">.col-4</div>
    </div>
    <div class="col-6">
        <p>.col-6 with a .col-4 and .two-col</p>
        <div class="col-4">.col-4</div>
        <div class="two-col last-col">.two-col</div>
    </div>
    <div class="col-6 last-col">
        <p>.col-6 with a .col-3 and .col-3</p>
        <div class="col-3">.col-3</div>
        <div class="col-3 last-col">.col-3</div>
    </div>
    <div class="col-8 u-text-center">
        <p>.col-8 with a .col-1 and .col-7</p>
        <div class="col-1">.col-1</div>
        <div class="col-7 last-col">.col-7</div>
    </div>
    <div class="col-4 u-text-center last-col">
        <p>.col-4 with a .two-col and .two-col</p>
        <div class="two-col">.two-col</div>
        <div class="two-col last-col">.two-col</div>
    </div>
</div>
