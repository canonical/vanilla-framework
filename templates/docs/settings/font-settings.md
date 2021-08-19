---
wrapper_template: '_layouts/docs.html'
context:
  title: Font | Settings
---

# Font

<hr>

Vanilla uses the Ubuntu font family by default, but you can specify any other font family to better suit your project.

All Ubuntu sites and applications should use the Ubuntu font, as it has been specially created to complement the Ubuntu tone of voice. It has a contemporary style and contains characteristics unique to the Ubuntu brand that convey a precise, reliable and free attitude.

[Read more about the Ubuntu typeface](http://font.ubuntu.com/)

| Setting                | Default value                                         |
| ---------------------- | ----------------------------------------------------- |
| `$font-base-family`    | 'Ubuntu, Arial, "libra sans", sans-serif'             |
| `$font-monospace`      | '"Ubuntu Mono", Consolas, Monaco, Courier, monospace' |
| `$font-base-size`      | `1rem`                                                |
| `$font-heading-family` | `$font-base-family`                                   |

## Font weight

Vanilla uses three font weight settings in tandem with the Ubuntu font, which can be overridden to suit your needs:

| Setting                        | Default value | Notes                                                                   |
| ------------------------------ | ------------- | ----------------------------------------------------------------------- |
| `$font-weight-display-heading` | `100`         | This lighter font weight is used by `h1`, `h2` and `h3` elements which  |
| `$font-weight-regular-text`    | `300`         | Vanilla's default font-weight                                           |
| `$font-weight-bold`            | `400`         | Most often used on elements with very small text to make them stand out |

<br>
<hr>

## Design

- [Typography design](https://github.com/ubuntudesign/vanilla-design/tree/master/Typography)

## Related

- [Base typography](/docs/base/typography)
- [Code](/docs/base/code)
- [Pull quote pattern](/docs/patterns/pull-quote)
