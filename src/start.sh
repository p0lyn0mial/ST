#!/bin/sh

# Local variables
node_mod_path="../node_modules/st"

# Create a symbolic link to internal app modules
rm -f $node_mod_path
ln -s "$PWD/bin/" "$node_mod_path"

# Start the server
node server.js