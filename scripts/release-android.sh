
cordova build --release android
# you already have a signing key, skip these steps and use that one instead.
#keytool -genkey -v -keystore secret/my-release-key.keystore -alias "Moovz-Social Sport" -keyalg RSA -keysize 2048 -validity 10000

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore secret/my-release-key.keystore platforms/android/ant-build/app-release-unsigned.apk alias_name

zipalign -v 4 platforms/android/ant-build/app-release-unsigned.apk secret/releases/app-v0.0.7.apk

# In order for the Google Play Store to accept updated APKs, you'll need to edit the platforms/android/AndroidManifest.xml file to increment the android:versionCode value.

# https://play.google.com/apps/publish

