import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {PlanDetailsPage} from '../plandetails/plandetails';
import { Http }          from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-planlist',
  templateUrl: 'planlist.html'
})

export class PlanListPage {
  items
  constructor (private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.http.get("/base/api/plan").subscribe (data => {
      this.items = data.json();
    }, error => {
      console.log(error);
    })
  }
  itemTapped(event, item) {
    this.navCtrl.push(PlanDetailsPage, {
      item: item,
      parentPage: this
    });
  }
}
