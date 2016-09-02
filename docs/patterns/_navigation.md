---
collection: patterns
title: Navigation
---

```html
<header class="p-navigation" role="banner">
    <div class="p-navigation__logo">
        <a class="p-navigation__link" href="#">
            VF
        </a>
    </div>
    <nav id="main-navigation" class="p-navigation__nav" role="navigation">
        <span class="u-off-screen">
            <a href="#main-content">Jump to main content</a>
        </span>
        <div class="p-navigation__links">
            <a class="p-navigation__link" href="#">Link1</a>
            <a class="p-navigation__link" href="#">Link2</a>
            <a class="p-navigation__link" href="#">Link3</a>
            <a class="p-navigation__link" href="#">Link4</a>
        </div>
    </nav>
</header>
```

<header id="navigation" class="p-navigation" role="banner">
    <div class="p-navigation__logo">
        <a class="p-navigation__link" href="#">
            VF
        </a>
    </div>
    <a href="#navigation" class="p-navigation__toggle--open">Menu</a>
    <a href="#navigation-closed" class="p-navigation__toggle--close">Close</a>
    <nav class="p-navigation__nav" role="navigation">
        <span class="u-off-screen">
            <a href="#main-content">Jump to main content</a>
        </span>
        <div class="p-navigation__links">
            <a class="p-navigation__link" href="#">Link1</a>
            <a class="p-navigation__link" href="#">Link2</a>
            <a class="p-navigation__link" href="#">Link3</a>
            <a class="p-navigation__link" href="#">Link4</a>
        </div>
    </nav>
</header>
