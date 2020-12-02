# Vanilla Development

## Adding new icons

When adding new icons to Vanilla, we need to convert them from SVGs to data URLs so we can use them as background images.

To achieve this quickly, you can use the `icon-svgs-to-mixins` script:

- Place the SVGs to be converted in a directory somewhere on your local machine.
- In your terminal, run `dotrun icon-svgs-to-mixins path/to/svg/directory/`.

This will output a mixin for each SVG in the directory. Each mixin will take its name from the SVG's filename i.e. "tick.svg" will output a mixin named "vf-icon-tick".
