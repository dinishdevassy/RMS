import { Component, OnInit } from '@angular/core';

import {RestService} from '../rest.service'
import {Route,Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username;
  phno;
  email;
  city;
  pswd;
  cpswd;
  result;
  role;
  valid:boolean;
  constructor(private rs:RestService,private  rt:Router) {
     
    this.username="";
    this.phno="";
    this.email="";
    this.city="";
    this.pswd="";
    this.cpswd="";
  }

  ngOnInit(): void {
    this.valid=false;
  }

  newuser(){
    this.valid=this.validate();
    if(this.valid)
    {
      this.role="user";
      this.rs.newuser(this.username,this.phno,this.email,this.city,this.pswd,this.role).subscribe(data=>{
      this.result=data;
      window.alert(this.result.msg);
      this.rt.navigateByUrl("");
    })
    }
    // else
    //   alert("Password not Match...")  
    
  }

  // validate(){
  //   if(this.pswd==this.cpswd )
  //     return true;
  //   return false;
  // }
  validate(){
    // console.log(this.ownerphno);
    
    if((this.username=="") || (this.username=='undefined')){
      alert("Enter Name");
      return false;
    }
    if((this.phno=="") || (this.phno.length!=10)){
      alert("Enter Valid phno");
      return false;
    }
    if((this.email=="") || (this.email=='undefined')){
      alert("Enter Email");
      return false;
    }
    if((this.email.includes("@"))==false) 
      {
      alert("Enter Valid email");
      return false;
    }
    if((this.city=="") || (this.city=='undefined')){
      alert("Enter City");
      return false;
    }
    if((this.pswd=="") || (this.pswd=='undefined')){
      alert("Enter Password");
      return false;
    }
    if((this.cpswd=="") || (this.cpswd=='undefined')){
      alert("Enter Confirm Password");
      return false;
    }
    if(this.cpswd!=this.pswd){
        alert("Password not Match...")  
        return false;
    }
    
      
    return true;
  }

}

