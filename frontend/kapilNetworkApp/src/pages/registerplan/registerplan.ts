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
        <ion-title>Register Plan</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
    <form [formGroup]="todo" (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>Name</ion-label>
        <ion-input type="text" formControlName="name"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Price</ion-label>
        <ion-input type="text" formControlName="price"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Description</ion-label>
        <ion-input type="text" formControlName="description"></ion-input>
      </ion-item>


      <button ion-button type="submit" [disabled]="!todo.valid">Submit</button>
    </form>
    </ion-content>
  `
})
export class RegisterPlan {
  private todo : FormGroup;

  constructor(private http:Http, private formBuilder: FormBuilder ) {
    this.todo = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
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
    return this.http.post('/base/api/plan', body, options).toPromise().then(response => response.json(), this.handleError);
  }
  handleError(error) {
    console.log(error);
    return error.json().message || 'Server error, please try again later';
  }
}
