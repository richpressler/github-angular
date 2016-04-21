System.register(['angular2/core', 'angular2/http', 'angular2/router', '../services/repo.service', './login/login.component', './post-login/post-login.component', './repo-display/repo-display.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, repo_service_1, login_component_1, post_login_component_1, repo_display_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (repo_service_1_1) {
                repo_service_1 = repo_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (post_login_component_1_1) {
                post_login_component_1 = post_login_component_1_1;
            },
            function (repo_display_component_1_1) {
                repo_display_component_1 = repo_display_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_repoService) {
                    this._repoService = _repoService;
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/login',
                            name: 'Login',
                            component: login_component_1.LoginComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/post-login',
                            name: 'PostLogin',
                            component: post_login_component_1.PostLoginComponent
                        },
                        {
                            path: '/repos',
                            name: 'Repos',
                            component: repo_display_component_1.RepoDisplayComponent
                        }
                    ]),
                    core_1.Component({
                        selector: 'app',
                        template: '<router-outlet></router-outlet>',
                        providers: [
                            repo_service_1.RepoService,
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS
                        ],
                        directives: [
                            repo_display_component_1.RepoDisplayComponent,
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [repo_service_1.RepoService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map