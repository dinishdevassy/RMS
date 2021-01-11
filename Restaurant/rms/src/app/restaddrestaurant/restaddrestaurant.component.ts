import { Component, OnInit } from '@angular/core';

// import { FileUploader,FileSelectDirective } from 'ng2-file-upload';
import{ RestaurantModel } from '../../models/restaurant.model';
import {FileUploader} from 'ng2-file-upload';

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

  constructor(
  ) { 
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
  console.log(this.restaurant.name)
  
     this.uploader.uploadAll();
}
}
