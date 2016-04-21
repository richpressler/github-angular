import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login.component.html'
})
export class LoginComponent {
  constructor(private _routeParams: RouteParams,
              private http: Http) {
  }

  ngOnInit() {
    if(this._routeParams.get('code')) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let code = this._routeParams.get('code');
      let data = {
        code: code
      };
      this.http.post('/access_token', JSON.stringify(data), {headers: headers}).subscribe(res => this.saveLogin(res.json()));
    }
    else if(window.localStorage.getItem('gh_token')) {
      window.location.href = '/repos';
    }
    else {
      window.location.href = 'https://github.com/login/oauth/authorize?client_id=c027f603d41d3cfe8e67';
    }
  }

  saveLogin(tokenObj) {
    window.localStorage.setItem('gh_token', JSON.stringify(tokenObj));
    console.log(window.localStorage.getItem('gh_token'));
    //window.location.href = '/repos';
  }
}
