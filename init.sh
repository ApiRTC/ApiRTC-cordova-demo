#!/usr/bin/env bash

npm install xcode

cordova plugin add cordova-plugin-console
cordova plugin add cordova-custom-config
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-iosrtc
cordova plugin add cordova-plugin-media
cordova plugin add android-camera-permission
cordova plugin add cordova-plugin-android-permissions

cordova platform add android
cordova build android

cordova platform add ios
cordova build ios
