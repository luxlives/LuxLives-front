import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jtw_decode from 'jwt-decode';
import { TokenService } from './token-service/token.service';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) { }

  setToken(token: string) {
    this.tokenService.setToken(token); 
    this.decodeAndNotify();
  } 

  // Criando BehaviorSubject.
  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jtw_decode(token) as User;
    this.userSubject.next(user);
  }

  getUser() { return this.userSubject.asObservable(); }

  logout() { this.tokenService.removeToken(); }

  // Verifica se existe token.
  isLogged() { return this.tokenService.hasToken(); }

  // Pega o nome do usuário.  
  getUserName() { return (jtw_decode(this.tokenService.getToken()) as User).nome; }

  // Pega o id do usuário 
  getId() { return (jtw_decode(this.tokenService.getToken()) as User).id; }

  // Pega o email 
  getEmail() { return (jtw_decode(this.tokenService.getToken()) as any).sub }
  
}
