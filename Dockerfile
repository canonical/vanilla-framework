# syntax=docker/dockerfile:experimental

# Build stage: Install yarn dependencies
# ===
FROM node:10-slim AS yarn-dependencies
WORKDIR /srv
ADD package.json package.json
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn yarn install


# Build stage: Build vanilla-framework itself
# ===
FROM yarn-dependencies AS build-vanilla
ADD scss scss
RUN yarn run build


# Build stage: Build the static site with Jekyll
# ===
FROM ruby:2.6 AS build-docs-site
WORKDIR /srv
COPY --from=build-vanilla srv/build build
ADD Gemfile Gemfile
ADD docs docs
RUN bundle install
RUN bundle exec jekyll build --source docs --destination docs/_site


# Build stage: Build the CSS
# ===
FROM yarn-dependencies AS build-docs-css
ADD docs/sass docs/sass
RUN yarn run build-docs-css


# Build the production image
# ===
FROM ubuntu:bionic

# Set up environment
ENV LANG C.UTF-8
WORKDIR /srv

# Install nginx
RUN apt-get update && apt-get install --no-install-recommends --yes nginx

# Import code, build assets and mirror list
RUN rm -rf package.json yarn.lock .babelrc webpack.config.js
COPY --from=build-docs-site srv/docs/_site .
COPY --from=build-docs-css srv/docs/css css

# Create nginx config
ARG BUILD_ID
ADD docs/nginx.conf /etc/nginx/sites-enabled/default
RUN sed -i "s/~BUILD_ID~/${BUILD_ID}/" /etc/nginx/sites-enabled/default
ADD docs/redirects.map /etc/nginx/redirects.map

STOPSIGNAL SIGTERM

# Setup commands to run server
CMD ["nginx", "-g", "daemon off;"]
