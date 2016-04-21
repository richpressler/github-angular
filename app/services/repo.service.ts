import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';

@Injectable()
export class RepoService {
  constructor(private http: Http) {

  }

  private _repoUrl = "https://api.github.com/user/repos";

  getRepos() {
    // Get auth from localStorage
    let token = JSON.parse(window.localStorage.getItem('gh_token')).access_token;
    let headers = new Headers();
    headers.append('Authorization', token + ' OAUTH-TOKEN');
    return this.http.get(this._repoUrl, {headers: headers}).map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json();
  }
}
