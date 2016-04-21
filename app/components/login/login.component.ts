import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login.component.html'
})
export class LoginComponent {
  constructor(private _routeParams: RouteParams) {

  }

  result: string;

  ngOnInit() {
    if(this._routeParams.params['code'] == undefined) {
      window.location.href = 'https://github.com/login/oauth/authorize?client_id=c027f603d41d3cfe8e67';
    }
    else {
      this.result = this._routeParams.get('code');
    }
  }
}
