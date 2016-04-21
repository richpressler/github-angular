import {Component} from 'angular2/core';

@Component({
  selector: 'login',
  templateUrl: 'app/components/login/login.component.html'
})
export class LoginComponent {
  constructor() {

  }

  ngOnInit() {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=c027f603d41d3cfe8e67';
  }
}
