---
wrapper_template: '_layouts/docs.html'
context:
  title: Font | Settings
---

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

Vanilla uses several font weight settings in tandem with the Ubuntu font, which can be overridden to suit your needs:

| Setting                        | Default value | Notes                                                                                              |
| ------------------------------ | ------------- | -------------------------------------------------------------------------------------------------- |
| `$font-weight-display-heading` | `100`         | This lighter font weight is used by the [display heading](/docs/base/typography#display-headings). |
| `$font-weight-regular-text`    | `400`         | Vanilla's default weight for body text.                                                            |
| `$font-weight-bold`            | `550`         | Used for bold text and some small-text styles.                                                     |

### Heading levels {{ status("New") }}

To customise the font weight of each heading level, you can override the following settings:

| Variable          | Default value |
| ----------------- | ------------- |
| `$font-weight-h1` | `400`         |
| `$font-weight-h2` | `200`         |
| `$font-weight-h3` | `500`         |
| `$font-weight-h4` | `300`         |
| `$font-weight-h5` | `600`         |
| `$font-weight-h6` | `600`         |

If your project previously customised headings through `$font-weight-bold` or `$font-weight-regular-text`, set the corresponding heading variables before importing Vanilla. Set `$font-weight-h1`, `$font-weight-h3`, and `$font-weight-h5` to your bold weight, or `$font-weight-h6` to your regular text weight, to retain those customisations.

<br>
<hr />

## Related

- [Base typography](/docs/base/typography)
- [Code](/docs/base/code)
- [Pull quote pattern](/docs/patterns/pull-quote)
