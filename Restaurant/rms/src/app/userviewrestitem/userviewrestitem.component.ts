import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service'
import {Router,ActivatedRoute} from '@angular/router'
import { RestaurantModel } from '../../models/restaurant.model'


@Component({
  selector: 'app-userviewrestitem',
  templateUrl: './userviewrestitem.component.html',
  styleUrls: ['./userviewrestitem.component.css']
})
export class UserviewrestitemComponent implements OnInit {

  restaurant:RestaurantModel;

  constructor(private rs:RestService,private rt:Router,private ar:ActivatedRoute) { }
  result;
  p;
  restid;
  restname;
  restcity;
  details;
  ngOnInit(): void {
    this.restid=this.ar.snapshot.paramMap.get("restid");
    console.log(this.restid);
    this.rs.displayallrestaurant().subscribe(data=>{
      this.details=data;
      this.details.forEach(element => {
        if(element._id==this.restid)
          {
            this.restaurant=element;
            console.log(this.restaurant.name);
            
          }
      });
    })
    this.rs.viewitem(this.restid).subscribe(data=>{
      this.result=data
      console.log(this.result); 
    })
  }

}
