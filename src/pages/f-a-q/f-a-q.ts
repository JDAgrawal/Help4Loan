import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserDetails } from '../../model-classes/userDetails';
import { WebServices } from '../../services/webServices';


@IonicPage()
@Component({
	selector: 'page-f-a-q',
	templateUrl: 'f-a-q.html',
})
export class FAQPage 
{
	FAQList: any;
	constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		private userDetails: UserDetails, 
		private webServices: WebServices) 
	{
		this.webServices.faqWebService(this.userDetails.referral_id, this.userDetails.token).then( response => {
			console.log(response);
			this.FAQList = response.data;
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FAQPage');
	}

}
