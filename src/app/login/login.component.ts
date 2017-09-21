import { LoginService } from './login.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html'
})
export class LoginComponent {

    loginData = {
        grant_type: 'password',
        username: '',
        password: '',
        context: ''
    };
    contexts: string[] = [];
    submitted = false;

    onSubmit() {
        this.login.auth(this.loginData);
        this.submitted = true;
    }

    constructor(private login: LoginService) {
        login.getContextList()
            .then(result => result.map(item => this.contexts.push(item.Descricao)))
            .catch(error => console.error('Failed attempt to get the context list', Error(error)));
    }
}