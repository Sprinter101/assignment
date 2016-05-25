#!/bin/bash

python closure-library/closure/bin/calcdeps.py -i js/script.js -o deps -d closure-library/closure/ -p js/ --output_file=js/my-deps.js
