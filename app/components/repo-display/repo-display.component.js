System.register(['angular2/core', '../../services/repo.service'], function(exports_1, context_1) {
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
    var core_1, repo_service_1;
    var RepoDisplayComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (repo_service_1_1) {
                repo_service_1 = repo_service_1_1;
            }],
        execute: function() {
            RepoDisplayComponent = (function () {
                function RepoDisplayComponent(_repoService) {
                    this._repoService = _repoService;
                }
                RepoDisplayComponent.prototype.ngOnInit = function () {
                    this.getRepos();
                    var self = this;
                    setTimeout(function () {
                        console.log(self.repos);
                    }, 3000);
                };
                RepoDisplayComponent.prototype.getRepos = function () {
                    var _this = this;
                    this._repoService.getRepos()
                        .subscribe(function (repos) { return _this.repos = repos; });
                };
                RepoDisplayComponent = __decorate([
                    core_1.Component({
                        selector: 'repo-display',
                        templateUrl: 'app/components/repo-display/repo-display.component.html'
                    }), 
                    __metadata('design:paramtypes', [repo_service_1.RepoService])
                ], RepoDisplayComponent);
                return RepoDisplayComponent;
            }());
            exports_1("RepoDisplayComponent", RepoDisplayComponent);
        }
    }
});
//# sourceMappingURL=repo-display.component.js.map