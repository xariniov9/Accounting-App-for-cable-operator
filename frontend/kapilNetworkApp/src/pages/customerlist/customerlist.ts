import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {CustomerDetailsPage} from '../customerdetails/customerdetails';
import { Http }          from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-customerlist',
  templateUrl: 'customerlist.html'
})

export class CustomerListPage {
  items
  constructor (private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.http.get("/base/api/customer").subscribe (data => {
      this.items = data.json();
    }, error => {
      console.log(error);
    })
  }
  itemTapped(event, item) {
    this.navCtrl.push(CustomerDetailsPage, {
      item: item,
      parentPage: this
    });
  }
}
