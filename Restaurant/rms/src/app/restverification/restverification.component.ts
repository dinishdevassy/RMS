import { Component, OnInit } from '@angular/core';
import { RestService} from '../rest.service'

@Component({
  selector: 'app-restverification',
  templateUrl: './restverification.component.html',
  styleUrls: ['./restverification.component.css']
})
export class RestverificationComponent implements OnInit {

  constructor( private rs:RestService) { }
  restid;
  result;
  newresult;
  details;
  usrdetails;
  p;
  
  ngOnInit(): void {
    this.restid=localStorage.getItem("restid");
    this.rs.userdetails().subscribe(data=>{
      this.usrdetails=data;
    })
    this.rs.seatdetails(this.restid).subscribe(data=>{
      this.details=data;
      console.log("newres"+        JSON.stringify(this.details)      );
    });
    this.rs.checkavailability(this.restid).subscribe(data=>{
      this.result=data 
      this.newresult=(this.result).filter(item=>item.status=='Reserved');
      // console.log("newres"+        JSON.stringify(this.result)      );
      // console.log("qwe"+JSON.stringify(this.details));
      this.newresult.forEach(element => {
        element['enteredOTP']="";
        this.usrdetails.forEach(x => {
          if(x['_id']==element['userid'])
          {
            element['usrname']=x.username;
            element['usrphno']=x.phno;
          }
        })
      });
    });
  }



// ---------------------------
// this.usrdetails.forEach(x => {
//   if(x['_id']=element['userid'])
//   {
//     element['usrname']=x.username;
//     element['usrphno']=x.phno;

// //   } 
// console.log("sdds"+JSON.stringify(this.usrdetails));
//  element['seattype']=JSON.stringify(element.tablelist)
// });
// //   -----------------------


  public verify(i){
    // console.log(i.otp+"ss"+JSON.stringify(i.enteredOTP));
    if(i.otp==i.enteredOTP)
    {
    this.rs.verify(i._id).subscribe(data=>{
      this.result=data;
    })
  }
  else
    alert("Verification Failed...")
  this.ngOnInit();
  }

}
