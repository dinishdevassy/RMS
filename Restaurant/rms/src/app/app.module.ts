import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FileUploadModule} from 'ng2-file-upload';
import {NgxPaginationModule} from 'ngx-pagination'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestownerComponent } from './restowner/restowner.component'
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { RestheaderComponent } from './restheader/restheader.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { HomeComponent } from './home/home.component';
import { AdminapprovalComponent } from './adminapproval/adminapproval.component';
import { SignupComponent } from './signup/signup.component';
import { AdminremoverestComponent } from './adminremoverest/adminremoverest.component';
import { RestaddrestaurantComponent } from './restaddrestaurant/restaddrestaurant.component';
import { UserviewrestaurantComponent } from './userviewrestaurant/userviewrestaurant.component';
import { RestadditemComponent } from './restadditem/restadditem.component';
import {RestaurantheaderComponent} from './restaurantheader/restaurantheader.component';
import { RestviewitemComponent } from './restviewitem/restviewitem.component';
import { UserviewitemComponent } from './userviewitem/userviewitem.component';
import { UserviewrestitemComponent } from './userviewrestitem/userviewrestitem.component';
import { UserreservationComponent } from './userreservation/userreservation.component';
import { UserreservationdetailsComponent } from './userreservationdetails/userreservationdetails.component';
import { RestverificationComponent } from './restverification/restverification.component';



@NgModule({
  declarations: [
    AppComponent,
    RestownerComponent,
    AdminheaderComponent,
    RestheaderComponent,
    UserheaderComponent,
    HomeComponent,
    AdminapprovalComponent,
    SignupComponent,
    AdminremoverestComponent,
    RestaddrestaurantComponent,
    UserviewrestaurantComponent,
    RestadditemComponent,
    RestaurantheaderComponent,
    RestviewitemComponent,
    UserviewitemComponent,
    UserviewrestitemComponent,
    UserreservationComponent,
    UserreservationdetailsComponent,
    RestverificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    NgxPaginationModule
    // StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
