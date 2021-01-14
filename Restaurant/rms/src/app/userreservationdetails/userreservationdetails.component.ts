import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { map } from 'rxjs-compat/operator/map';
import {RestService} from '../rest.service';
@Component({
  selector: 'app-userreservationdetails',
  templateUrl: './userreservationdetails.component.html',
  styleUrls: ['./userreservationdetails.component.css']
})
export class UserreservationdetailsComponent implements OnInit {

  constructor( private rt:Router,private rs:RestService) { }
  userid;
  result;
  newresult;
  reportdata;
  details;
  p;
  view:boolean;
  res;
  ngOnInit(): void {
    this.view=false;
    this.userid=localStorage.getItem("userid");
    console.log(this.userid);
    this.rs.displayallrestaurant().subscribe(data=>{
      this.details=data;
    })
    this.rs.userreservationdetails(this.userid).subscribe(data=>{
      this.result=data;
      this.reportdata=this.result[0];
      console.log(JSON.parse(JSON.stringify(this.result)));
      // this.result.forEach(item => {
        // this.res = this.details.filter(element => element._id==item.restid);
        // console.log("restid"+item.restid);
        
        // console.log("res"+JSON.stringify(this.res));
        
        // this.result['restname']=this.res[0].name;
        // this.result['restcity']=this.res[0]['city'];
      // });
      
      // this.result['restname']=this.res.name;
      // this.result.forEach(element => {
      //   this.details.forEach(x => {
      //     if(x._id==element.restid)
      //       { element[]=x.name;
      //         // console.log("naem"+x.name);
      //       }
            
      //   });
      // });

      // console.log("res1"+JSON.stringify(this.result));
    })
    
    
  }
  public reservationreport(resultdata){
    this.view=true;
    // console.log("iiiiiiiiiiii");
    
    // console.log(JSON.stringify(resultdata));
    
    this.reportdata=resultdata;

  }

}
