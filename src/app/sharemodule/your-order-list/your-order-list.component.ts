import { DataService } from './../../data.service';
import { Observable } from 'rxjs';
import { orders } from './../../fake-data/orders';
import { Component, OnInit } from '@angular/core';




interface order {
  userId:String;
  src: String;
  ProductName: String;
  Status: String;
  price: Number;


};



@Component({
  selector: 'app-your-order-list',
  templateUrl: './your-order-list.component.html',
  styleUrls: ['./your-order-list.component.css']
})
export class YourOrderListComponent implements OnInit {

  orderlist:any=[];
  

  constructor(private data: DataService) { 
    
    this.data.getRequest('/orders').subscribe((res)=>this.orderlist=res);
 
  }

  ngOnInit(): void {
  }

}
