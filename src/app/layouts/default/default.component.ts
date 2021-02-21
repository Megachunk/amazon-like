import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {


  isMenuToggle:boolean;
   

  constructor(private data:DataService) { 

    this.isMenuToggle=false;

       
  }

  ngOnInit(): void {

    this.getToggle();
  }

  getToggle():void{
    this.data.isMenuToggle$
      .subscribe(flag => this.isMenuToggle=flag);

  }



 

}
