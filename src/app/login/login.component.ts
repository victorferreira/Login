import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'app-login',
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html'
})
export class LoginComponent {

    // model = new Hero(18, 'Dr IQ', 'this.powers[0]', 'Chuck Overstreet');
    model = {
        user: '',
        password: ''
    }

    submitted = false;

    // heroes: Hero[] = [];

    onSubmit() { this.submitted = true; }

    // newHero() {
    //     // this.heroes.push(this.model);
    //     this.model = new Hero(42, '', '');
    // }
}