import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { WebServices } from '../../services/webServices';

import { SearchableListComponent } from '../../components/searchable-list/searchable-list';

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage 
{
    city_name = "Select City";
    cityList = [];

    constructor(public navCtrl: NavController, 
        public navParams: NavParams, 
        private webServices: WebServices,
        private modalCtrl: ModalController) 
    {
        this.cityList = [];
        this.webServices.cityListWebService().then(cityList => {
            this.cityList = cityList.data;
            console.log(this.cityList);
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }

    callRegisterWS(regForm)
    {
    	console.log(regForm.value);
    }

    showPopUp()
    {
        console.log('Popup');
        this.modalCtrl.create('SearchableListComponent').present();
    }
}
