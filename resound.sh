#!/bin/bash

file=$1
if grep --quiet 'playsnd.js' $file
then
    sed -f resound.sed $file > temp.txt
    transform2.sh temp.txt resound.xslt output.txt
    if [ -s output.txt ]
    then
        echo "Processed $file"
        mv output.txt $file
    fi
fi
