import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service'

@Component({
  selector: 'app-restviewitem',
  templateUrl: './restviewitem.component.html',
  styleUrls: ['./restviewitem.component.css']
})
export class RestviewitemComponent implements OnInit {

  constructor(private rs:RestService) { }
  result;
  restid;
  p;
  ngOnInit(): void {
    this.restid=localStorage.getItem("restid");
    
    this.rs.viewitem(this.restid).subscribe(data=>{
      this.result=data
      console.log(this.result);
       
    })
  }

}
