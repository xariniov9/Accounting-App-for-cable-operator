import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import { NavController, NavParams } from 'ionic-angular';
import { CustomerListPage } from '../customerlist/customerlist';

@Injectable()
@Component({
  template: `

    <ion-content>
    <form [formGroup]="todo" (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>Name</ion-label>
        <ion-input type="text" formControlName="name" value = {{item.name}}></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Phone</ion-label>
        <ion-input type="text" formControlName="phone" value = {{item.phone}}></ion-input>
      </ion-item>
      <button ion-button type="submit" [disabled]="!todo.valid">Submit</button>
    </form>
    <p></p>
    <button small text-center color="primary" ion-item (click)="Back()">Back</button>
    </ion-content>
  `
})
export class UpdateCustomer {
  private todo : FormGroup;
  item : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http, private formBuilder: FormBuilder ) {
    this.item = this.navParams.get('item');
    this.todo = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.http = http;
  }

  logForm(){
    var item = this.navParams.get('item');
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    let body = this.todo.value;
    this.navCtrl.setRoot(CustomerListPage);
    return this.http.put('/base/api/customer/'+item._id, body, options).toPromise().then(response => response.json(), this.handleError);
  }

  handleError(error) {
    console.log(error);
    return error.json().message || 'Server error, please try again later';
  }
  Back(){
    this.navCtrl.pop();
  }
}
