#!/usr/bin/env bash

yarn build
rm -rf ./dist/img/**
scp -r  ./dist/* ssh root@139.217.218.207:/data/avue/avue-data
