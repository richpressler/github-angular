import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

@Injectable()
export class RepoService {
  constructor(private http: Http) {

  }

  private _repoUrl = "https://api.github.com/users/richpressler/repos";

  getRepos() {
    return this.http.get(this._repoUrl).map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json();
  }
}
