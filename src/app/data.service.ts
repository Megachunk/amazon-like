import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  //setting up the behavaior subjects
  private isMenuToggle= new BehaviorSubject<boolean>(false);
  private OrderOrBuyAgain = new BehaviorSubject<string>('Your Order');
  private cartListCount = new BehaviorSubject<number>(0);

  //converting to the observables
  isMenuToggle$=this.isMenuToggle.asObservable();
  OrderOrBuyAgain$ = this.OrderOrBuyAgain.asObservable();
  cartListCount$ = this.cartListCount.asObservable();

  //backend server address
  private REST_API_SERVER = "http://localhost:3000";

  constructor(private http:HttpClient) {
     
    

   }

  toggleMenu() {

    this.isMenuToggle.next(!this.isMenuToggle.getValue());
    

  }

  closeMenu(){
    this.isMenuToggle.next(false);
  }

  OrderOrBuyAgainFocus(l:string){
   
    this.OrderOrBuyAgain.next(l);
  }

  getRequest(collection:string) {

  return this.http.get(this.REST_API_SERVER+collection);


  }

  addcart(){
    this.cartListCount.next(this.cartListCount.getValue()+1);
  }



}
