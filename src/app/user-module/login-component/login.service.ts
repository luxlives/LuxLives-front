import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token-service/token.service';
import { UserService } from '../user.service';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient,
    private userService: UserService,
    private tokenService: TokenService) { }

  authenticate(email: string, senha: string) {

    return this._http.post(API + 'auth', { email, senha }, { observe: 'response' })
      .pipe(tap((data) => {
        let authToken: string = data.body['data'].token;
        this.userService.setToken(authToken);
      }));
  }

  tokenRefresh() {

    let bearer: string = 'Bearer ' + this.tokenService.getToken();

    /* let headers = new Headers();   
     headers.append('Content-Type','application/json');
     headers.append('Authorization',bearer); */

    /*let httpHeader = new HttpHeaders();
    httpHeader.append('Content-Type','application/json');
    httpHeader.append('Authorization',bearer);   
    let options = {header:httpHeader};*/

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': bearer
      })
    };

    return this._http.get('http://10.2.7.63:8080/ProjetoY/divulgador/1', httpOptions);
  }
}
