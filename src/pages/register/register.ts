import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { AlertController, LoadingController, ToastController } from 'ionic-angular';

import { WebServices } from '../../services/webServices';
import { LoginPage } from '../../pages/login/login';
import { SearchableListComponent } from '../../components/searchable-list/searchable-list';

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage 
{
    fname: string;
    lname: string;
    email: string;
    mobile: any;
    city_name = "Select City";
    city_id : any;
    cityList = [];
    regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    loginPage = LoginPage;
    loader: any;
    myModalOptions: ModalOptions = {
        enableBackdropDismiss: false,
        cssClass: 'customOne23'
    };

    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                private webServices: WebServices,
                private modalCtrl: ModalController,
                private alertCtrl: AlertController,
                private loadingCtrl: LoadingController,
                private toastCtrl: ToastController) 
    {
        this.cityList = [];
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.webServices.cityListWebService().then(cityList => {
            this.loader.dismiss();
            this.cityList = cityList.data;
            console.log(this.cityList);
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }

    callRegisterWS()
    {
        if (this.fname == null || this.fname.length == 0) {
            this.alertCtrl.create(
                {
                    message: 'Please enter First Name.',
                    buttons: ['Ok']
                }).present();
        }
        else if (this.lname == null || this.lname.length == 0) {
            this.alertCtrl.create(
                {
                    message: 'Please enter Last Name.',
                    buttons: ['Ok']
                }).present();
        }
        else if (this.email == null || this.email.length == 0) {
            this.alertCtrl.create(
                {
                    message: 'Please enter Email address.',
                    buttons: ['Ok']
                }).present();
        }
        else if (!this.regex.test(this.email)) {
            this.alertCtrl.create(
                {
                    message: 'Please enter valid Email address.',
                    buttons: ['Ok']
                }).present();
        }
        else if (this.mobile == null || this.mobile.length == 0) {
            this.alertCtrl.create(
                {
                    message: 'Please enter Mobile number.',
                    buttons: ['Ok']
                }).present();
        }
        else if (this.city_id == null || this.city_id.length == 0)
        {
            this.alertCtrl.create(
                {
                    message: 'Please select city.',
                    buttons: ['Ok']
                }).present();
        }
        else {
            this.loader = this.loadingCtrl.create();
            this.loader.present();
            //Making WebService Call
            this.webServices.registerUserWebService(this.fname, this.lname, this.email, this.mobile, this.city_id).then(
                response => {
                    this.loader.dismiss();
                    console.log(response);
                    if (response.status == 1) {
                        let toast = this.toastCtrl.create({
                            message: response.msg,
                            duration: 3000
                        });
                        toast.present();
                        this.navCtrl.push(this.loginPage);
                    }
                    else if (response.status == 0) {
                        let toast = this.toastCtrl.create({
                            message: response.msg,
                            duration: 3000
                        });
                        toast.present();
                    }
                    else {
                        this.alertCtrl.create({
                            message: 'Please check your Internet Connectivity!',
                            buttons: ['Ok']
                        }).present();
                    }
                }
            ).catch(error => {
                console.log(error);
            });
        }
    }

    showPopUp()
    {
        // console.log('Popup');
        var modal = this.modalCtrl.create(SearchableListComponent, { data: this.cityList}, this.myModalOptions)
        modal.onDidDismiss(data => {
            console.log(data);
            this.city_name = data.name;
            this.city_id = data.city_id;
        });
        modal.present();
    }

        

}
