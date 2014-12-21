#!/bin/bash
echo "Add Platforms"
cordova platform add ios android

echo "Add Plugins"
cordova plugin add com.ionic.keyboard
cordova plugin add org.apache.cordova.console
cordova plugin add org.apache.cordova.device
cordova plugin add org.apache.cordova.dialogs
cordova plugin add org.apache.cordova.inappbrowser
cordova plugin add org.apache.cordova.network-information
cordova plugin add org.apache.cordova.splashscreen
cordova plugin add org.apache.cordova.statusbar
cordova plugin add org.apache.cordova.vibration
cordova plugin add org.apache.cordova.camera

