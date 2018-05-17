import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'http://spontaneousmatch.ca/api/userplus';
  private KEY: string = '204b4fa8aee15f497fcf2ee8';

  constructor(public http: HttpClient, public headers: HttpHeaders) {
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint , body, reqOpts);
  }

  validateLogin()
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let data=JSON.stringify({username: 'dev', password:'N$7*rzfFcSMk8J5ilTXZ@#Xf'});
    
    this.http.post(this.url + '/generate_auth_cookie/?key=' + this.KEY , data, {headers: this.headers} )
    //.map(res => res.json())
    .subscribe(res => {
    alert("success: Userid "+res);

    // this.storage.set('userid', res.userid);
    // this.storage.set('token', res.token);
    }, (err) => {
    alert("failed");
    });
  }


  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}
