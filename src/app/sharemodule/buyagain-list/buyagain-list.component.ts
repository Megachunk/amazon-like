import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-buyagain-list',
  templateUrl: './buyagain-list.component.html',
  styleUrls: ['./buyagain-list.component.css']
})
export class BuyagainListComponent implements OnInit {

  orderlist: any = [];

  constructor(private data:DataService) {

    
    this.data.getRequest('/orders').subscribe((res)=>this.orderlist=res);

    
  }


  ngOnInit(): void {

 
  }

}
