import { Router } from '@angular/router';
import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: string;

  constructor(private login: LoginService, private router: Router) {
    if(!this.login.user) {
      this.router.navigate(['/login']);
    } else {
      this.user = this.login.user.Usuario;
      this.router.navigate(['/menu']);
    }
  }

  ngOnInit() {
  }

  logOut() {
    this.login.logOut()
      .then(()     => this.router.navigate(['/login']))
      .catch(error => console.error('Failed attempt lo logout', Error(error)));
  }

}
