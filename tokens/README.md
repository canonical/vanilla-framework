# Design Tokens experimentation

The purpose of this branch is to demonstrate how design tokens may be defined
and used within the Vanilla Framework repo.

### How to use

1. `yarn`
2. `yarn build-tokens`

### Project structure

- `tokens/`: All Design Tokens, defined using JSON standard and following
  Style Dictionary schema/conventions
- `sd.config.json`: Style Dictionary configuration file
- `build/scss/_variables.scss`: Compiled output Style Dictionary Sass variables

### References

The following references were used in creating the project structure, naming
conventions, and file format:
- https://github.com/amzn/style-dictionary/tree/main/examples
- https://github.com/dgtlntv/canonical-design-tokens
- https://github.com/FirefoxUX/design-tokens
- https://github.com/rei/rei-cedar-tokens
- https://github.com/buildit/gravity-particles
- https://github.com/Skyscanner/backpack-foundations
- https://github.com/kiwicom/orbit

### Open questions

- Do we want to maintain BEM-style conventions in our variables (`--`)?
- What's the best way for us to handle icons?
- Do we want to prefix all our variables?
- Are we fully confident sticking with SD schema, rather than W3C?
- Which JSON keys should we use? Is `description` desirable?
