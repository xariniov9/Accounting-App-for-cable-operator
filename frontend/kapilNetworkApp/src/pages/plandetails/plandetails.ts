import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'page-plan-details',
  templateUrl: 'plandetails.html'
})
export class PlanDetailsPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
    this.item = navParams.get('item');
  }
}
