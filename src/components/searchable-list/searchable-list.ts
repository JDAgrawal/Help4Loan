import { Component, ViewChild } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
	selector: 'searchable-list',
	templateUrl: 'searchable-list.html'
})

export class SearchableListComponent 
{

	@ViewChild('PopUp') popUp: any;

	searchQuery: string = '';
	items: any;
	statesList = [];

	constructor(private viewCtrl: ViewController,
				private navParams: NavParams) 
	{
		
	}

	ionViewDidLoad()
	{
		this.items = this.navParams.get('data');
		console.log(this.items);
		this.initializeItems();
	}

	initializeItems() 
	{
		// this.items = [
		// 	'Amsterdam',
		// 	'Bogota',
		// 	'asdfghj',
		// 	'Ahmedabad',
		// 	'Vadodra',
		// 	'Bihar',
		// 	'Mumbai'
		// ];
		this.statesList = [];
		this.items.forEach(element => {
			this.statesList.push(element.name); 
		});
	}

	getItems(ev: any) 
	{
		// Reset items back to all of the items
		this.initializeItems();

		// set val to the value of the searchbar
		const val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') 
		{
			this.statesList = this.statesList.filter((item) => {
		    return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
		  });
		}
	}

	selectCity(state, i)
	{
		console.log(state);
		this.viewCtrl.dismiss(this.items[i]);
	}

	closeModal()
	{
		if (!this.popUp.nativeElement.contains(event.target))
		{
			this.viewCtrl.dismiss();
		}
	}
}
