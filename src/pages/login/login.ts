import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { NgForm } from '@angular/forms';

import { AuthenticationService } from '../../services/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage 
{
	email: string;
	password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthenticationService) 
	{
  }

  ionViewDidLoad() 
	{
    console.log('ionViewDidLoad LoginPage');
  }

	callLoginWS()
	{
		this.authService.loginUserWebService(this.email, this.password);
	}
	
}
