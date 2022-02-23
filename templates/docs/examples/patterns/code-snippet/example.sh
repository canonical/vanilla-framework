#!/bin/bash
set -eu
. $CONJURE_UP_SPELLSDIR/sdk/common.sh

if [[ "$JUJU_PROVIDERTYPE" == "lxd" ]]; then
    debug "Running pre-deploy for $CONJURE_UP_SPELL"
    sed "s/##MODEL##/$JUJU_MODEL/" $(scriptPath)/lxd-profile.yaml | lxc profile edit "juju-$JUJU_MODEL" || exposeResult "Failed to set profile" $? "false"
fi

exposeResult "Successful pre-deploy." 0 "true"
