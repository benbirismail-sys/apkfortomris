# Tomris – APK build (Capacitor)
Needs: Node 20+, JDK 17, Android Studio (SDK). Run in this folder:

    npm init -y
    npm i @capacitor/core @capacitor/cli @capacitor/android @capacitor/local-notifications
    npx cap add android
    npx cap sync android

Edit android/app/src/main/AndroidManifest.xml, inside <manifest>:

    <uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
    <uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM"/>
    <uses-permission android:name="android.permission.RECORD_AUDIO"/>

Build:  `npx cap open android` -> Build > Build APK(s)
   or:  `cd android && ./gradlew assembleDebug`
Output: android/app/build/outputs/apk/debug/app-debug.apk

Alarms: tapping an alarm button in Ajanda schedules a native notification.
Paired watch/band: Android mirrors phone notifications to Bluetooth-paired wearables automatically.

## Android Studio olmadan (GitHub ile)
1. github.com'da yeni bir depo aç, bu klasörün içeriğini (.github dahil) yükle.
2. Actions sekmesi > "Build Tomris APK" çalışır (yaklaşık 5-8 dk).
3. Bitince çalışma sayfasının altındaki "tomris-apk" dosyasını indir, zip'ten app-debug.apk çıkar, telefona kur.
