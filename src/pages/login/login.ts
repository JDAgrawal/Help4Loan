import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Slides, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { AuthenticationService } from '../../services/auth';
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
	sldrImages = [];
	registerPage = RegisterPage;
	forgotPasswordPage = ForgotPasswordPage;
	homePage = null;
	regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	
	
  constructor(public navCtrl: NavController, 
							 public navParams: NavParams, 
							 private authService: AuthenticationService, 
							 private alertCtrl: AlertController, 
							 private toastCtrl: ToastController, 
							 private userDetails: UserDetails) 
	{
  }

  ionViewDidLoad() 
	{
    console.log('ionViewDidLoad LoginPage');
		this.authService.sliderWebService().then(response => {
			console.log(response);
			if (response.status == 1)
			{
				this.sldrImages = [];
				response.data.forEach(imageObj =>{
					this.sldrImages.push(imageObj.image_url);
				});
				console.log(this.sldrImages);
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
			//Making WebService Call
			this.authService.loginUserWebService(this.email, this.password).then(
				response =>
				{
					console.log(response);
					if (response.status == 1)
					{
						this.userDetails.generateObject(response.data);
						console.log(this.userDetails);
						let toast = this.toastCtrl.create({
							message: response.msg,
							duration: 3000
						});
						toast.present();
						this.navCtrl.push(this.homePage);
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
