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
    <div class="twelve-col pl__outline">.twelve-col</div>
    <div class="eleven-col pl__outline">.eleven-col</div>
    <div class="one-col last-col pl__outline">&nbsp;</div>
    <div class="ten-col pl__outline">.ten-col</div>
    <div class="two-col last-col pl__outline">.two-col</div>
    <div class="nine-col pl__outline">.nine-col</div>
    <div class="three-col last-col pl__outline">.three-col</div>
    <div class="eight-col pl__outline">.eight-col</div>
    <div class="four-col last-col pl__outline">.four-col</div>
    <div class="seven-col pl__outline">.seven-col</div>
    <div class="five-col last-col pl__outline">.five-col</div>
    <div class="six-col pl__outline">.six-col</div>
    <div class="six-col last-col pl__outline">.six-col</div>
    <div class="four-col pl__outline">.four-col</div>
    <div class="four-col pl__outline">.four-col</div>
    <div class="four-col last-col pl__outline">.four-col</div>
    <div class="three-col pl__outline">.three-col</div>
    <div class="three-col pl__outline">.three-col</div>
    <div class="three-col pl__outline">.three-col</div>
    <div class="three-col last-col pl__outline">.three-col</div>
    <div class="two-col pl__outline">.two-col</div>
    <div class="eight-col pl__outline">.eight-col</div>
    <div class="two-col last-col pl__outline">.two-col</div>
    <div class="three-col pl__outline">.three-col</div>
    <div class="six-col pl__outline">.six-col</div>
    <div class="three-col last-col pl__outline">.three-col</div>
</div>

<div class="row">
    <h2>Nested grid</h2>
    <p>You can nest grid elements as well.</p>
    <div class="twelve-col pl__outline">
        <p>.twelve-col with an .eight-col and .four-col</p>
        <div class="eight-col pl__outline">.eight-col</div>
        <div class="four-col last-col pl__outline">.four-col</div>
    </div>
    <div class="six-col pl__outline">
        <p>.six-col with a .four-col and .two-col</p>
        <div class="four-col pl__outline">.four-col</div>
        <div class="two-col last-col pl__outline">.two-col</div>
    </div>
    <div class="six-col last-col pl__outline">
        <p>.six-col with a .three-col and .three-col</p>
        <div class="three-col pl__outline">.three-col</div>
        <div class="three-col last-col pl__outline">.three-col</div>
    </div>
    <div class="eight-col pl__outline u-text-center">
        <p>.eight-col with a .one-col and .seven-col</p>
        <div class="one-col pl__outline">.one-col</div>
        <div class="seven-col last-col pl__outline">.seven-col</div>
    </div>
    <div class="four-col pl__outline u-text-center last-col">
        <p>.four-col with a .two-col and .two-col</p>
        <div class="two-col pl__outline">.two-col</div>
        <div class="two-col last-col pl__outline">.two-col</div>
    </div>
</div>
