#!/bin/bash

python closure-library/closure/bin/calcdeps.py -i js/userProfile/script.js -o deps -d closure-library/closure/ -p js/ --output_file=js/userProfile/my-deps.js
