import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service'

@Component({
  selector: 'app-userviewitem',
  templateUrl: './userviewitem.component.html',
  styleUrls: ['./userviewitem.component.css']
})
export class UserviewitemComponent implements OnInit {

  constructor(private rs:RestService) { }
  result;
  p;
  restaurantdetails;
  restname;
  ngOnInit(): void {

    this.rs.viewallitem().subscribe(data=>{
      this.result=data
      console.log(this.result[0].restid);
    })
    this.rs.displayrestaurant().subscribe(data=>{
      this.restaurantdetails=data;
      this.result.forEach(x => {
        this.restaurantdetails.forEach(y=> {         
          if(x.restid==y._id)
            x.restname=y.name;
        });
      });
    })
  }

}
