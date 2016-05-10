#!/usr/bin/env bash

cordova platform add ios

cordova plugin add cordova-plugin-console
cordova plugin add cordova-custom-config
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-iosrtc

cordova build ios