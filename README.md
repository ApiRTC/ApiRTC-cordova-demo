# ApiRTC Cordova P2P call sample 
This sample presents how to use apiRTC.js SDK with Cordova iOS/Andorid app.

## Installation
First install Cordova:

`npm install -g cordova`

[Follow this link to get started with Cordova](https://cordova.apache.org/docs/en/latest/guide/cli/#installation-de-la-cli-de-cordova) 

### iOS
[Install Xcode](https://developer.apple.com/xcode/)

Install iOS platform:

`cordova platform add ios`

Then run:

`cordova prepare ios`

Then run *.xcworkspace Xcode project from `platforms/ios` folder.

Setup certificates inside *Xcode -> Signing & Capabilities* project section.

Then build from Xcode or use Cordova deployment tools.

[Read more about iOS deploying](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/)

You can test the app with our [web P2P call sample](https://dev.apirtc.com/demo/peertopeer_call/index.html) 

### Android

[Install Android Studio](https://developer.android.com/studio)

Install Android platform:

`cordova platform add android`

Then run:

`cordova prepare android`

Add required permissions to `platforms/android/app/src/main/AndroidManifest.xml`:
```
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
```

Then compile and deploy app to the connected device:

`cordova run android --device`

OR use Android Studio to build and run the app.

You can test the app with our [web P2P call sample](https://dev.apirtc.com/demo/peertopeer_call/index.html) 

## Requirements
Tested on:
- apiRTC 4
- iOS: `cordova-ios` 6.1.0
- iOS: Xcode 11.5
- iOS: iOS 13.5
- Android: `cordova-android` 9.0.0

The app may work on lower libs versions, but don't report issues.

## ApiRTC key

For this demo we use `myDemoApiKey` api key. Please register [on our website](https://cloud.apizee.com) to get your private api key.
