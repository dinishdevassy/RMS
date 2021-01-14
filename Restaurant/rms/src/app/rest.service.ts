import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestaurantModel} from '../models/restaurant.model';
import {ItemModel} from '../models/item.model';
import {ReservationModel} from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
 

  constructor(private hc:HttpClient) { }
  
  addowner(ownername, ownerphno, owneremail, ownerpwd,ownerlicenseno) {
    let url="http://localhost:8080/rest/addowner";
    return this.hc.post(url,{ownername:ownername,ownerphno:ownerphno,owneremail:owneremail,ownerpswd:ownerpwd,ownerlicenseno:ownerlicenseno})
  }
  viewowner(){
    let url="http://localhost:8080/admin/getowner";
    return this.hc.get(url);
  }
  approval(status,id){
    let url="http://localhost:8080/admin/approval";
    return this.hc.post(url,{status:status,id:id})
  }
  newuser(username,phno,email,city,pswd,role){
    let url="http://localhost:8080/rest/newuser";
    return this.hc.post(url,{username:username,phno:phno,email:email,city:city,pswd:pswd,role:role})
  }
  newrestuser(id,role){
    let url="http://localhost:8080/admin/newrestuser";
    return this.hc.post(url,{id:id,role:role});
  }
  public newrestaurant(restaurant:RestaurantModel){
    let url="http://localhost:8080/admin/addrest";
    return this.hc.post(url,{restaurant})

  }
  public displayallrestaurant() {
    let url="http://localhost:8080/rest/displayallrestaurant";
    return this.hc.get(url);
  }
  public displayrestaurant() {
    let url="http://localhost:8080/rest/viewrestaurant";
    return this.hc.get(url);
  }
  public changerestaurantstatus(restid,caption){
    let data = { restid:restid,caption:caption }
    let url="http://localhost:8080/rest/changerestaurantstatus";
    return this.hc.post(url,data);
  }
  public restdetails(userid){
    let data = { userid: userid }
    let url="http://localhost:8080/rest/getrest";
    return this.hc.post(url,data);  
  }

  public login(uname,pwd){
    // console.log("service");
    let data = { username: uname, password: pwd }
    let url="http://localhost:8080/user/login";
    return this.hc.post(url,data);
  }
  
  public viewitem(restid){
    let data={restid:restid}
    let url="http://localhost:8080/rest/viewitem";
    return this.hc.post(url,data);  
  }
  public viewallitem(){
    let url="http://localhost:8080/rest/viewallitem";
    return this.hc.get(url);  
  }
  public restupdateitem(itemid,item:ItemModel){
    console.log("iii"+JSON.stringify(item));
    let data={itemid:itemid,item:item}
    let url="http://localhost:8080/rest/updateitem";
    return this.hc.post(url,data);
  }
  public checkavailability(restid){
    let data={restid:restid}
    let url="http://localhost:8080/rest/checkavailability";
    return this.hc.post(url,data);
  }
   public seatdetails(restid){
    let data={restid:restid}
    let url="http://localhost:8080/rest/seatdetails";
    return this.hc.post(url,data);
   }
   public tablereservation(reservation:ReservationModel){
     console.log("hhd");
     
     let data={reservation:reservation}
     let url="http://localhost:8080/rest/reservetable";
     return this.hc.post(url,data);
   }
   public userreservationdetails(userid){
    // console.log("hhd");
    
    let data={userid:userid}
    let url="http://localhost:8080/rest/newuserreservationdetails";
    return this.hc.post(url,data);
  }
  public verify(id){
    // console.log(otp +" ss "+ot);
    let data={reservationid:id}
    let url="http://localhost:8080/rest/verify";
    return this.hc.post(url,data);
  }
  public userdetails(){
    // console.log(otp +" ss "+ot);
    let url="http://localhost:8080/user/userdetails";
    return this.hc.get(url);
  }
  public search(srchkey,srchterm){
    let data={srchkey:srchkey,srchterm:srchterm}
    let url="http://localhost:8080/rest/search";
    return this.hc.post(url,data);
  }
}
