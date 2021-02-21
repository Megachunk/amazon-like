import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartListCount:number;


  constructor(private data: DataService, private router:Router) { 
    
    this.cartListCount=0;

  
  }

  ngOnInit(): void {

    this.data.cartListCount$.subscribe((val) => this.cartListCount = val);
  }

  toggleMenu(){

    this.data.toggleMenu();
    console.log("header menu button clicked!")

  }

  CloseMenu(){
    this.data.closeMenu();
    this.router.navigate(['/loginWindow']);
  }



}
