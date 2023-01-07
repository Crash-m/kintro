#!/bin/bash

file=$1
if grep --quiet '\.wav' $file
then
    sed -e "s/\.wav');/');/" $file > temp.txt
    echo "Processed $file"
    mv temp.txt $file
fi
