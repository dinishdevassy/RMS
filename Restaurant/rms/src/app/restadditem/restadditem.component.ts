import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';
import {RestService } from '../rest.service'

import {ItemModel} from '../../models/item.model';

const UploadURL='http://localhost:8080/rest/additem';

@Component({
  selector: 'app-restadditem',
  templateUrl: './restadditem.component.html',
  styleUrls: ['./restadditem.component.css']
})
export class RestadditemComponent implements OnInit {
  item:ItemModel;
  i1:ItemModel;

  public uploader: FileUploader = new FileUploader({
    url: UploadURL,
     itemAlias: 'image',
     method:'POST'
    });
username;
uid;
role;
restid;
result;
p;
itemid;
update_flag:boolean;
  constructor( private rt:Router,private rs:RestService) {
    this.item=new ItemModel(null,null,null,null,null);
    this.i1=new ItemModel(null,null,null,null,null);
   }

  ngOnInit(): void {
    this.update_flag=false;
    this.username=localStorage.getItem("username");
    this.role=localStorage.getItem("role");
    this.restid=localStorage.getItem("restid");
    console.log(this.restid);
    
    this.getitem()


    if(this.role!='rest' && this.role!='admin'){

      alert("You are not allowed to enter this page Please login again")
      this.rt.navigateByUrl("");
    }
    this.item.restid=this.restid;
    this.uploader.onAfterAddingFile=(file)=>{
      file.withCredentials=false;
    }
  } 
  // saveitem(){
  //   if(this.update_flag==true)
  //     this.edititem(id,itemname,status)
  //   else
  //     this.additem()
  // }
      edititem(id,itemname,rate,status){
       this.update_flag=true;
        this.item=new ItemModel(null,null,null,null,null);
        this.item.itemname=itemname;
        this.item.rate=rate;
        this.item.status=status;
        this.itemid=id;

       
        
      }
      getitem(){
        this.rs.viewitem(this.restid).subscribe(data=>{
          this.result=data
          console.log(this.result);
           
        })
      }
      additem(){
        console.log(this.update_flag);
        if(this.update_flag==true)        
        {
          this.update_flag=false;
          // console.log(this.itemid);
          this.rs.restupdateitem(this.itemid,this.item).subscribe(data=>{
            this.result=data;
          })
        }
        else
        {
        this.uploader.onBuildItemForm=(file:any,form:any)=>{
          form.append('itemname',this.item.itemname);
          form.append('restid',this.item.restid);
          form.append('rate',this.item.rate);
          form.append('image',this.item.image);
          form.append('status',this.item.status);
        }
        console.log(this.item);
        

           this.uploader.uploadAll();
           
          //  this.rt.navigateByUrl("/additem"); 
           
        }
        
        this.ngOnInit();
      }

}
