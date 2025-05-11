import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getDataConnect, provideDataConnect } from '@angular/fire/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({ projectId: "dabubble-d9601", appId: "1:455959851464:web:fb1265acc97caa13c310fd", databaseURL: "https://dabubble-d9601-default-rtdb.europe-west1.firebasedatabase.app", storageBucket: "dabubble-d9601.firebasestorage.app", apiKey: "AIzaSyBSMwqrPDULuEOfSUilVBwPROC6zysav-U", authDomain: "dabubble-d9601.firebaseapp.com", messagingSenderId: "455959851464", measurementId: "G-C9N9WPYS26" })),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideAppCheck(() => {
      // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
      const provider = new ReCaptchaEnterpriseProvider(/* reCAPTCHA Enterprise site key */);
      return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    }),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideDataConnect(() => getDataConnect(connectorConfig)),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
