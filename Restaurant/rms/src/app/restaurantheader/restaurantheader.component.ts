import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service'
import{RestaurantModel} from '../../models/restaurant.model'
@Component({
  selector: 'app-restaurantheader',
  templateUrl: './restaurantheader.component.html',
  styleUrls: ['./restaurantheader.component.css']
})
export class RestaurantheaderComponent implements OnInit {

  constructor(private rs:RestService) { }
  details
  id;
  restaurant:RestaurantModel;

  ngOnInit(): void {
    this.id=localStorage.getItem("userid");
    this.rs.restdetails(this.id).subscribe(data=>{
      this.details=data;
      this.restaurant=this.details[0];
      console.log(this.restaurant);
    })   
  }

}
