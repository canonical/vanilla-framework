#Ubuntu web style framwork
_____


##Get started

From community websites to web applications, these guidelines will help you achieve a consistent look, bringing the Ubuntu and Canonical brands to the web with precision.

In this section you will find the Ubuntu web style guide and a front-end framework, which you can apply to your web projects.

Sites created within Canonical should follow this style guide closely, whereas external sites are free to adapt and expand the existing components to their needs.

##Using the framework

To use the framework, you can link to Canonical’s asset server. Use the following code snippet to link directly to the asset server:

<code>&lt;link rel="stylesheet" type="text/css" media="all" href="http://assets.ubuntu.com/sites/guidelines/css/latest/ubuntu-styles.css"/&gt;</code>

Place this line in your header, just below your <code>&lt;title&gt;</code> tag.

##What’s included?

The framework consists of a single CSS file, and the Ubuntu and YUI‘s JavaScript files.

##Other formats

- Non-minified CSS
- Sass files:
    - _core.scss: resets and styles raw HTML elements
    - _core-constants.scss: contains all Sass variables
    - _core-grid.scss: the grid for wireframing a page
    - _core-mixins.scss: contains all mixins used in the style guide
    - core-print.scss: style for printed media
    - _core-templates.scss: modifies the whole page styles base on a body class
    - patterns
        - _arrows.scss
        - _blockquotes.scss
        - _boxes.scss
        - _buttons.scss
        - _contextual-footer.scss
        - _forms.scss
        - _helpers.scss
        - _image-centered.scss
        - _inline-logos.scss
        - _lists.scss
        - _navigation.scss
        - _notifications.scss
        - _rows.scss
        - _slider.scss
        - _structure.scss
        - _tabbed-content.scss
        - _tooltips.scss
        - _typography.scss
        - _vertical-divider.scss
        - patterns.scss


## Syntax

This style guide uses the HTML5 doctype, following the XHTML syntax for legibility and consistency, which means:

- **closed and self-closing elements** &lt;br /&gt; and not &lt;br&gt;
- **lowercase elements** &lt;p&gt; and not &lt;P&gt;
- **quoted attributes** &lt;p class="note"&gt; and not &lt;p class=small&gt;

For more on this subject, read [“HTML5 syntax – HTML vs XHTML”](http://stackoverflow.com/questions/1076897/html5-syntax-html-vs-xhtml) on Stack Overflow or [“XHTML”](https://developer.mozilla.org/en/docs/XHTML) on Mozilla Developer Network.

## Default styles

The default styles, defined in ubuntu-styles.css, shouldn’t be altered, as they provide the foundation on which components are built upon.

### Links

The default link colour is Ubuntu orange: <code style="background:#dd4814;color:white">#DD4814</code>. Ubuntu orange should only be used for linked text.

####Headings and other non-inline links

When links are not within a text block, the link should also be indicated by a right side angle quote (&rsaquo;).

**Note:** Make sure the link description always uses action verbs, for example "Read more" and not "More"

## Print styles

The default print stylesheet improves the legibility of the content when printed. It:

- sets all backgrounds to white and text to black
- sets the default font size to 16pt
- changes the colour of links to a dark grey and underlines them
- hides unnecessary elements for print: navigation, search, links to top and footer
- removes the float from the main container and adds printer-friendly margins
