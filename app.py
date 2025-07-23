# This file serves as an entry point for the rock image. It is required by the Flask Framework rockcraft extension.
# The flask application must be defined in this file under the variable name `app`.
# See - https://documentation.ubuntu.com/rockcraft/en/latest/reference/extensions/flask-framework/
# Follows https://github.com/canonical/charmhub.io/blob/082fd048994b2bc5ccff961bb0d6108d6d13c882/app.py
import os

from webapp.app import app