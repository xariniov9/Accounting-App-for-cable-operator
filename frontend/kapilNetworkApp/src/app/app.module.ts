import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { CustomerListPage } from '../pages/customerlist/customerlist';
import { CustomerDetailsPage } from '../pages/customerdetails/customerdetails';
import { UpdateCustomer } from '../pages/updatecustomer/updatecustomer';
import { RegisterCustomer} from "../pages/registercustomer/registercustomer";

import  { RegisterPlan} from "../pages/registerplan/registerplan";
import  { PlanListPage } from "../pages/planlist/planlist";
import { PlanDetailsPage} from "../pages/plandetails/plandetails";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CustomerListPage,
    CustomerDetailsPage,
    UpdateCustomer,
    RegisterCustomer,
    RegisterPlan,
    PlanListPage,
    PlanDetailsPage
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CustomerListPage,
    CustomerDetailsPage,
    UpdateCustomer,
    RegisterCustomer,
    RegisterPlan,
    PlanListPage,
    PlanDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
