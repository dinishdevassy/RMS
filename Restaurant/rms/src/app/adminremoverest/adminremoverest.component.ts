import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service'

@Component({
  selector: 'app-adminremoverest',
  templateUrl: './adminremoverest.component.html',
  styleUrls: ['./adminremoverest.component.css']
})
export class AdminremoverestComponent implements OnInit {

  constructor( private rs:RestService) { }
  result;
  details;
  p;
  ngOnInit(): void {
    this.rs.displayallrestaurant().subscribe(data=>{
      this.result=data;
      this.result.forEach(element => {      
        if(element.status=='Active')
        element.caption=' Reject  '
        else{
          console.log(element.status);
          element.caption='Activate'
        }
      });
    })
  }
  public changestatus(restid,caption){
    // console.log(restid +" "+caption);
    
    this.rs.changerestaurantstatus(restid,caption).subscribe(data=>{
      this.details=data;
    })
    this.ngOnInit();
  }
}
