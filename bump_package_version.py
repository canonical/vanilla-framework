#! /usr/bin/env python

import argparse
import json
import sys

parser = argparse.ArgumentParser()
parser.add_argument(
    "release_level",
    help=(
        "Which componant of the version should be incremented."
        "Options are: major, minor, point."
    )
)
args = parser.parse_args()
release_level = args.release_level

component = {
    'major': 0,
    'minor': 1,
    'point': 2
}

if release_level not in component.keys():
    sys.exit(
        "release_level must be one of {0}".format(component.keys())
    )

filename = 'package.json'

with open(filename, 'r') as f:
    package = json.loads(f.read())
    print "Old version: {0}".format(package['version'])

with open(filename, 'w') as f:
    version_list = package['version'].split('.')

    current_level = version_list[component[args.release_level]]

    version_list[component[args.release_level]] = \
        str(int(current_level) + 1)

    new_version = '.'.join(version_list)
    package['version'] = new_version
    f.write(json.dumps(package, indent=4, sort_keys=True))

print "New version: {0}".format(new_version)
