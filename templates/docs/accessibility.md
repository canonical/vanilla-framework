---
wrapper_template: '_layouts/docs.html'
context:
  title: Check your web interface for accessibility
---

This guide will help you address common accessibility pitfalls in web applications and content websites.

We aim to comply with the [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/), level AA. WCAG has been adopted as the standard for accessibility legislation around the world.


## Why accessibility is important

Designing and coding for accessibility helps everyone. People with disabilities or age-related challenges that affect seeing, hearing, moving, speaking, or understanding information need accessible design. But disabilities can also be temporary or situational, like having an injury, being in a noisy place, or dealing with glare.

The Web Content Accessibility Guidelines (WCAG) ensure that interfaces are [perceivable, operable, understandable and robust](https://www.w3.org/WAI/WCAG22/Understanding/intro#understanding-the-four-principles-of-accessibility).


## When using Vanilla

Components, styles and documentation for Vanilla are written with accessibility in mind, but do not guarantee an accessible experience for your website or web application.

When you use Vanilla, check the Accessibility tab in each component's documentation. We also suggest that you check the code examples, which follow best practices.

Whether you are using Vanilla or not, make sure to use correct HTML markup and semantics to make the most of browsers' built-in accessibility features.


## Automated tools

Automated tools can identify many issues with markup and styles. However, they are not sufficient for conducting a comprehensive accessibility audit. Use them mindfully, and do rely as well on manual reviews.

Here are some tools that may help you:

- **Online validators**: for an initial assessment, you may use tools such as [WAVE](https://wave.webaim.org/) and [PageSpeed Insights](https://pagespeed.web.dev/), or Lighthouse within Google Chrome's developer tools. Note that [a score of 100 doesn't mean your page is accessible](https://savvasstephanides.hashnode.dev/my-lighthouse-accessibility-score-is-100-does-that-mean-my-website-is-100-accessible).
- **Browser extensions**:
    * [Axe DevTools browser extension](https://www.deque.com/axe/browser-extensions/) can scan any given page for accessibility issues, providing guidance on how to fix them. Paid version also provides guided tests and testing full flows.
    * [WAVE browser extension](https://wave.webaim.org/extension/): flags issues but also lets you visually check the accessibility tree, focus order and labels.
- **Code editor linters**: check [Axe Linter for Visual Studio Code](https://www.deque.com/axe/devtools/linter/)
- **CLI tools**: [Pa11y](https://pa11y.org/) and [Axe](https://www.npmjs.com/package/@axe-core/cli) offer similar functionality by detecting issues. Both can be used for continuous integration (check also [axe Linter GitHub action](https://github.com/marketplace/axe-linter))


## Check visual accessibility

These checks support people with low vision (cataracts), color vision deficiencies (color blindness), photosensitivity, or reading difficulties by ensuring clear contrast, readable text at any size, no reliance on color alone, and safe, non-distracting visuals.


### Enable the visual features


<div class="p-tabs">
<div class="p-tabs__list" role="tablist" aria-label="Operating systems">
<div class="p-tabs__item">
    <button class="p-tabs__link" role="tab" aria-selected="true" aria-controls="ubuntu-tab" id="ubuntu">Ubuntu</button>
</div>
<div class="p-tabs__item">
    <button class="p-tabs__link" role="tab" aria-selected="false" aria-controls="windows-tab" id="windows" tabindex="-1">Windows</button>
</div>
<div class="p-tabs__item">
    <button class="p-tabs__link" role="tab" aria-selected="false" aria-controls="macos-tab" id="macos" tabindex="-1">macOS</button>
</div>
</div>

<div tabindex="0" role="tabpanel" id="ubuntu-tab" aria-labelledby="ubuntu">
<dl>
    <dt>High contrast mode</dt>
    <dd>Go to <strong>Settings &gt; Accessibility &gt; Seeing</strong>, enable <strong>High Contrast</strong>.</dd>
    <dd>You can also enable <strong>High Contrast</strong> in the Accessibility menu.</dd>
    <dt>Dark theme</dt>
    <dd>Go to <strong>Settings &gt; Appearance &gt; Style</strong>, select <strong>Dark</strong>.</dd>
    <dt>Large text</dt>
    <dd>Go to <strong>Settings &gt; Accessibility &gt; Seeing</strong>, enable <strong>Large Text</strong>.</dd>
    <dd>You can also enable <strong>Large Text</strong> in the Accessibility menu.</dd>
    <dt>Reduced motion</dt>
    <dd>Go to <strong>Settings &gt; Accessibility &gt; Seeing</strong>, disable <strong>Animation Effects</strong>.</dd>
</dl>
</div>

<div tabindex="0" role="tabpanel" id="windows-tab" aria-labelledby="windows" hidden="hidden">
<dl>
    <dt>High contrast mode</dt>
    <dd>Go to <strong>Settings</strong> &gt; <strong>Accessibility</strong> &gt; <strong>Contrast themes</strong> (or "High contrast" on Windows 10). Select a theme from the drop-down menu and click <strong>Apply</strong>.</dd>
    <dd>Shortcut: Press <kbd>Left Alt</kbd> + <kbd>Left Shift</kbd> + <kbd>Print Screen</kbd> to toggle High Contrast on or off.</dd>
    <dt>Dark theme</dt>
    <dd>Go to <strong>Settings</strong> &gt; <strong>Personalization</strong> &gt; <strong>Colors</strong>. Under "Choose your mode," select <strong>Dark</strong>.</dd>
    <dt>Large text</dt>
    <dd>Go to <strong>Settings</strong> &gt; <strong>Accessibility</strong> &gt; <strong>Text size</strong>. Drag the slider to your desired size and click <strong>Apply</strong>.</dd>
    <dd>To make everything bigger (apps and text), go to <strong>Settings</strong> &gt; <strong>System</strong> &gt; <strong>Display</strong> and adjust the "Scale" percentage.</dd>
    <dt>Reduced motion</dt>
    <dd>Settings &gt; Accessibility &gt; Visual Effects &gt; Animation Effects</dd>
</dl>
</div>

<div tabindex="0" role="tabpanel" id="macos-tab" aria-labelledby="macos" hidden="hidden">
<dl>
    <dt>Increase contrast (High contrast)</dt>
    <dd>Go to <strong>System Settings</strong> &gt; <strong>Accessibility</strong> &gt; <strong>Display</strong>. Toggle the switch for <strong>Increase contrast</strong>.</dd>
    <dd>For a more drastic effect, you can also toggle "Invert colours" in the same menu.</dd>
    <dt>Dark theme</dt>
    <dd>Go to <strong>System Settings</strong> &gt; <strong>Appearance</strong>. Select <strong>Dark</strong>.</dd>
    <dt>Large text</dt>
    <dd><strong>Option 1 (System-wide scaling):</strong> Go to <strong>System Settings</strong> &gt; <strong>Displays</strong>. Select a resolution option closer to "Larger Text."</dd>
    <dd><strong>Option 2 (Text only):</strong> Go to <strong>System Settings</strong> &gt; <strong>Accessibility</strong> &gt; <strong>Display</strong> &gt; <strong>Text Size</strong>. Use the slider to adjust the preferred reading size for supported apps.</dd>
    <dt>Reduced motion</dt>
    <dd>System Settings &gt; Accessibility &gt; Display &gt; Reduce motion</dd>
</dl>
</div>
</div>


### Visual accessibility checklist

- All elements are visible and all text is legible in all themes
    * If your framework supports dark theme or high contrast mode, check all possible combinations.
- All text wraps instead of overflowing/cropping when enabling large text mode
- All text wraps instead of overflowing/cropping when zooming 200%
- All text wraps instead of overflowing/cropping when the window is resized
- Meaning is conveyed through text or icons, not by color alone.
    * For example: for errors, an error message is shown in addition to a red border.
- Animations are disabled or reduced when reduced motion is enabled in the system settings
    * Large positional shifts, parallax scrolling, sliding panels, carousels, rotating spinners, or auto-playing loops are problematic and should be disabled.
    * Subtle opacity fades, color changes, shadows, or small local micro-interactions are OK.
    * Use CSS's `prefers-reduced-motion` to honour system settings.
- No flashing (there should not be more than 3 flashes per second)
- All elements have enough contrast with their background
    * Read [contrast checks](#contrast-checks) for further guidance.


### Contrast checks

Default styles from Vanilla already provide sufficient contrast out of the box, but you should double check elements have enough color contrast so all content is perceivable:

- For text: 4.5:1 or higher contrast with background
- For everything else (for instance, icons on background): 3:1 or higher contrast with background

No minimum contrast is required for inactive components, decorative images or graphics, or logos.

You should be particularly cautious in the following cases:

- Check how any local style overrides affect states like hover or focus
- Check light colors, such as light gray for secondary text or yellow
- Check semantic colors for text, such as red for errors or yellow for warnings
- Check how colors change on light and dark theme, and high contrast mode

For checking color contrast:

- On most browsers, including [Firefox](https://css-irl.info/testing-colour-accessibility-with-dev-tools/) and [Chrome](https://developer.chrome.com/docs/devtools/accessibility/contrast), you can check contrast ratio by inspecting an element and clicking on the colour swatch next to the CSS value. Remember we are aiming at level AA at least.
- Install a checker, such as [Kontrast](https://snapcraft.io/kontrast) or [Contrast](https://flathub.org/en/apps/org.gnome.design.Contrast) in Ubuntu, and pick the foreground and background colors.

Be mindful of text on images, and the use of transparency: some automatic tests may evaluate contrast incorrectly in those cases. Common sense may help flag up problems too: if text looks unreadable to you, it's not accessible no matter what the contrast checker says.


## Check keyboard navigation

These checks ensure a good experience for keyboard-only users, including people with motor disabilities that cannot use a mouse or trackpad, blind users who rely on screen readers, and power users who just prefer to use their keyboard.


### Try keyboard shortcuts

For a simple test, select the window you want to test. Then hit the <kbd>Tab</kbd> key repeatedly and check how focus moves through all interactive elements.

For a more thorough test, you need these shortcuts:

| Action | Shortcut |
|--------|----------|
| Move to next interactive item | <kbd>Tab</kbd> |
| Move to previous interactive item | <kbd>Shift</kbd>+<kbd>Tab</kbd> |
| Interact with an item or group | <kbd>Enter</kbd> |
| Exit a group | <kbd>Esc</kbd> |


### Keyboard navigation checklist

- All interactive elements (for example, buttons, fields, links) can be focused using the <kbd>Tab</kbd> key
- All interactive elements have a visible focus state (ideally a focus ring)
- There are no focus traps: it is possible to escape all loops, for instance by pressing the <kbd>Esc</kbd> key
- Focus moves from one element to the next in a logical order
    * In most of our apps, that usually means sidebar (if open), then body; and top to bottom, left to right (or right to left for RTL languages such as Arabic or Hebrew).
- A skip link is provided at the beginning of the page to bypass navigation
    - Check [skip link](/docs/patterns/links#skip-link) in Vanilla
- When a dialog opens, focus moves to the dialog
- When a dialog closes, focus moves back to the element that triggered the dialog
- Dialogs close by hitting the <kbd>Escape</kbd> key
- If an element doesn't have a visible label but does have a tooltip on hover, the tooltip should also be visible on focus


## Check screen reading

All graphical interfaces should be readable with common screen readers. Screen readers benefit blind and visually impaired users who rely on audio feedback to navigate interfaces. To work properly, screen readers require good markup, labelling, and logical content structure.


### Use the screen reader

<div class="p-tabs">
<div class="p-tabs__list" role="tablist" aria-label="Operating systems">
<div class="p-tabs__item">
    <button class="p-tabs__link" role="tab" aria-selected="true" aria-controls="ubuntu-screen-reader-tab" id="ubuntu-screen-reader">Ubuntu</button>
</div>
<div class="p-tabs__item">
    <button class="p-tabs__link" role="tab" aria-selected="false" aria-controls="windows-screen-reader-tab" id="windows-screen-reader" tabindex="-1">Windows</button>
</div>
<div class="p-tabs__item">
    <button class="p-tabs__link" role="tab" aria-selected="false" aria-controls="macos-screen-reader-tab" id="macos-screen-reader" tabindex="-1">macOS</button>
</div>
</div>

<div tabindex="0" role="tabpanel" id="ubuntu-screen-reader-tab" aria-labelledby="ubuntu-screen-reader">
<p><a href="https://documentation.ubuntu.com/desktop/en/latest/how-to/accessibility/orca/read-screen-aloud/">Orca</a> is the default screen reader in Ubuntu Desktop and other Linux distributions. It can be enabled in <strong>Settings &gt; Accessibility &gt; Seeing</strong>. You can also enable <strong>Screen Reader</strong> in the Accessibility menu.</p>

<p>Note that some Orca features don't work with certain combinations of Ubuntu releases and application toolkits. Read <a href="https://documentation.ubuntu.com/desktop/en/latest/how-to/troubleshoot/improve-screen-reader-usability/">Improve screen reader usability</a>.</p>

<p>You need to become familiar with keyboard shortcuts to use the screen reader. Modifier keys are used in the shortcuts:</p>

<dl>
    <dt><kbd>Super</kbd></dt>
    <dd>Generally mapped to the <kbd>Windows</kbd> key on Windows computers, and the <kbd>Command</kbd> key on Macs.</dd>
    <dt><kbd>Orca</kbd></dt>
    <dd>By default, the Orca key is <kbd>CapsLock</kbd> for the Laptop layout, and the <kbd>Insert</kbd> key for the Desktop layout. You can <a href="https://documentation.ubuntu.com/desktop/en/latest/tutorial/get-started-with-the-screen-reader/#determine-your-keyboard-layout">set the layout</a> in the Orca settings by typing <code>orca -s</code> in the terminal.</dd>
</dl>

<table>
    <thead>
    <tr>
        <th>Action</th>
        <th>Laptop layout</th>
        <th>Desktop layout</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Enable screen reader</td>
        <td><kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd></td>
        <td><kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd></td>
    </tr>
    <tr>
        <td>Quit screen reader</td>
        <td><kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd></td>
        <td><kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd></td>
    </tr>
    <tr>
        <td>Learn mode</td>
        <td><kbd>Orca</kbd>+<kbd>H</kbd> (exit with <kbd>Esc</kbd>)</td>
        <td><kbd>Insert</kbd>+<kbd>H</kbd> (exit with <kbd>Esc</kbd>)</td>
    </tr>
    <tr>
        <td>Orca preferences</td>
        <td><kbd>CapsLock</kbd>+<kbd>Space</kbd></td>
        <td><kbd>Insert</kbd>+<kbd>Space</kbd></td>
    </tr>
    <tr>
        <td>Toggle [flat review](https://documentation.ubuntu.com/desktop/en/latest/how-to/accessibility/orca/navigate-the-screen-using-the-screen-reader/#examine-a-window)</td>
        <td><kbd>CapsLock</kbd>+<kbd>P</kbd></td>
        <td><kbd>Insert</kbd>+<kbd>-</kbd> on the numeric keypad</td>
    </tr>
    <tr>
        <td>Say all (in flat review)</td>
        <td><kbd>CapsLock</kbd> and double-press <kbd>;</kbd></td>
        <td>Double-press <kbd>+</kbd> on the numeric keypad</td>
    </tr>
    <tr>
        <td>Read current line</td>
        <td><kbd>CapsLock</kbd>+<kbd>I</kbd></td>
        <td><kbd>8</kbd> on the numeric keypad</td>
    </tr>
    <tr>
        <td>Read next line</td>
        <td><kbd>CapsLock</kbd>+<kbd>O</kbd></td>
        <td><kbd>9</kbd> on the numeric keypad</td>
    </tr>
    <tr>
        <td>Read previous line</td>
        <td><kbd>CapsLock</kbd>+<kbd>U</kbd></td>
        <td><kbd>7</kbd> on the numeric keypad</td>
    </tr>
    </tbody>
</table>

<p>You can find further guidance in the <a href="https://documentation.ubuntu.com/desktop/en/latest/how-to/accessibility/orca/read-screen-aloud/">screen reader documentation</a>.</p>
</div>

<div tabindex="0" role="tabpanel" id="windows-screen-reader-tab" aria-labelledby="windows-screen-reader" hidden="hidden">    <p>For testing on Windows, we recommend <a href="https://www.nvaccess.org/download/">NVDA</a> (NonVisual Desktop Access), a free, open-source screen reader. Once installed, you can start it via the desktop shortcut or by pressing <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>.</p>

<p>You need to become familiar with keyboard shortcuts to use the screen reader. By default, the <kbd>NVDA</kbd> key is mapped to the <kbd>Insert</kbd> key (Desktop) or <kbd>Caps Lock</kbd> (Laptop), depending on how you configured it during setup.</p>

<p>NVDA uses "Browse Mode" (for reading web pages) and "Focus Mode" (for typing in forms). It usually switches automatically, but knowing this distinction is vital for testing.</p>

<table>
    <thead>
    <tr>
        <th>Action</th>
        <th>Shortcut</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Turn NVDA on</td>
        <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd></td>
    </tr>
    <tr>
        <td>Turn NVDA off</td>
        <td><kbd>NVDA</kbd> + <kbd>Q</kbd></td>
    </tr>
    <tr>
        <td>Input Help (Learn mode)</td>
        <td><kbd>NVDA</kbd> + <kbd>1</kbd> (Press again to exit)</td>
    </tr>
    <tr>
        <td>NVDA Menu (Preferences)</td>
        <td><kbd>NVDA</kbd> + <kbd>N</kbd></td>
    </tr>
    <tr>
        <td>Read all (from current position)</td>
        <td><kbd>NVDA</kbd> + <kbd>Down Arrow</kbd></td>
    </tr>
    <tr>
        <td>Read current line</td>
        <td><kbd>NVDA</kbd> + <kbd>Up Arrow</kbd></td>
    </tr>
    <tr>
        <td>Read next line</td>
        <td><kbd>Down Arrow</kbd></td>
    </tr>
    <tr>
        <td>Read previous line</td>
        <td><kbd>Up Arrow</kbd></td>
    </tr>
    <tr>
        <td>Pause Speech</td>
        <td><kbd>Control</kbd></td>
    </tr>
    </tbody>
</table>
</div>

<div tabindex="0" role="tabpanel" id="macos-screen-reader-tab" aria-labelledby="macos-screen-reader" hidden="hidden">    <p><a href="https://support.apple.com/guide/voiceover/welcome/mac">VoiceOver</a> is the default screen reader in macOS. Go to <strong>System Settings</strong> &gt; <strong>Accessibility</strong> &gt; <strong>VoiceOver</strong> to toggle it on. You can also quickly toggle it using the shortcut <kbd>Command</kbd> + <kbd>F5</kbd> (or <kbd>Command</kbd> + Triple-press <kbd>Touch ID</kbd> on laptops with Touch ID).</p>

<p>You need to become familiar with keyboard shortcuts to use the screen reader. The <kbd>VO</kbd> key is the modifier key used for almost all commands. It is mapped to <kbd>Control</kbd> + <kbd>Option</kbd> pressed together. You can also configure <kbd>Caps Lock</kbd> to act as the VO key in settings.</p>

<p>VoiceOver has a feature called "Quick nav" (toggle with <kbd>Left Arrow</kbd> + <kbd>Right Arrow</kbd>) that allows you to navigate using single arrow keys without holding the VO keys.</p>

<table>
    <thead>
    <tr>
        <th>Action</th>
        <th>Shortcut</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Turn VoiceOver on</td>
        <td><kbd>Command</kbd> + <kbd>F5</kbd></td>
    </tr>
    <tr>
        <td>Turn VoiceOver off</td>
        <td><kbd>Command</kbd> + <kbd>F5</kbd></td>
    </tr>
    <tr>
        <td>Keyboard Help (Learn mode)</td>
        <td><kbd>VO</kbd> + <kbd>K</kbd> (Press <kbd>Esc</kbd> to exit)</td>
    </tr>
    <tr>
        <td>VoiceOver Utility (Preferences)</td>
        <td><kbd>VO</kbd> + <kbd>F8</kbd></td>
    </tr>
    <tr>
        <td>Read all (from current position)</td>
        <td><kbd>VO</kbd> + <kbd>A</kbd></td>
    </tr>
    <tr>
        <td>Read current item/line</td>
        <td><kbd>VO</kbd> + <kbd>F3</kbd> (Description)</td>
    </tr>
    <tr>
        <td>Move to next item</td>
        <td><kbd>VO</kbd> + <kbd>Right Arrow</kbd></td>
    </tr>
    <tr>
        <td>Move to previous item</td>
        <td><kbd>VO</kbd> + <kbd>Left Arrow</kbd></td>
    </tr>
    <tr>
        <td>Interact with group/web area</td>
        <td><kbd>VO</kbd> + <kbd>Shift</kbd> + <kbd>Down Arrow</kbd></td>
    </tr>
    <tr>
        <td>Stop Interacting (Exit group)</td>
        <td><kbd>VO</kbd> + <kbd>Shift</kbd> + <kbd>Up Arrow</kbd></td>
    </tr>
    <tr>
        <td>Pause Speech</td>
        <td><kbd>Control</kbd></td>
    </tr>
    </tbody>
</table>
</div>


### Screen reading checklist

- All interactive elements (buttons, fields, links…) have a label and a role that is read out loud by the screen reader
    * Use the right HTML elements so screen readers can rely on their implied roles. Check [W3C documentation on roles](https://www.w3.org/WAI/ARIA/apg/practices/structural-roles/).
    * You may use the [off-screen Vanilla utility](/docs/utilities/off-screen) (`.u-off-screen`) to make a label readable only for screen reader.
- The HTML document has an appropriate `lang` attribute on the root element (e.g., `<html lang="en">`)
- HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`) and ARIA landmarks are used to define page regions
- All labels are descriptive, meaningful and concise
- All labels are unique, unless they trigger the exact same action.
    * For example, if there's more than one share button, each label should mention what it refers to ("Share [item name 1]", "Share [item name 2]")
- Links have descriptive text that makes sense out of context (avoid "click here" or "read more")
- All pages have a meaningful title or main heading
- All headings are unique and meaningful
- Headings follow a sequential order, without skipping any levels.
    * For example, H3 headings are always under an H1 and an H2 heading.
    * Use the right markup for heading levels regardless of how they are styled. You can achieve this by using [heading classes](/docs/base/typography#heading-classes), for example: `<h2 class="p-heading--3">`
- Errors are announced and readable with the screen reader
    * Check the [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) attribute
- For images that are not strictly decorative, provide alternative text that can be read out loud by the screen reader
    * Get guidance on how to write good alternative text in the [Vanilla content guidelines](/docs/content-guidelines#alt-text-for-images)
    * Avoid using images or icons in CSS pseudo-elements (`:before`, `:after`) as they are not accessible to screen readers
- Decorative elements are hidden from screen readers using `aria-hidden="true"` or appropriate CSS techniques
- SVG graphics have appropriate `<title>` and `<desc>` elements, or use `aria-label` or `aria-labelledby`
- All visual content in videos is [described](https://www.w3.org/WAI/media/av/description/) by a narrator, in the transcript, or in adjacent text.


## Check additional accessibility

Besides the more common checks above, you should also keep in mind these:

- All interactive elements have a width and height of at least 24px, or have [sufficient space around them](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
    * If interactive elements are too close, users might activate them by accident, for example when [scrolling on touch screens](https://axesslab.com/hand-tremors/).
- All UI text is reasonably short and easy to understand
    * Check the [Vanilla content guidelines](/docs/content-guidelines) for guidance.
- The content is organized with a clear and logical structure that makes sense
- Layout and design patterns are consistent throughout the interface
- When there's an error submitting data or in a flow, a meaningful error message is shown
    * Good error messages explain to the user how to avoid them, or at least explain the cause of the error.
- Search functionality is provided whenever possible so users have an alternative way to find the page or section they are looking for
- Audio or video that lasts more than 3 seconds does not play automatically
- Audio or video that lasts more than 3 seconds can be paused or muted
- If an experience cannot be made accessible, provide an alternative for users to access the same information or functionality
    * Provide text alternatives (for instance, transcriptions or captions) for audio and video content
    * Provide good labels or a table as an alternative for data charts.



## Look for user feedback

When auditing an app, check any outstanding accessibility issues in the app repository. Actual users are the best source for accessibility issues.

You should proactively test your interface with a diverse group of users, including people who use assistive technologies. You can recruit testers through specialized agencies or by reaching out to colleagues and friends.


## Report accessibility issues

If you spot an accessibility problem in Vanilla, let us know  by [filing an issue](https://github.com/canonical/vanilla-framework/issues) on GitHub.

If you found an accessibility issue in another project, please file an issue in the relevant repository.

Describe the issue in as much detail as you can, and provide instructions to test it. Screenshots and screen recordings also help. You can propose a fix for the issue, but it's not strictly necessary.


## References

The volume of information on the WCAG website can be disorienting. We keep the following links handy for quick reference:

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/): The complete W3C standard, including principles, guidelines, and success criteria
- [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/): Detailed reference with intent, benefits to people with disabilities, examples, resources, and techniques
- [How to Meet WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/): A customizable quick reference with guidelines, success criteria, and techniques
- [Techniques for WCAG 2.2](https://www.w3.org/WAI/WCAG22/Techniques/): Instructions for developers, including browser and assistive technology support notes, examples, code, resources, and test procedures


### Additional resources

The web is abundant in tools that help to create and test for accessible sites. We find the following particularly useful:

- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/): A comprehensive guide for understanding how to use WAI-ARIA to create accessible Rich Internet Applications. It provides guidance on the appropriate application of WAI-ARIA, describes recommended usage patterns, and explains concepts behind them.
- [Web Accessibility in Mind (WebAIM)](https://webaim.org/): Extensive resources and tools for web accessibility
- [Chrome DevTools Accessibility Reference](https://developer.chrome.com/docs/devtools/accessibility/reference/): Built-in accessibility testing features in Chrome
- [Accessibility guidelines from Vox Media](https://accessibility.voxmedia.com): provides checklists per discipline, including design, engineering, project management, QA and editorial. 