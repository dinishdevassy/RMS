import { Component, OnInit, Injectable, Inject } from '@angular/core';
//import {SESSION_STORAGE,WebStorageService} from 'angular-webstorage-service'
import {RestService} from '../rest.service';

@Component({
  selector: 'app-adminapproval',
  templateUrl: './adminapproval.component.html',
  styleUrls: ['./adminapproval.component.css']
})
export class AdminapprovalComponent implements OnInit {

  public data:any=[];

  //constructor(@Inject(SESSION_STORAGE) private ws:WebStorageService) { }
    constructor(private rs:RestService){}
  // saveInSession(key,val) : void{
  //   this.ws.set(key,val);
  //   this.data[key]=this.ws.get(key);
  //   }
key="role";
val="admin";
p;
id;
status;
result;
details;
role;
  ngOnInit(): void {

    // this.ws.set(this.key,this.val);
    // this.data[this.key]=this.ws.get(this.key);
      this.rs.viewowner().subscribe(data=>{
        this.result=data;
      })
    }

    /**
     * name
     */
    public approval(a,id) {
      
      if(a==1){
        this.status="Approved";
        this.newrestuser(id);
      }
        
      else
        this.status="Rejected"        
        this.rs.approval(this.status,id).subscribe(data=>{
          this.result=data;
          alert(this.result.msg)
          this.ngOnInit();
        })
    }

    newrestuser(id){
        this.role="rest";
        this.rs.newrestuser(id,this.role).subscribe(data=>{
          this.result=data;
        // this.rs.newuser(this.ownername,this.ownerphno,this.owneremail,this.ownercity,this.ownerpwd,this.role).subscribe(data=>{
        // this.details=data;
        //window.alert(this.result.msg);
        // this.rt.navigateByUrl("/home");
      })   
    }
}
