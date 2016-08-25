---
collection: layout
title: grid
---

The grid is constructing using `*-col` elements nested inside a single `.row` parent element.

```
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
    <div class="twelve-col pl__outline u-text-center">
        <div class="eight-col pl__outline">.eight-col</div>
        <div class="four-col last-col pl__outline">.four-col</div>
    </div>
    <div class="six-col pl__outline u-text-center">
        <div class="four-col pl__outline">.four-col</div>
        <div class="two-col last-col pl__outline">.two-col</div>
    </div>
    <div class="six-col last-col pl__outline u-text-center">
        <div class="three-col pl__outline">.three-col</div>
        <div class="three-col last-col pl__outline">.three-col</div>
    </div>
    <div class="eight-col pl__outline u-text-center">
        <div class="one-col pl__outline">.one-col</div>
        <div class="seven-col last-col pl__outline">.seven-col</div>
    </div>
    <div class="four-col pl__outline u-text-center last-col">
        <div class="two-col pl__outline">.two-col</div>
        <div class="two-col last-col pl__outline">.two-col</div>
    </div>
</div>
