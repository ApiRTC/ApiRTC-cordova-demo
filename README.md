# ApiRTC Cordova P2P call sample

## Installation

First install Cordova:

`npm i cordova`

### iOS

You should have Xcode installed.

Then run:

`cordova prepare ios`

Then run *.xcworkspace Xcode project from `platforms/ios` folder.

Setup certificates inside *Xcode -> Signing & Capabilities* project section.

Then build from Xcode.

You can test the app with our [web P2P call sample](https://dev.apirtc.com/demo/peertopeer_call/index.html) 

### Android

You should have installed Android Studio.

Then add Android platform compatible with used device Android version:

eg: `ionic cordova platform add android@9.0.0`

Then compile and deploy app to the connected device:

`ionic cordova run android --device`

You can test the app with our [web P2P call sample](https://dev.apirtc.com/demo/peertopeer_call/index.html) 


## Requirements
- iOS: `cordova-ios` 5.1.1+
- iOS: `cordova-plugin-iosrtc` 6.0.11 version temporary fixed due to degradations of its components ([details](https://github.com/cordova-rtc/cordova-plugin-iosrtc/issues/516)). Better check your `package.json` before rebuilding actions to verify you had this fixed version.
- iOS: Xcode 11.5+
- iOS: iOS 13.5+

The app may work on lower iOS versions, but don't report issues.

- Android: app tested on Android 10 API 29 + cordova 9.0.0. It should work on lower versions, just be sure that your stack (Android version, `cordova-android` verision etc) has API compatible parts
