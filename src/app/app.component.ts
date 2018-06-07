import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WebServices } from '../services/webServices';
import { UserDetails } from '../model-classes/userDetails';

import { LoginPage } from '../pages/login/login';
import { HomeScreenPage } from '../pages/home-screen/home-screen';
import { FAQPage } from '../pages/f-a-q/f-a-q';
import { ProfilePage } from '../pages/profile/profile';
import { RequestStatusPage } from '../pages/request-status/request-status';
import { ChangePasswordPage } from '../pages/change-password/change-password';

@Component({
    templateUrl: 'app.html'
})
export class MyApp 
{
    @ViewChild(Nav) nav: Nav;
    rootPage:any = LoginPage; 

    pages: Array<{img: string, title: string, component: any}>;
    loader: any;

    constructor(platform: Platform, 
                statusBar: StatusBar, 
                splashScreen: SplashScreen,
                private webServices: WebServices,
                private userDetails: UserDetails,
                private loadingCtrl: LoadingController) 
    {
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
            component: ProfilePage
        },{
            img: '../assets/imgs/icon_request_status.png',
            title: 'Request Status',
            component: RequestStatusPage
        },{
            img: '../assets/imgs/icon_change_password.png',
            title: 'Change Password',
            component: ChangePasswordPage
        },{
            img: '../assets/imgs/icon_faq.png',
            title: 'FAQ',
            component: FAQPage
        }];
        this.loader = loadingCtrl.create();
    }

    openPage(p)
    {
        this.nav.setRoot(p.component);
    }

    logoutTUI()
    {
        this.loader.present();
        this.webServices.logoutWebService(this.userDetails.referral_id, this.userDetails.token).then(
            response => {
                this.loader.dismiss();
                console.log(response);
                this.userDetails = new UserDetails();
                this.nav.popToRoot();
        });
    }
}
