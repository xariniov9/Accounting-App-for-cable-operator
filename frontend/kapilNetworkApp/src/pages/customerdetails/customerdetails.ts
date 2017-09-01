import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

import { UpdateCustomer } from '../updatecustomer/updatecustomer';
//import { RegisteredPlan } from '../registeredplan/registeredplan';
import { CustomerListPage } from '../customerlist/customerlist';


@Component({
  selector: 'page-customer-details',
  templateUrl: 'customerdetails.html'
})
export class CustomerDetailsPage {
  item: any;
  lastPayment: any;
  amountLeft: any;
  plan: any;
  pricePerMonth: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
    this.item = navParams.get('item');
    var t = this.item.paymentTill;
    this.lastPayment = new Date(t).toDateString();
    this.plan = 0;
    this.pricePerMonth = 0;
    var curdt = new Date().valueOf();
    var days = this.daydiff(t, curdt);


    this.http.get("/base/api/plan/"+this.item.planRegistered).subscribe (data => {
        this.plan = data.json();
        this.pricePerMonth = this.plan.price;
        this.amountLeft = Math.round(1.0 * (this.plan.price/30.0) * days);
    }, error => {
      console.log(error);
    });
//    console.log(this.plan);
  }

  daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
  }

  DeleteCustomer(event, item){
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    this.navCtrl.setRoot(CustomerListPage);
    return this.http.delete('/base/api/customer/' + item._id, options).subscribe((ok)=> {
      console.log(ok);
    })
  }
  Updatecustomer(event, item){
    this.navCtrl.push(UpdateCustomer, {
      item : item
    });
  }
  /*Registeredplan(event, item){
    this.navCtrl.push(RegisteredPlan, {
      item : item
    });
  }*/

}
