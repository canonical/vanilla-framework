# Working on the Vanilla project

## Local development

### Via dotrun

The simplest way to run the Vanilla framework on Linux is with the [dotrun snap](https://github.com/canonical-web-and-design/dotrun/), and using the `dotrun` command to build the project:

```bash
# Build CSS into the ./build/ directory,
# and start the server:
dotrun

# Dynamically watch for changes to the
# Sass files and build automatically:
dotrun watch
```

When writing SCSS, it's useful to run both commands in separate terminals so changes are quickly built and ready for the browser to pick up on page reload.

### Via Docker

It can also be run on other operating systems by first [installing Docker](https://docs.docker.com/engine/installation/) (Linux users may need to [add your user to the `docker` group](https://docs.docker.com/engine/installation/linux/linux-postinstall/)), and then using the `./run` script:

```bash
# Build CSS into the ./build/ directory:
./run build

# Start the server:
./run serve

# Dynamically watch for changes to the
# Sass files and build automatically:
./run watch
```

### Viewing documentation

Once the server is running, you can visit <http://0.0.0.0:8101/> in your browser to see the project.

The documentation for the latest version of Vanilla framework is hosted at <https://vanillaframework.io/docs>, and the documentation markdown files live in the [`docs` folder](/docs).

The [examples directory](/docs/examples) contains example markup for each component of the framework, and these examples can be viewed in the browser at <http://0.0.0.0:8101/docs/examples/>.

## Adding new icons

When adding new icons to Vanilla, we need to convert them from SVGs to data URLs so we can use them as background images.

To achieve this quickly, you can use the `icon-svgs-to-mixins` script:

- Place the SVGs to be converted in a directory somewhere on your local machine.
- In your terminal, run `dotrun icon-svgs-to-mixins path/to/svg/directory/`.

This will output a mixin for each SVG in the directory. Each mixin will take its name from the SVG's filename i.e. "tick.svg" will output a mixin named "vf-icon-tick".

Bear in mind that the actual SCSS mixins will evolve over time, so you may need to update the mixin output in this script to match them.
