import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { WebServices } from '../services/webServices';
import { UserDetails } from '../model-classes/userDetails';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { HomeScreenPage } from '../pages/home-screen/home-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
		RegisterPage,
		ForgotPasswordPage,
    HomeScreenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
		RegisterPage,
		ForgotPasswordPage,
    HomeScreenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
		WebServices,
		UserDetails
  ]
})
export class AppModule {}
