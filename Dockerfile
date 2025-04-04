# syntax=docker/dockerfile:experimental


# Build stage: Install python dependencies
# ===
FROM ubuntu:noble AS python-dependencies
RUN apt-get update && apt-get install --no-install-recommends --yes \
  python3-pip python3-setuptools python3-wheel python3-venv \
  build-essential git ca-certificates
ADD requirements.txt /tmp/requirements.txt
RUN pip3 config set global.disable-pip-version-check true
RUN python3 -m venv /venv
ENV PATH="/venv/bin:${PATH}"
RUN --mount=type=cache,target=/root/.cache/pip pip3 install --requirement /tmp/requirements.txt
# Build stage: Install yarn dependencies
# ===
FROM node:22 AS yarn-dependencies
WORKDIR /srv
ADD package.json package.json
ADD yarn.lock yarn.lock
ADD sd.config.json sd.config.json
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 yarn install


# Build stage: Build vanilla-framework itself
# ===
FROM yarn-dependencies AS build-vanilla
ADD scripts scripts
ADD scss scss
ADD tokens tokens
RUN yarn run build


# Build the production image
# ===
FROM ubuntu:noble

# Set up environment
ENV LANG C.UTF-8
WORKDIR /srv

# Install python and import python dependencies
RUN apt-get update && apt-get install --no-install-recommends --yes \
  python3-setuptools python3-lib2to3 python3-pkg-resources \
  ca-certificates libsodium-dev gpg
COPY --from=python-dependencies /venv /venv
ENV PATH="/venv/bin:${PATH}"

# Import code, build assets and mirror list
ADD . .
RUN rm -rf package.json yarn.lock .babelrc webpack.config.js
COPY --from=build-vanilla /srv/package.json package.json
COPY --from=build-vanilla /srv/build build

# Set revision ID
ARG BUILD_ID
ENV TALISKER_REVISION_ID "${BUILD_ID}"

# Setup commands to run server
ENTRYPOINT ["./entrypoint"]
CMD ["0.0.0.0:80"]
