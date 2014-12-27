#!/bin/bash

echo "Remove Plugins"
cordova plugin rm org.apache.cordova.device
cordova plugin rm org.apache.cordova.dialogs
find plugins/* -type d -exec rm -rf '{}' \;
echo "Clean Platforms"
cordova platform add ios android
cordova platform remove ios android
