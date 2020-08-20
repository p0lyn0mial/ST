#!/bin/sh
# This simple script is intended to download nessesary binaries
# NOTE: To run type: sudo dependencies.sh

# In order to download more recend version of nodejs add this repository 
add-apt-repository ppa:chris-lea/node.js -y
apt-get update
apt-get install nodejs=0.10.37-1chl1~trusty1

npm install -g gulp@3.8.10
