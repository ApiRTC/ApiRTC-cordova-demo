# ApiRTC Cordova P2P call sample 

This sample presents how to use apiRTC.js SDK with Cordova iOS/Andorid app.

## Installation

First install Cordova:  

`npm install -g cordova`

[Follow this link to get started with Cordova](https://cordova.apache.org/docs/en/latest/guide/cli/#installation-de-la-cli-de-cordova) 

`npm i`

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

Add Android platform:  

`cordova platform add android`

Then run:  

`cordova prepare android`

Then compile and deploy app to the connected device:  

`cordova run android --device`

OR use Android Studio to build and run the app.

You can test the app with our [web P2P call sample](https://dev.apirtc.com/demo/peertopeer_call/index.html) 

## Requirements

- apiRTC 4.4.10+
- Android 10+ (may work on 8-9 versions)
- iOS 14.5+

## ApiRTC key

For this demo we use `myDemoApiKey` api key. Please register [on our website](https://cloud.apizee.com) to get your private api key.
