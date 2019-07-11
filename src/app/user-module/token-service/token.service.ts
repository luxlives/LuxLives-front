import { Injectable } from '@angular/core';

const KEY = '4u7h';

@Injectable({ providedIn: 'root' })
export class TokenService {

  // Verifica se existe token.
  hasToken() { return !!this.getToken(); }

  // Insere um token na localStorage.
  setToken(token) { window.localStorage.setItem(KEY, token); }

  // Pega um token na localStorage.
  getToken() { return window.localStorage.getItem(KEY); }

  // Remove um token na localStorage.
  removeToken() { window.localStorage.removeItem(KEY); }
}
