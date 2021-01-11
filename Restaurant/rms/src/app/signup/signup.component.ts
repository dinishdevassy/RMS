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
  constructor(private rs:RestService,private  rt:Router) { }

  ngOnInit(): void {
  }

  newuser(){
    this.valid=this.validate();
    if(this.valid)
    {
      this.role="user";
      this.rs.newuser(this.username,this.phno,this.email,this.city,this.pswd,this.role).subscribe(data=>{
      this.result=data;
      window.alert(this.result.msg);
      this.rt.navigateByUrl("/home");
    })
    }
    else
      alert("Password not Match...")  
    
  }

  validate(){
    if(this.pswd==this.cpswd )
      return true;
    return false;
  }
}

