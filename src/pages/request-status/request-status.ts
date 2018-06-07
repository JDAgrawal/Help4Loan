import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WebServices } from '../../services/webServices';
import { UserDetails } from '../../model-classes/userDetails';

@IonicPage()
@Component({
    selector: 'page-request-status',
    templateUrl: 'request-status.html',
})
export class RequestStatusPage
{
    reqStat: string;
    activeArr = [];
    completedArr = [];
    rejectedArr = [];
    pendingArr = [];

    constructor(private navCtrl: NavController, 
                private navParams: NavParams, 
                private webServices: WebServices,
                private userDetails: UserDetails) 
    {
        this.reqStat="active";
        this.segmentChanged()
    }

    ionViewDidLoad() 
    {
        console.log('ionViewDidLoad RequestStatusPage');
    }

    segmentChanged()
    {
        switch (this.reqStat) {
            case "active":
                this.webServices.activeStatusWebService(this.userDetails.referral_id, this.userDetails.token).then(response =>{
                    console.log(response);
                    this.activeArr = response.data;
                });
                break;
            case "completed":
                this.webServices.completedStatusWebService(this.userDetails.referral_id, this.userDetails.token).then(response => {
                    console.log(response);
                });
                break;
            case "rejected":
                this.webServices.rejectedStatusWebService(this.userDetails.referral_id, this.userDetails.token).then(response => {
                    console.log(response);
                });
                break;
            case "pending":
                this.webServices.pendingStatusWebService(this.userDetails.referral_id, this.userDetails.token).then(response => {
                    console.log(response);
                });
                break;
            default:
                console.log('No Tab Selected!');
            break;
        }
    }

}
