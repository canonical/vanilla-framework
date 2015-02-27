#! /usr/bin/env bash

set -e

echo "Installing gulp dependencies..."
type gulp || sudo npm install -g gulp
type gem || sudo apt install ruby-dev || echo "gem missing - please install manually!" && type gem
type sass || sudo gem install sass || echo "sass missing - please install manually!" && type sass

if ! type scss-lint 2> /dev/null || [[ $(scss-lint --version | egrep -o "[0-9]+\.[0-9]+\.[0-9]+") < 0.34 ]]; then
	sudo gem install scss-lint
fi
