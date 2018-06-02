import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { WebServices } from '../services/webServices';
import { UserDetails } from '../model-classes/userDetails';

import { MyApp } from './app.component';
import { AccordionComponent } from '../components/accordion/accordion';
import { SearchableListComponent } from '../components/searchable-list/searchable-list';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { HomeScreenPage } from '../pages/home-screen/home-screen';
import { FAQPage } from '../pages/f-a-q/f-a-q';
import { ProfilePage } from '../pages/profile/profile';
import { RequestStatusPage } from '../pages/request-status/request-status';
import { ChangePasswordPage } from '../pages/change-password/change-password';

@NgModule({
  declarations: [
    MyApp,
    AccordionComponent,
    SearchableListComponent,
    LoginPage,
		RegisterPage,
		ForgotPasswordPage,
    HomeScreenPage,
    ProfilePage,
    RequestStatusPage,
    ChangePasswordPage,
    FAQPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccordionComponent,
    SearchableListComponent,
    LoginPage,
		RegisterPage,
		ForgotPasswordPage,
    HomeScreenPage,
    ProfilePage,
    RequestStatusPage,
    ChangePasswordPage,
    FAQPage
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
