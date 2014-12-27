#!/bin/bash
echo "Add Platforms"
cordova platform add ios android

echo "Add Plugins"
cordova plugin add org.apache.cordova.device
cordova plugin add org.apache.cordova.dialogs
