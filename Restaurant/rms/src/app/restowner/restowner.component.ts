import { Component, OnInit } from '@angular/core';
import{Route, Router} from '@angular/router';
import {RestService} from '../rest.service';
import { hostViewClassName } from '@angular/compiler';

@Component({
  selector: 'app-restowner',
  templateUrl: './restowner.component.html',
  styleUrls: ['./restowner.component.css']
})
export class RestownerComponent implements OnInit {
  
  ownername;
  ownerphno;
  owneremail;
  ownerpwd;
  ownercpwd;
  ownerlicenseno;
  details;
  valid:boolean;
  role;
  ownercity;
  err;
  constructor(private rs:RestService,private rt:Router) { 
    this.ownername="";
    this.ownerphno="";
    this.ownerpwd="";
    this.ownercpwd="";
    this.ownerlicenseno="";
    this.ownercity="";
    this.owneremail="";
  }

  ngOnInit(): void {
    this.err="";
    this.valid=false;
    // this.ownerphno="";
  }
  newowner(){
    this.valid=this.validate();
    if(this.valid)
    {
    this.rs.addowner(this.ownername,this.ownerphno,this.owneremail,this.ownerpwd,this.ownerlicenseno).subscribe(data=>{
      this.details=data;
      console.log(this.details.msg);
      alert("Registered Succesfully");
      this.rt.navigateByUrl("");
    })
  }
  else
    this.ngOnInit();
      
  }
  

  validate(){
    console.log(this.ownerphno);
    
    if((this.ownername=="") || (this.ownername=='undefined')){
      alert("Enter Name");
      // this.err="Enter Name"
      return false;
    }
    if((this.ownerphno=="") || (this.ownerphno.length!=10)){
      alert("Enter Valid phno");
      return false;
    }
    if((this.owneremail=="") || (this.owneremail=='undefined')){
      alert("Enter Email");
      return false;
    }
    if((this.owneremail.includes("@"))==false) 
      {
      alert("Enter Valid email");
      return false;
    }
    if((this.ownerlicenseno=="") || (this.ownerlicenseno=='undefined')){
      alert("Enter License No");
      return false;
    }
    if((this.ownerpwd=="") || (this.ownerpwd=='undefined')){
      alert("Enter Password");
      return false;
    }
    if((this.ownercpwd=="") || (this.ownercpwd=='undefined')){
      alert("Enter Confirm Password");
      return false;
    }
    if(this.ownercpwd!=this.ownerpwd)
      {
        alert("Password not Match...")  
        return false;
      }
      
      // $('').popover(options)
    
      
    return true;
  }
}
