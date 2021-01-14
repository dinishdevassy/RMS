import { Component, OnInit, inject, Inject } from '@angular/core';
import{Router} from '@angular/router'
import {RestService} from '../rest.service'
// import {SESSION_STORAGE,WebStorageService} from 'angular-webstorage-service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @Inject(SESSION_STORAGE) private ws:WebStorageService
  constructor( private rs:RestService,private rt:Router) { 
    
  }
  uname
  pwd
  result;
  details;
  role="";
  id;
  err;
  view_err:boolean;
  view_err1:boolean;
  ngOnInit(): void {
    this.view_err=false;
    this.view_err1=true;
    this.role="";
    localStorage.setItem("username","")
    localStorage.setItem("role","");
    localStorage.setItem("userid","")

  }
  key="role";
  
  value;
  public data:any=[];
  login(){
   // this.ws.set(this.key,this.value)
   this.rs.login(this.uname,this.pwd).subscribe(data=>{
     this.result=data;

    //  console.log('length',this.result.length);
     if(this.result.length>0)
        this.my_nav(this.result)  
      else
      {
      //  alert("Invalid Username or Password")

      this.err="Invalid Username or password"
       this.view_err=true;
        this.uname="";
        this.pwd=""
        this.view_err1=!this.view_err;
      
      }

   })
   

  }
  my_nav(result){
    console.log('username',this.uname);
    

    this.view_err=true;
    this.view_err1=!this.err;
    this.role=result[0].role;
    this.uname=result[0].username;
    this.id=result[0]._id;
    localStorage.setItem("username",this.uname)
    localStorage.setItem("role",this.role);
    localStorage.setItem("userid",this.id)
    if(this.role==='admin')
      {
          this.rt.navigateByUrl("approval")
      }
    else if(this.role==='rest'){

      this.rs.restdetails(this.id).subscribe(data=>{
        this.details=data;
      if(this.details.length>0)
        {
          localStorage.setItem("restid",this.details[0]._id)
          this.rt.navigateByUrl("additem")
        }
       else
        this.rt.navigateByUrl("addrest")
      })
      // save rest id
      
      // if(this.details.length
      
    }
    else if(this.role==='user'){
      this.rt.navigateByUrl("viewrest")
    }
    else{
      // alert("Invalid UserName Or Password");
      this.rt.navigateByUrl("");
    }
  }
}
