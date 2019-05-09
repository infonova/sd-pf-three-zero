#!/usr/bin/env bash

rm -rf ./target/*

./install-reveal.js.sh

clj -m figwheel.main -b dev -r