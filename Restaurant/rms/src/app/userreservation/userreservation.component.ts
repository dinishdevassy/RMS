import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import { Router,ActivatedRoute} from '@angular/router';


import {ReservationModel} from '../../models/reservation.model'

@Component({
  selector: 'app-userreservation',
  templateUrl: './userreservation.component.html',
  styleUrls: ['./userreservation.component.css']
})
export class UserreservationComponent implements OnInit {
  reservation:ReservationModel;

  constructor(private rs:RestService,private ar:ActivatedRoute,private rt:Router) { 
    let seats={
      seat_1:0,
       seat_2:0,
       seat_4:0,
       seat_6:0,
       seat_8:0,
       seat_10:0,
}
this.reservation=new ReservationModel(null,null,null,null,null,seats,null);
  }
  details;
  result;
  restid;
  userid;
  seattype;
  name;
  city;
  maxtime;
  mintime;
  otp;
  status;
  ngOnInit(): void {
    // this.restid=localStorage.getItem("restid");
    this.restid=this.ar.snapshot.paramMap.get("restid");
    console.log(this.restid);
    this.userid=localStorage.getItem("userid");

    console.log(this.restid);
    console.log("ds"+this.userid);
    
    
    this.rs.seatdetails(this.restid).subscribe(data=>{
      this.result=data

      this.name=this.result[0].name;
      this.city=this.result[0].city;
      this.maxtime=this.result[0].closetime;
      this.maxtime=parseInt(this.maxtime)+12;
      this.mintime=this.result[0].opentime;
      this.seattype=this.result[0].tablelist;
      console.log(this.maxtime);
      
      // this.reservation.otp=1234;
      this.reservation.status="Reserved";
      this.reservation.restid=this.restid;
      this.reservation.userid=this.userid;

      // console.log("gg"+JSON.stringify(this.result));
    })
  }
  public tablereservation(){
    console.log(this.reservation)
    var val = Math.floor(1000 + Math.random() * 9000);
    this.reservation.otp=val;
    // console.log(val);
    this.rs.tablereservation(this.reservation).subscribe(data=>{
      this.details=data;
    })
    alert("Table Reserved Succesfully...");
    this.rt.navigateByUrl("/userreservationdetails");

  }

  public checkavailability(){
    var det;
    this.rs.seatdetails(this.restid).subscribe(data=>{
      this.result=data
      this.seattype=this.result[0].tablelist  
    });
    var seattype1 ;
    var tempseattype;
    this.rs.checkavailability(this.restid).subscribe(data=>{
      this.details=data;
      console.log(this.details);
      this.details.forEach(element => {
        if(element.status=="Reserved"){
            if((element.date==this.reservation.date) && (element.time==this.reservation.time)){
              console.log("asc");
              console.log(JSON.stringify(this.seattype));
              tempseattype=element.tablelist;
              this.seattype.seat_1=this.seattype.seat_1-tempseattype.seat_1;
              this.seattype.seat_2=this.seattype.seat_2-tempseattype.seat_2;
              this.seattype.seat_4=this.seattype.seat_4-tempseattype.seat_4;
              this.seattype.seat_6=this.seattype.seat_6-tempseattype.seat_6;
              this.seattype.seat_8=this.seattype.seat_8-tempseattype.seat_8;
              this.seattype.seat_10=this.seattype.seat_10-tempseattype.seat_10;
                console.log(JSON.stringify(this.seattype));
                
              }
              
            }
        
      });
      
    })
    
    
  }

}
