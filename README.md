# ApiRTC on Cordova
This tutorial explains you how to use apiRTC and to build an application for iOS.

First of all you need to install Cordova. Please follow [this link](https://cordova.apache.org/docs/en/latest/guide/cli/index.html) to start with cordova

To build this example you need to add a target platform and some plugin
```
git clone https://github.com/apizee/ApiRTC-mobile.git
cordova platform add ios@3.9.2
cordova plugin add cordova-plugin-console
cordova plugin add cordova-custom-config
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-iosrtc
```

Be carefull to add the good version of ios platform because iosrtc is not compatible with last version 4.x

After run emulator like that :
```
cordova build ios
cordova run ios
```

## ApiRTC key
For this demo we use the Api key "myDemoApiKey". Please register on [our website](https://apirtc.com/get-key/) to get your private api key.

## Commun build error
To avoid errors, we use the plugin cordova-custom-config. But you can find solutions here :

**Build error**

Swift is unavailable on iOS earlier than 7.0; please set IPHONEOS_DEPLOYMENT_TARGET to 7.0 or later (currently it is ‘6.0’).

**Solution**

Click on your project files tree in XCode on HelloCordova
Go to Build Settings, look under Deployment Info, change iOS Deployment Target to 7.0

**Build errors**

Use of undeclared identifier” and “Use of undeclared type

**Solution**

Go to Build Settings, look under “Swift Compiler – Code Generation” (near the bottom), edit the setting “Objective-C Bridging Header” and enter ../../plugins/cordova-plugin-iosrtc/src/cordova-plugin-iosrtc-Bridging-Header.h in debug and release

**Build errors** 

You must rebuild it with bitcode enabled (Xcode setting ENABLE_BITCODE), obtain an updated library from the vendor, or disable bitcode for this target. for architecture arm64 clang: error: linker command failed with exit code 1 (use -v to see invocation)

**Solution**

Go to Build Settings, Build Option, edit the setting “Enable bitcode” to “NO”

**Runtime error**

Thread 1: EXC_BREAKPOINT (code=EXC_ARM_BREAKPOINT, subcode=0xe7ffdefe)” Meanwhile, the output console shows: dyld: Library not loaded: @rpath/libswiftCore.dylib Referenced from: /private/var/mobile/Containers/Bundle/Application/XX/WebRTCSample.app/WebRTCSample Reason: image not found

**Solution**

Go to Build Settings, look under Linking, edit “Runpath Search Paths”, and add the path @executable_path/Frameworks in debug and release

## Coming soon
- Android version