#! /usr/bin/env bash

set -e

# Use 'sudo' for development setup, but simply '/usr/bin/env' in other environments
COMMAND_PREFIX="sudo /usr/bin/env"
GULP="/usr/bin/gulp"
if [[ "${DEBIAN_FRONTEND}" == "noninteractive" ]] || [[ "$(whoami)" ==   "root" ]]; then
    COMMAND_PREFIX="/usr/bin/env"
    GULP="/usr/bin/env gulp"
fi

echo "Project dependencies:"

# Test for gulp, install if not found
all_versions=$(${GULP} --version 2> /dev/null) || error=$?
if [[ ${error} -eq 0 ]]; then
    echo "Found gulp ($(echo ${all_versions}))"
elif [[ ${error} == 127 ]]; then
    echo "gulp not found: installing gulp"
    ${COMMAND_PREFIX} npm install -g gulp
    echo "Installed gulp"
else
    echo "Unexpected error when running gulp"
    exit 1
fi

# Test for gem, install if not found
version=$(/usr/bin/env gem --version 2> /dev/null) || error=$?
if [[ ${error} -eq 0 ]]; then
    echo "Found gem (${version})"
elif [[ ${error} == 127 ]]; then
    echo "gem not found: installing ruby-dev"
    ${COMMAND_PREFIX} apt install ruby-dev
    echo "Installed ruby-dev"
else
    echo "Unexpected error when running gem"
    exit 1
fi

# Test for scss-lint, install if not found
version=$(/usr/bin/env scss-lint --version 2> /dev/null) || error=$?
if [[ ${error} -eq 0 ]]; then
    echo "Found scss-lint (${version})"
elif [[ ${error} == 127 ]] || [[ ${version} < 0.34 ]]; then
    echo "scss-lint not found: installing scss-lint"
    ${COMMAND_PREFIX} gem install scss-lint
    echo "Installed scss-lint"
else
    echo "Unexpected error when running scss-lint"
    exit 1
fi
