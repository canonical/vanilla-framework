# syntax=docker/dockerfile:experimental


# Build stage: Install python dependencies
# ===
FROM ubuntu:focal AS python-dependencies
RUN apt-get update && apt-get install --no-install-recommends --yes python3-pip python3-setuptools
ADD requirements.txt /tmp/requirements.txt
RUN --mount=type=cache,target=/root/.cache/pip pip3 install --user --requirement /tmp/requirements.txt


# Build stage: Install yarn dependencies
# ===
FROM node:16 AS yarn-dependencies
WORKDIR /srv
ADD package.json package.json
ADD yarn.lock yarn.lock
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn yarn install --production


# Build stage: Build vanilla-framework itself
# ===
FROM yarn-dependencies AS build-vanilla
ADD scss scss
ADD sass-functions.js sass-functions.js
RUN yarn run build


# Build the production image
# ===
FROM ubuntu:focal

# Set up environment
ENV LANG C.UTF-8
WORKDIR /srv

# Install python and import python dependencies
RUN apt-get update && apt-get install --no-install-recommends --yes python3-setuptools python3-lib2to3 python3-pkg-resources
COPY --from=python-dependencies /root/.local/lib/python3.8/site-packages /root/.local/lib/python3.8/site-packages
COPY --from=python-dependencies /root/.local/bin /root/.local/bin
ENV PATH="/root/.local/bin:${PATH}"

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
