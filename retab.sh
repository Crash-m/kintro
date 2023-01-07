#!/bin/bash

for file in *.htm *.css *.js
do
	echo $file
  expand --tabs=4 $file > tmp.txt
	 mv tmp.txt $file
done

