#!/bin/bash

echo "Remove Plugins"
cordova plugin rm com.ionic.keyboard
cordova plugin rm org.apache.cordova.console
cordova plugin rm org.apache.cordova.device
cordova plugin rm org.apache.cordova.dialogs
cordova plugin rm org.apache.cordova.inappbrowser
cordova plugin rm org.apache.cordova.network-information
cordova plugin rm org.apache.cordova.splashscreen
cordova plugin rm org.apache.cordova.statusbar
cordova plugin rm org.apache.cordova.vibration
find plugins/* -type d -exec rm -rf '{}' \;
echo "Clean Platforms"
cordova platform add ios android
cordova platform remove ios android
