import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {RepoService} from '../services/repo.service';
import {LoginComponent} from './login/login.component';
import {RepoDisplayComponent} from './repo-display/repo-display.component';

@RouteConfig([
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    useAsDefault: true
  },
  {
    path: '/repos',
    name: 'Repos',
    component: RepoDisplayComponent
  }
])
@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
  providers: [
    RepoService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
  ],
  directives: [
    RepoDisplayComponent,
    ROUTER_DIRECTIVES
  ]
})
export class AppComponent {
  constructor(private _repoService: RepoService) {
  }
}
