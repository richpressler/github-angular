System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var RepoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            RepoService = (function () {
                function RepoService(http) {
                    this.http = http;
                    this._repoUrl = "https://api.github.com/user/repos";
                }
                RepoService.prototype.getRepos = function () {
                    // Get auth from localStorage
                    var token = JSON.parse(window.localStorage.getItem('gh_token')).access_token;
                    var headers = new http_1.Headers();
                    headers.append('Authorization', 'token ' + token);
                    return this.http.get(this._repoUrl, { headers: headers }).map(this.extractData);
                };
                RepoService.prototype.extractData = function (res) {
                    return res.json();
                };
                RepoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RepoService);
                return RepoService;
            }());
            exports_1("RepoService", RepoService);
        }
    }
});
//# sourceMappingURL=repo.service.js.map