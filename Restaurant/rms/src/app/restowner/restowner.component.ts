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
  constructor(private rs:RestService,private rt:Router) { }

  ngOnInit(): void {
  }
  newowner(){
    this.valid=this.validate();
    if(this.valid)
    {
    this.rs.addowner(this.ownername,this.ownerphno,this.owneremail,this.ownerpwd,this.ownerlicenseno).subscribe(data=>{
      this.details=data;
      console.log(this.details.msg);
      window.alert(this.details.msg);
      
      this.rt.navigateByUrl("/home");
    })
  }
  else
    alert("Password not Match...")  
      
  }
  

  validate(){
    if(this.ownercpwd==this.ownerpwd)
      return true;
    return false;
  }
}
