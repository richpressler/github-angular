System.register(['angular2/core', 'angular2/router', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_routeParams, http) {
                    this._routeParams = _routeParams;
                    this.http = http;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    if (this._routeParams.get('code')) {
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/json');
                        var code = this._routeParams.get('code');
                        var data = {
                            code: code
                        };
                        this.http.post('/access_token', JSON.stringify(data), { headers: headers }).subscribe(function (res) { return console.log(res); });
                    }
                    else {
                        window.location.href = 'https://github.com/login/oauth/authorize?client_id=c027f603d41d3cfe8e67';
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/components/login/login.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, http_1.Http])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map