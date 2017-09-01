import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Register Student</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
    <form [formGroup]="todo" (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>Name</ion-label>
        <ion-input type="text" formControlName="name"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Phone</ion-label>
        <ion-input type="text" formControlName="phone"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Plan</ion-label>
        <ion-input type="text" formControlName="plan"></ion-input>
      </ion-item>


      <button ion-button type="submit" [disabled]="!todo.valid">Submit</button>
    </form>
    </ion-content>
  `
})
export class RegisterCustomer {
  private todo : FormGroup;

  constructor(private http:Http, private formBuilder: FormBuilder ) {
    this.todo = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      plan: ['', Validators.required],
      paymentTill: new Date().valueOf()
    });
    this.http = http;
  }
  logForm(){
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    let body = this.todo.value;
    this.todo.reset();
    return this.http.post('/base/api/customer', body, options).toPromise().then(response => response.json(), this.handleError);
  }
  handleError(error) {
    console.log(error);
    return error.json().message || 'Server error, please try again later';
  }
}
