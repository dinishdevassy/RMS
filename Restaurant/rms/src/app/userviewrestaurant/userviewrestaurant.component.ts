import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-userviewrestaurant',
  templateUrl: './userviewrestaurant.component.html',
  styleUrls: ['./userviewrestaurant.component.css']
})
export class UserviewrestaurantComponent implements OnInit {

  constructor( private rs:RestService,private rt:Router) { }
  result;
now;
p;
srchkey;
srchterm;
  ngOnInit(): void {
    this.rs.displayrestaurant().subscribe(data=>{
      
      this.result=data;
      this.now=new Date;
      
      console.log(this.result);
      console.log(this.now.getHours());
      
      
      
    })
  }
  public userviewrestitem(restid){
    
    console.log("id"+restid);
    this.rt.navigateByUrl("/userviewrestitem/"+restid)
    
  }
  public userreservation(restid){
    
    console.log("id"+restid);
    this.rt.navigateByUrl("/userreservation/"+restid)
    
  }
  public search(){
    console.log(this.srchkey,this.srchterm);
    this.rs.search(this.srchkey,this.srchterm).subscribe(data=>{
      this.result=data;
    })

  }
  public clearsearch(){
    this.srchkey="";
    this.srchterm="";
    this.ngOnInit();
  }
}
