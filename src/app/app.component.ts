import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomeScreenPage } from '../pages/home-screen/home-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp 
{
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage; 

   pages: Array<{img: string, title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [{
      img: '../assets/imgs/icon_home.png',
      title: 'Home',
      component: HomeScreenPage
    },{
      img: '../assets/imgs/icon_user.png',
      title: 'Profile',
      component: HomeScreenPage
    },{
      img: '../assets/imgs/icon_request_status.png',
      title: 'Request Status',
      component: HomeScreenPage
    },{
      img: '../assets/imgs/icon_change_password.png',
      title: 'Change Password',
      component: HomeScreenPage
    },{
      img: '../assets/imgs/icon_faq.png',
      title: 'FAQ',
      component: HomeScreenPage
    }];
  }

  openPage(p)
  {
    this.nav.setRoot(p.component);
  }
}
