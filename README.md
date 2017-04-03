# ApiRTC on Cordova
This tutorial explains you how to use apiRTC and to build an application for iOS and android.

First of all you need to install Cordova. Please follow [this link](https://cordova.apache.org/docs/en/latest/guide/cli/index.html) to get started with cordova

To build this example, you first need to add a target platform and a few plugins
```
git clone https://github.com/apizee/ApiRTC-mobile.git
cordova plugin add cordova-plugin-console
cordova plugin add cordova-custom-config
cordova plugin add cordova-plugin-device
cordova plugin add https://github.com/BasqueVoIPMafia/cordova-plugin-iosrtc.git#4.0.0
cordova plugin add cordova-plugin-media
cordova plugin add android-camera-permission
cordova plugin add cordova-plugin-android-permissions@0.10.0
cordova platform add ios
cordova platform add android
```

Then, run an emulator like this :
```
cordova build ios
cordova run ios

cordova build android
cordova run android --device
```

Open [this link](https://demo.apizee.com/mobile/index.html) with Chrome to exchange with your mobile over webrtc

## ApiRTC key
For this demo we use the Api key "myDemoApiKey". Please register on [our website](https://apirtc.com/get-key/) to get your private api key.

## Building errors on iOS
To avoid errors, we use the plugin cordova-custom-config to integrate all Xcode configuration. But you can find solutions here:

**Build error**

Swift is unavailable on iOS versions under 7.0. Please set IPHONEOS_DEPLOYMENT_TARGET to 7.0 or later (currently it is ‘6.0’).

**Solution**

Click on your project files tree in XCode on HelloCordova
Go to Build Settings, look under Deployment Info, change iOS Deployment Target to 7.0


**Build error**

"Use of undeclared identifier” and “Use of undeclared type"

**Solution**

Go to Build Settings, look under “Swift Compiler – Code Generation” (near the bottom), edit the setting “Objective-C Bridging Header” and enter ../../plugins/cordova-plugin-iosrtc/src/cordova-plugin-iosrtc-Bridging-Header.h in debug and release


**Build error** 

You must rebuild it with bitcode enabled (Xcode setting ENABLE_BITCODE), obtain an updated library from the vendor, or disable bitcode for this target. for architecture arm64 clang: error: linker command failed with exit code 1 (use -v to see invocation)

**Solution**

Go to Build Settings, Build Option, edit the setting “Enable bitcode” to “NO”


**Runtime error**

Thread 1: EXC_BREAKPOINT (code=EXC_ARM_BREAKPOINT, subcode=0xe7ffdefe)” Meanwhile, the output console shows: dyld: Library not loaded: @rpath/libswiftCore.dylib Referenced from: /private/var/mobile/Containers/Bundle/Application/XX/WebRTCSample.app/WebRTCSample Reason: image not found

**Solution**

Go to Build Settings, look under Linking, edit “Runpath Search Paths”, and add the path @executable_path/Frameworks in debug and release

##Building errors on Android
**Add the following permissions to the Android manifest **:(<nameOfYourProject>/platforms/android/AndroidManifest.xml).
<uses-permission android:name=”android.permission.RECORD_AUDIO” />
<uses-permission android:name=”android.permission.CAMERA” />
<uses-permission android:name=”android.permission.MODIFY_AUDIO_SETTINGS” />

**Update your project**
Run the command
```
cordova prepare
```

**Build your project**
```
cordova run android 
```
##Optional tips

The crosswalk plugin is not necessary for Android 5.0+ as WebRTC is now supported in native WebView. It may enable you to have lightweight application but you will loose compatibility with Android version less than 5.0

The following steps will convert the project to use Android 5.0+ native WebView.

-If crosswalk plugin is already added, remove it with Terminal command :
cordova plugin remove cordova-plugin-crosswalk-webview
-In AndroidManifest.xml, set the minSdkVersion to 21.
-A patch may be needed in Cordova to allow WebRTC getUserMedia. Refer to pull request https://github.com/apache/cordova-android/pull/178/files to make changes to the file /platforms/android/CordovaLib/src/org/apache/cordova/engine/SystemWebChromeClient.java.

##Try your project

In order to test, open [this link](https://cloud.apizee.com/apiRTC/Samples/apiPhone-level2.html) on your computer browser:

You will be able to establish a webRTC call between your app and your computer using the number that has been automatically assigned to your apiRTC Client.
