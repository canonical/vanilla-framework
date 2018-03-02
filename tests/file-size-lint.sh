#!/bin/bash
FILE='build/css/build.min.css'
if [ ! -f $FILE ]; then
  echo 'ERROR: Build file could not be found or is not readable. Please build first with `./run build`'
  exit 1
fi

THRESHOLD=400000
CURRENTSIZE=$(du -b $FILE | cut -f 1)
MESSAGE="Your generated CSS is ${CURRENTSIZE} with a threshold of ${THRESHOLD}"
if [ $CURRENTSIZE -lt $THRESHOLD ]; then
  STATUS='SUCCESS'
  EXIT=0
else
  STATUS='ERROR'
  EXIT=1
fi

echo "${STATUS}: ${MESSAGE}"
exit $EXIT
