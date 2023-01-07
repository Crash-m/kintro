#!/bin/bash

for file in *.wav
do
	sox $file ${file%wav}mp3
	sox $file ${file%wav}ogg
done
