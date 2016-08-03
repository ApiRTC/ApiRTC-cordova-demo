#!/usr/bin/env bash

cordova platform add ios
cordova platform add android

cordova plugin add cordova-plugin-console
cordova plugin add cordova-custom-config
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-iosrtc
cordova plugin add android-camera-permission
cordova plugin add cordova-plugin-android-permissions@0.10.0

cordova build ios
cordova build android