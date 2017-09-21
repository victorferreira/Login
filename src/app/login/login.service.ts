import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  serviceUrl = 'http://10.71.4.153/website/api/usuarios/'
  tokenKey = 'rmsAccessToken';

  getContextList(): Promise<any> {
    return this.http.get('http://10.71.4.153/website/api/contextos/')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  auth(loginData): Promise<any> {
    return this.http.get(this.serviceUrl +  loginData.username + '/' + loginData.password + '/' + loginData.context)
      .toPromise()
      .then(response => {
        if(response.json().Logado)
          sessionStorage.setItem(this.tokenKey, response.json().Sessao)
      })
      .catch(this.handleError);
  }

  logOut() {
    this.http.get('http://10.71.4.153/website/api/logoff/' + sessionStorage.getItem(this.tokenKey))
      .toPromise()
      .then(response => {
        console.log(response);
        sessionStorage.removeItem(this.tokenKey);
      })
      .catch(this.handleError);
    // sessionStorage.removeItem(this.tokenKey);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

}
