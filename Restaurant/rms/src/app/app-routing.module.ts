import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RestownerComponent} from './restowner/restowner.component'
import {HomeComponent} from './home/home.component'
import {AdminapprovalComponent} from './adminapproval/adminapproval.component'
import {SignupComponent} from './signup/signup.component'
import {AdminremoverestComponent} from './adminremoverest/adminremoverest.component'
import {RestaddrestaurantComponent} from './restaddrestaurant/restaddrestaurant.component'
import {UserviewrestaurantComponent} from './userviewrestaurant/userviewrestaurant.component'
import {RestadditemComponent} from './restadditem/restadditem.component'
import {RestviewitemComponent} from './restviewitem/restviewitem.component'
import {UserviewitemComponent} from './userviewitem/userviewitem.component'
import { UserviewrestitemComponent} from './userviewrestitem/userviewrestitem.component'
import { UserreservationComponent } from './userreservation/userreservation.component'
import { UserreservationdetailsComponent} from './userreservationdetails/userreservationdetails.component'
import { RestverificationComponent } from './restverification/restverification.component'

const routes: Routes = [
  { path:"",component:HomeComponent},
  { path:"newowner",component:RestownerComponent},
  { path:"approval",component:AdminapprovalComponent},
  { path:"newuser",component:SignupComponent},
  { path:"removerest",component:AdminremoverestComponent},
  { path:"addrest",component:RestaddrestaurantComponent },
  { path:"viewrest",component:UserviewrestaurantComponent},
  { path:"additem",component:RestadditemComponent},
  { path:"restviewitem",component:RestviewitemComponent},
  { path:"userviewitem",component:UserviewitemComponent},
  { path:"userviewrestitem/:restid",component:UserviewrestitemComponent},
  { path:"userreservation/:restid",component:UserreservationComponent},
  { path :"userreservationdetails",component:UserreservationdetailsComponent},
  { path:"restverification",component:RestverificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
