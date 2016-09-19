---
collection: utilities
title: Equal height
---

To ensure two or more elements have an equal height regardless of their content, add the class `.u-equal-height` to their wrapping parent element.

<div class="u-equal-height theme__outline">
    <div class="u-equal-height__item theme__outline--inner">
        <p>This is a long paragraph of text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at elit augue. Maecenas eleifend varius leo id facilisis. Nunc sit amet hendrerit nisl. Fusce posuere bibendum mi dignissim venenatis. Ut ornare quis velit ac lobortis. Vestibulum faucibus tortor hendrerit viverra. Maecenas in molestie sapien.</p>
    </div>
    <div class="u-equal-height__item theme__outline--inner">
        <p>Short piece of text</p>
    </div>
</div>

```html
<div class="u-equal-height">
    <div class="col-8">
        <p>This is a long paragraph of text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at elit augue. Maecenas eleifend varius leo id facilisis. Nunc sit amet hendrerit nisl. Fusce posuere bibendum mi dignissim venenatis. Ut ornare quis velit ac lobortis. Vestibulum faucibus tortor hendrerit viverra. Maecenas in molestie sapien.</p>
    </div>
    <div class="col-4">
        <p>This is a short piece of text</p>
    </div>
</div>
```
