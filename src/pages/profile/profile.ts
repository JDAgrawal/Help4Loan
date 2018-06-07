import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserDetails } from '../../model-classes/userDetails';
import { WebServices } from '../../services/webServices';

@IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage 
{

    fname: string;
    lname: string;
    email: string;
    mobile: string;
    bank_name: string;
    branch_name: string;
    account_no: any;
    ifsc_code: any;
    city_id: any;
    city_name: string;
    city_list = [];

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private userDetails: UserDetails,
                private webServices: WebServices) 
    {
        this.fname = this.userDetails.referral_firstname;
        this.lname = this.userDetails.referral_lastname;
        this.email = this.userDetails.referral_email;
        this.mobile = this.userDetails.referral_mobile;
        if (this.userDetails.bank_name && this.userDetails.bank_name.length)
        {
            this.bank_name = this.userDetails.bank_name;
        }

        if (this.userDetails.bank_name && this.userDetails.bank_name.length) 
        {
            this.branch_name = this.userDetails.branch_name;
        }

        if (this.userDetails.bank_name && this.userDetails.bank_name.length) 
        {
            this.account_no = this.userDetails.bank_account_no;
        }

        if (this.userDetails.bank_name && this.userDetails.bank_name.length) 
        {
            this.ifsc_code = this.userDetails.ifsc_code;
        }

        this.webServices.getCityNameWebService(this.userDetails.city_id).then( cityName => {
            console.log(cityName);
            this.city_name = cityName;
        });

        this.webServices.cityListWebService().then(response => {
            console.log(response);
            this.city_list = response.data;
        })
    }

    ionViewDidLoad() 
    {
        console.log('ionViewDidLoad ProfilePage');
    }

}
