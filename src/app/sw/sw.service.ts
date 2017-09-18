import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SwService {
  results: string[];

  private charactersUrl = 'http://swapi.co/api/people';  // URL to web api

  constructor(private http: Http) { }

  getCharacters(): Promise<any> {
    return this.http.get(this.charactersUrl)
      .toPromise()
      .then(response => {
        this.results = response.json().results;
        return this.results;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
