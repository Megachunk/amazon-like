import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  password = new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')]);
  rememberforgetlogin=false;

  constructor() { }

  ngOnInit(): void {

    
  }



  getErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    let msg = this.password.hasError('password') ? 'Not a valid password' : '';
    console.log(this.password.hasError('password') );

    return msg
  }

}
