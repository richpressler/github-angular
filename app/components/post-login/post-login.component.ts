import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  selector: 'post-login',
  templateUrl: 'app/components/post-login/post-login'
})
export class PostLoginComponent {
  constructor(private _routeParams: RouteParams) {

  }

  ngOnInit() {
    console.log(this._routeParams);
  }
}
