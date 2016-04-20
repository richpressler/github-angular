import {Component} from 'angular2/core';
import {RepoService} from '../../services/repo.service';

@Component({
  selector: 'repo-display',
  templateUrl: 'app/components/repo-display/repo-display.component.html'
})
export class RepoDisplayComponent {
  repos;

  constructor(private _repoService: RepoService) {

  }

  ngOnInit() {
    this.getRepos();
    let self = this;
    setTimeout(function() {
      console.log(self.repos)
    }, 3000);
  }

  getRepos() {
    this._repoService.getRepos()
                     .subscribe(repos => this.repos = repos);
  }
}
