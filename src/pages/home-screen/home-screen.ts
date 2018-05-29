import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { UserDetails } from '../../model-classes/userDetails';
import { WebServices } from '../../services/webServices';

@IonicPage()
@Component({
	selector: 'page-home-screen',
	templateUrl: 'home-screen.html',
})
export class HomeScreenPage 
{

	@ViewChild(Slides) slides: Slides;

	cityId: any;
	city: string;
	sldrImages = [];
	

	constructor(public navCtrl: NavController, 
		public navParams: NavParams, 
		private userDetails: UserDetails, 
		private webServices: WebServices) 
	{
		this.cityId = navParams.data.city_id;
		console.log(this.cityId);
		this.webServices.getCityNameWebService(this.cityId).then( cityName => {
			this.city = cityName;
		});
	}

	ionViewDidLoad() 
	{
		console.log('ionViewDidLoad HomeScreenPage');
		this.webServices.homeSliderWebService().then(response => {
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

}
