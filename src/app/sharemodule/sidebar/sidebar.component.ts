import { Router } from '@angular/router';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private data:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  OrderOrBuyAgain(l:string)
  {
    this.data.OrderOrBuyAgainFocus(l);

    switch (l) {
      case 'Your Order': this.router.navigate(['yourorder/yourorderlist']); break;
      case 'Buy Again': this.router.navigate(['yourorder/buyagain']); break;

    }


  }

}
