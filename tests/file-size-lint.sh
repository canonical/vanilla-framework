#!/bin/bash

THRESHOLD=175000
FILE='build/css/build.min.css'

if [ ! -f $FILE ]; then
  echo 'ERROR: Build file could not be found or is not readable. Please build first with `./run build`'
  exit 1
fi

CURRENTSIZE=$(du -b $FILE | cut -f 1)
if [ ${CURRENTSIZE} -gt ${THRESHOLD} ]; then
  echo "ERROR: Your CSS is over ${THRESHOLD} (it's ${CURRENTSIZE})"
  exit 1
fi

echo "Success: your generated CSS is ${CURRENTSIZE} (under ${THRESHOLD})"
