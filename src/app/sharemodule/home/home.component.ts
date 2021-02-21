import { DataService } from './../../data.service';
import { products } from './../../fake-data/products';


import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList:any[];

  constructor(private data:DataService) {
    this.productList=products;
   }

  ngOnInit(): void {
  }

  addcart(id:number){
    console.log("add cart button working");
    this.data.addcart();

  }

}
