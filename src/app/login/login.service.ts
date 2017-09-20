import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  loginUrl = 'http://localhost:60403/Token/'
  tokenKey = 'accessToken';
  results;

  getContextList(): Promise<any> {
    return this.http.get('http://swapi.co/api/people')
      .toPromise()
      .then(response => response.json().results)
      .catch(this.handleError)
  }

  auth(loginData): Promise<any> {
    return this.http.post(this.loginUrl, loginData)
      .toPromise()
      .then(response => {
        this.results = response.json();
        console.log(this.results);
        // Cache the access token in session storage.
        // sessionStorage.setItem(this.tokenKey, this.results.access_token);
        return this.results;
      })
      .catch(this.handleError);
  }

  logOut() {
    sessionStorage.removeItem(this.tokenKey);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

}
