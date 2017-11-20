import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//added
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//firebase constante

  export const firebaseconfig = {
    apiKey: "AIzaSyDSI8-IatRSTuVgiAVV3-sSHSfi8FWN6xM",
    authDomain: "autocom-16acd.firebaseapp.com",
    databaseURL: "https://autocom-16acd.firebaseio.com",
    projectId: "autocom-16acd",
    storageBucket: "autocom-16acd.appspot.com",
    messagingSenderId: "45674153278"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	//firebase
	AngularFireModule.initializeApp(firebaseconfig),
  AngularFireDatabaseModule,
  AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
