import { Component, OnInit } from '@angular/core';

// import { FileUploader,FileSelectDirective } from 'ng2-file-upload';
import{ RestaurantModel } from '../../models/restaurant.model';
import {FileUploader} from 'ng2-file-upload';
import { Router} from '@angular/router'

const UploadURL='http://localhost:8080/rest/addrest';

@Component({
  selector: 'app-restaddrestaurant',
  templateUrl: './restaddrestaurant.component.html',
  styleUrls: ['./restaddrestaurant.component.css']
})
export class RestaddrestaurantComponent implements OnInit {
  restaurant:RestaurantModel;
  public uploader: FileUploader = new FileUploader({
    url: UploadURL,
     itemAlias: 'image',
     method:'POST'
    });

  constructor( private rt:Router ) { 
    let seats={
            seat_1:0,
             seat_2:0,
             seat_4:0,
             seat_6:0,
             seat_8:0,
             seat_10:0,
    }
    this.restaurant=new RestaurantModel(null,null,null,null,null,null,null,null,seats,null,null);
  }
 
  valid:boolean;
// name;
// phno;
// email;
// opentime;
// closetime
// image;
// city;
// star;
// tablecount;
// tablelist;
// status;

result:any;

  ngOnInit(): void {
    this.valid=false;
    this.restaurant.ownerid=localStorage.getItem("userid");
    this.uploader.onAfterAddingFile=(file)=>{
      file.withCredentials=false;
    }
    }
    // this.uploader.onCompleteItem=(item:any,response:any,status:any,headers:any)=> {
    //   console.log('FileUpload:uploaded:', item, status, response);
    //   alert("Image Uploaded Succcesfully...")
    // };
  
public addrest(){
  this.valid=this.validate();
  if(this.valid){

    this.uploader.onBuildItemForm=(file:any,form:any)=>{
      form.append('name',this.restaurant.name);
      form.append('phno',this.restaurant.phno);
      form.append('email',this.restaurant.email);
      form.append('opentime',this.restaurant.opentime);
      form.append('closetime',this.restaurant.closetime);
      form.append('image',this.restaurant.image);
      form.append('city',this.restaurant.city);
      form.append('star',this.restaurant.star);
      form.append('ownerid',this.restaurant.ownerid);
      //form.append('tablecount',this.restaurant.tablecount);
      form.append('tablelist.seat_1',this.restaurant.tablelist.seat_1);
      form.append('tablelist.seat_2',this.restaurant.tablelist.seat_2);
      form.append('tablelist.seat_4',this.restaurant.tablelist.seat_4);
      form.append('tablelist.seat_6',this.restaurant.tablelist.seat_6);
      form.append('tablelist.seat_8',this.restaurant.tablelist.seat_8);
      form.append('tablelist.seat_10',this.restaurant.tablelist.seat_10);
      // seat_1:this.restaurant.tablelist.seat_1});
      form.append('status','Active');
    }
    console.log(this.restaurant);
    console.log(this.restaurant.name);
    
    this.uploader.uploadAll();
    alert("Restaurant Added Succesfully")
    this.rt.navigateByUrl("additem");
  }
}
validate(){
  if(this.restaurant.name==null){
    alert("Enter Restaurant Name");
    return false;
  }
  if(this.restaurant.phno==null){
    alert("Enter Restaurant PhNo");
    return false;
  }
  if(String(this.restaurant.phno).length!=10){
    console.log(String(this.restaurant.phno).length);
    alert("Enter Valid PhNo");
    return false;
  }
  if(this.restaurant.opentime==null){
    alert("Enter Restaurant Opening Time");
    return false;
  }
  if(this.restaurant.email==null){
    alert("Enter Email");
    return false;
  }
  if((this.restaurant.email.includes("@"))==false) 
  {
  alert("Enter Valid email");
  return false;
  }
  if(this.restaurant.closetime==null){
    alert("Enter Restaurant Closing Time");
    return false;
  }
  if(this.restaurant.city==null){
    alert("Enter City");
    return false;
  }
  if(this.restaurant.star==null){
    alert("Enter Star");
    return false;
  }
  let sum=0;
  sum=this.restaurant.tablelist.seat_1+this.restaurant.tablelist.seat_2+this.restaurant.tablelist.seat_4+this.restaurant.tablelist.seat_6+this.restaurant.tablelist.seat_8+this.restaurant.tablelist.seat_10;
  console.log(sum);
  if(sum<=0){
    alert("Enter Seat Details");
    return false;
  }
  if(this.restaurant.image==null){
    alert("Please Upload Image");
    return false;
  }
  return true;
}

}
