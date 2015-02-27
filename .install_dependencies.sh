#! /usr/bin/env bash

set -e

echo "Installing gulp deps..."
type gulp || sudo npm install -g gulp
type gem || sudo apt install ruby-dev || echo "gem missing - please isntall manually!" && type gem

if ! type scss-lint 2> /dev/null || [[ $(scss-lint --version | egrep -o "[0-9]+\.[0-9]+\.[0-9]+") < 0.34 ]]; then
	sudo gem install scss-lint
fi
