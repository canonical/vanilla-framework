# This file serves as an entry point for the rock image. It is required by the PaaS app charmer.
# The flask application must be defined in this file under the variable name `app`.
# See - https://documentation.ubuntu.com/rockcraft/en/latest/reference/extensions/flask-framework/
# Follows https://github.com/canonical/charmhub.io/blob/082fd048994b2bc5ccff961bb0d6108d6d13c882/app.py
import os
import logging

# canonicalwebteam.flask-base requires SECRET_KEY to be set, this must be done before importing the app
os.environ["SECRET_KEY"] = os.environ["FLASK_SECRET_KEY"]

# disable talisker logger, as it is not used in this application and clutters logs
logging.getLogger("talisker.context").disabled = True

from webapp.app import app