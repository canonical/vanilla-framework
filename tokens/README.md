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
- Do we want to prefix all our variables? If so, with what prefix?
- Are we fully confident sticking with SD schema, rather than W3C?
- Which JSON keys should we use? Is `description` desirable?
- No postfix vs. `-default` for elements with "default" styling
- No postfix vs. `-light` for light themed elements
- Do we want to use primitives?
- How exactly would each file be categorized (i.e. `space`)?
- `.vf-color-link-dark` vs. `.vf-color-dark-link`
- Do we want to follow CTI structure? https://amzn.github.io/style-dictionary/#/tokens?id=category-type-item

### Proposed solutions

- Stick to CTI as closely as possible for predictable, reliable naming:
  `color-text-link-base`, `color-text-link-visited`
- Use theme postfixes in all instances where colors are involved:
  `color-text-link-base-light`, `color-text-link-visited-dark`
- Use prefixes on all tokens:
  `vf-color-text-link-base-light`
- Stick with SD schema, as they seem to be the primary drivers of standards
- All token name segments should match/align with known CSS terminology:
  `margin`, not `size` or `space`
- Start with minimal set of keys in JSON, add as needed
