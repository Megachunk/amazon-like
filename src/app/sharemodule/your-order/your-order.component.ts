import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-your-order',
  templateUrl: './your-order.component.html',
  styleUrls: ['./your-order.component.css']
})
export class YourOrderComponent implements OnInit {


  links = ['Your Order', 'Buy Again'];
  activeLink = this.links[0];

  constructor(private router:Router,private data:DataService) { }

  ngOnInit(): void {
    this.data.OrderOrBuyAgain$.subscribe(l => this.TabOnClick(l));
  }

  

  TabOnClick(l:string){

    this.activeLink = l;

    switch(l){
      case 'Your Order': this.router.navigate(['yourorder/yourorderlist']); break;
      case 'Buy Again': this.router.navigate(['yourorder/buyagain']); break;
     
    }
   

  }


}
