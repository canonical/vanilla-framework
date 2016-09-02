---
collection: layout
title: Grid
---

The grid is constructing using `*-col` elements nested inside a single `.row` parent element.

```html
<div class="row">
    <div class="six-col">.six-col</div>
    <div class="six-col">.six-col</div>
</div>
```

<div class="row">
    <div class="twelve-col">.twelve-col</div>
    <div class="eleven-col">.eleven-col</div>
    <div class="one-col last-col">&nbsp;</div>
    <div class="ten-col">.ten-col</div>
    <div class="two-col last-col">.two-col</div>
    <div class="nine-col">.nine-col</div>
    <div class="three-col last-col">.three-col</div>
    <div class="eight-col">.eight-col</div>
    <div class="four-col last-col">.four-col</div>
    <div class="seven-col">.seven-col</div>
    <div class="five-col last-col">.five-col</div>
    <div class="six-col">.six-col</div>
    <div class="six-col last-col">.six-col</div>
    <div class="four-col">.four-col</div>
    <div class="four-col">.four-col</div>
    <div class="four-col last-col">.four-col</div>
    <div class="three-col">.three-col</div>
    <div class="three-col">.three-col</div>
    <div class="three-col">.three-col</div>
    <div class="three-col last-col">.three-col</div>
    <div class="two-col">.two-col</div>
    <div class="eight-col">.eight-col</div>
    <div class="two-col last-col">.two-col</div>
    <div class="three-col">.three-col</div>
    <div class="six-col">.six-col</div>
    <div class="three-col last-col">.three-col</div>
</div>

<div class="row">
    <h2>Nested grid</h2>
    <p>You can nest grid elements as well.</p>
    <div class="twelve-col">
        <p>.twelve-col with an .eight-col and .four-col</p>
        <div class="eight-col">.eight-col</div>
        <div class="four-col last-col">.four-col</div>
    </div>
    <div class="six-col">
        <p>.six-col with a .four-col and .two-col</p>
        <div class="four-col">.four-col</div>
        <div class="two-col last-col">.two-col</div>
    </div>
    <div class="six-col last-col">
        <p>.six-col with a .three-col and .three-col</p>
        <div class="three-col">.three-col</div>
        <div class="three-col last-col">.three-col</div>
    </div>
    <div class="eight-col u-text-center">
        <p>.eight-col with a .one-col and .seven-col</p>
        <div class="one-col">.one-col</div>
        <div class="seven-col last-col">.seven-col</div>
    </div>
    <div class="four-col u-text-center last-col">
        <p>.four-col with a .two-col and .two-col</p>
        <div class="two-col">.two-col</div>
        <div class="two-col last-col">.two-col</div>
    </div>
</div>
