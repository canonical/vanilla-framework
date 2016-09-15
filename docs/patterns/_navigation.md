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
    <a href="#navigation" class="p-navigation__toggle--open" title="menu">&#9776;</a>
    <a href="#navigation-closed" class="p-navigation__toggle--close" title="close menu">&#9776;</a>
    <nav id="main-navigation" class="p-navigation__nav">
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
    <a href="#navigation" class="p-navigation__toggle--open" title="menu">&#9776;</a>
    <a href="#navigation-closed" class="p-navigation__toggle--close" title="close menu">&#9776;</a>
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

```html
<header class="p-navigation" role="banner">
    <div class="p-navigation__logo">
        <a class="p-navigation__link" href="#">
            VF
        </a>
    </div>
    <nav class="p-navigation__nav" role="navigation">
        <span class="u-off-screen">
            <a href="#main-content">Jump to main content</a>
        </span>
        <ul class="p-navigation__links">
            <li class="p-navigation__link"><a href="#">Link1</a></li>
            <li class="p-navigation__link"><a href="#">Link2</a></li>
            <li class="p-navigation__link"><a href="#">Link3</a></li>
            <li class="p-navigation__link"><a href="#">Link4</a></li>
        </ul>
    </nav>
</header>
```

<header class="p-navigation" role="banner">
    <div class="p-navigation__logo">
        <a class="p-navigation__link" href="#">
            VF
        </a>
    </div>
    <nav class="p-navigation__nav" role="navigation">
        <span class="u-off-screen">
            <a href="#main-content">Jump to main content</a>
        </span>
        <ul class="p-navigation__links">
          <li class="p-navigation__link"><a href="#">Link1</a></li>
          <li class="p-navigation__link"><a href="#">Link2</a></li>
          <li class="p-navigation__link"><a href="#">Link3</a></li>
          <li class="p-navigation__link"><a href="#">Link4</a></li>
        </ul>
    </nav>
</header>
