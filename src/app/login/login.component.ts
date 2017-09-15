import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateEmail(email: string) {
    console.log(email);
  }

  validatePassword(pass: string) {
    console.log(pass);
  }

  sendForm(email: string, pass: string) {
    console.log(email, pass);
  }

  constructor() { }

  ngOnInit() {
  }

}
