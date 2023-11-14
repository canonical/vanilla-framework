---
wrapper_template: '_layouts/docs.html'
context:
  title: Vertical spacing | Utilities
---

The `.u-sv` set of utility classes adjusts the space after an element in positive or negative multiples of the baseline grid unit. A baseline grid unit is equivalent to `.5rem`.

For example, to pull the next element `1rem` closer, apply `.u-sv-2`. To push it `.5rem` away from the current element, apply `u-sv1`.

Throughout Vanilla, margin is only applied to the bottom of an element. If elements beneath an element using this utility have a top margin applied, there is a risk of <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing" title="MDN article regarding margin collapse">margin collapse</a>. For predictable results, use <a href="https://csswizardry.com/2012/06/single-direction-margin-declarations/" title="Article by Harry Roberts regarding single margin direction">single margin direction</a>.

These classes should be used sparingly, and exist to give designers greater flexibility when it comes to spacing and alignment.

<div class="p-strip is-shallow">
  <div class="row">
    <div class="col-4">
      <div class="p-notification--positive">
        <div class="p-notification__content">
          <h5 class="p-notification__title">Do:</h5>
          <p class="p-notification__message">Use <code>u-sv</code> classes to modify space between elements that are not part of Vanilla components.</p>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="p-notification--negative">
        <div class="p-notification__content">
          <h5 class="p-notification__title">Don't:</h5>
          <p class="p-notification__message">Use <code>u-sv</code> to modify the space between elements inside of Vanilla components.</p>
        </div>
      </div>
    </div>
  </div>
</div>

| Variable  | Effect                                   |
| --------- | ---------------------------------------- |
| `.u-sv-3` | Decreases space by 3 baseline grid units |
| `.u-sv-2` | Decreases space by 2 baseline grid units |
| `.u-sv-1` | Decreases space by 1 baseline grid unit  |
| `.u-sv1`  | Increases space by 1 baseline grid unit  |
| `.u-sv2`  | Increases space by 2 baseline grid units |
| `.u-sv3`  | Increases space by 3 baseline grid units |

<div class="embedded-example"><a href="/docs/examples/utilities/vertical-spacing/" class="js-example">
View example of the vertical spacing utility
</a></div>

## Import

To import just this utility into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-u-vertical-spacing;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
