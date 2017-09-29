import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  serviceUrl = 'http://10.71.4.153/website/api/usuarios/'
  tokenKey = 'rmsAccessToken';
  user = null;

  getContextList(): Promise<any> {
    return this.http.get('http://10.71.4.153/website/api/contexts/')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  auth(loginData): Promise<any> {
    return this.http.post('http://10.71.4.153/website/api/login/', loginData)
      .toPromise()
      .then(response => {
        if(response.json().Logado){
          this.user = response.json();
        }
      })
      .catch(this.handleError);
  }

  logOut() {
    this.user = null;
    return this.http.get('http://10.71.4.153/website/api/logoff/' + sessionStorage.getItem(this.tokenKey))
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

}
