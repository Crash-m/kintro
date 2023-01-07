#!/bin/bash

for file in *.htm
do
	echo $file
   sed -e 's/iso-8859-1/utf-8/g' $file > tmp.txt
	 mv tmp.txt $file
done

