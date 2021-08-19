---
wrapper_template: '_layouts/docs.html'
context:
  title: Placeholders | Settings
---

# Placeholders

<hr>

Vanilla uses several global placeholders to share common styles between components. These placeholders can be edited via the following placeholder variables, assuming a `$sp-unit` of `0.5rem`.

<table>
  <thead>
    <tr>
      <th>Placeholder variable</th>
      <th>Default value</th>
      <th>Use cases</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>$bar-thickness</code></td>
      <td><a href="https://github.com/canonical-web-and-design/vanilla-framework/blob/master/scss/_settings_placeholders.scss#L6-L9"><code>0.1875rem</code></a></td>
      <td>Navigation, notification</td>
    </tr>
    <tr>
      <td><code>$border-radius</code></td>
      <td><a href="https://github.com/canonical-web-and-design/vanilla-framework/blob/master/scss/_settings_placeholders.scss#L6-L9"><code>$sp-unit * 0.25</code></a></td>
      <td>Button, Card, Code, Form, Media object, Switch, Tooltip</td>
    </tr>
    <tr>
      <td><code>$border</code></td>
      <td><a href="https://github.com/canonical-web-and-design/vanilla-framework/blob/master/scss/_settings_placeholders.scss#L6-L9"><code>1px solid $color-mid-light</code></a></td>
      <td>Card, Code, Form, Search box</td>
    </tr>
    <tr>
      <td><code>$box-shadow</code></td>
      <td class="u-truncate"><a href="https://github.com/canonical-web-and-design/vanilla-framework/blob/master/scss/_settings_placeholders.scss#L6-L9"><code>0 1px 1px 0 transparentize($color-x-dark, 0.85), 0 2px 2px -1px transparentize($color-x-dark, 0.85), 0 0 3px 0 transparentize($color-x-dark, 0.8)</code></a></td>
      <td>Card (highlighted), Modal, Notification, Switch</td>
    </tr>
  </tbody>
</table>

## Related

- [Spacing settings](/docs/settings/spacing-settings)
