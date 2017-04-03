#!/usr/bin/env bash

npm install xcode

cordova plugin add cordova-plugin-console
cordova plugin add cordova-custom-config@2.0.3
cordova plugin add cordova-plugin-device
cordova plugin add https://github.com/BasqueVoIPMafia/cordova-plugin-iosrtc.git#4.0.0
cordova plugin add cordova-plugin-media
cordova plugin add android-camera-permission
cordova plugin add cordova-plugin-android-permissions@0.10.0

cordova platform add android
cordova build android

cordova platform add ios
cordova build ios
