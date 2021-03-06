import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Slides, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { HomeScreenPage } from '../home-screen/home-screen';

import { WebServices } from '../../services/webServices';
import { UserDetails } from '../../model-classes/userDetails';



@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})

export class LoginPage 
{
	@ViewChild(Slides) slides: Slides;


	email: string;
	password: string;
	sldrImages: any;
	registerPage = RegisterPage;
	forgotPasswordPage = ForgotPasswordPage;
	homePage = HomeScreenPage;
	regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	loader: any;
	
	constructor(public navCtrl: NavController, 
				public navParams: NavParams, 
				private webServices: WebServices, 
				private alertCtrl: AlertController, 
				private toastCtrl: ToastController, 
				private userDetails: UserDetails,
				private loadingCtrl: LoadingController) 
	{

	}

	ionViewDidLoad() 
	{
		console.log('ionViewDidLoad LoginPage');
		this.loader = this.loadingCtrl.create();
		this.loader.present();
		this.webServices.loginSliderWebService().then(response => {
			// console.log(response);
			if (response.status == 1)
			{
				this.sldrImages = [];
				response.data.forEach(imageObj =>{
					this.sldrImages.push(imageObj.image_url);
				});
				this.loader.dismiss();
				// console.log(this.sldrImages);
			}
		}).catch(error => {
				console.log(error);
		});
	}

	ionViewWillEnter()
	{
		if (this.slides)
		{
			this.slides.startAutoplay();
		}
	}
	
	ionViewWillLeave()
	{  
 		this.slides.stopAutoplay();
	}
	
	callLoginWS()
	{
		if (this.email == null || this.email.length == 0)
		{
			this.alertCtrl.create(
			{
				message: 'Please enter email id.',
				buttons:['Ok']
			}).present();
		}
		else if (!this.regex.test(this.email))
		{
			this.alertCtrl.create(
			{
				message: 'Please enter valid email id.',
				buttons:['Ok']
			}).present();
		}
		else if (this.password == null || this.password.length == 0)
		{
			this.alertCtrl.create(
			{
				message: 'Please enter password.',
				buttons:['Ok']
			}).present();
		}
		else
		{
			this.loader = this.loadingCtrl.create();
			this.loader.present();
			//Making WebService Call
			this.webServices.loginUserWebService(this.email, this.password).then(
				response =>
				{
					this.loader.dismiss();
					// console.log(response);
					if (response.status == 1)
					{
						this.userDetails.generateObject(response.data);
						console.log(this.userDetails);
						let toast = this.toastCtrl.create({
							message: response.msg,
							duration: 3000
						});
						toast.present();
						this.navCtrl.push(this.homePage, {city_id: this.userDetails.city_id, _token: this.userDetails.token, referral_id: this.userDetails.referral_id});
					}
					else if (response.status == 0)
					{
						let toast = this.toastCtrl.create({
							message: response.msg,
							duration: 3000
						});
						toast.present();
					}
					else
					{
						this.alertCtrl.create({
							message: 'Please check your Internet Connectivity!',
							buttons:['Ok']
						}).present();
					}
				}
			).catch(error => {
				console.log(error);
			});
		}	
	}
	
}
