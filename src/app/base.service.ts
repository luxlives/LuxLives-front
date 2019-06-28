import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export class WebApiResponse<T> {
  erro: boolean;
  businessException: boolean;
  mensagem: string;
  model: T;
}

const API = environment.apiUrl;

@Injectable()
export class BaseService<T> {
  baseUrl: String = API;
  controllerUrl: String = '';
  isUserLoggedin = false; // é usuário logado
  logged = false;         // logado

  Retorno: Observable<any>;

  constructor(
    protected http: HttpClient) { }

    getHeaders(): HttpHeaders {

      return new HttpHeaders()
        .append('Content-Type', 'application/json')
    }

  post(model: T): Observable<T> {
    this.Retorno = this.http.post<WebApiResponse<T>>(`${this.getUrl()}`, model, { headers: this.getHeaders() });
    this.Retorno.subscribe((data) => this.Retorno = data.Model);
    return this.Retorno;
  }

  put(model: T, id: number): Observable<T> {
    this.Retorno = this.http.put<WebApiResponse<T>>(`${this.getUrl()}/${id}`, model, { headers: this.getHeaders() });
    this.Retorno.subscribe((data) => this.Retorno = data.Model);
    return this.Retorno;
  }

  get(): Observable<T[]> {
    this.Retorno = this.http.get<WebApiResponse<T>>(`${this.getUrl()}`, { headers: this.getHeaders() });
    this.Retorno.subscribe((data) => this.Retorno = data.Model);
    return this.Retorno;
  }

  getById(id: number): Observable<T> {
    this.Retorno = this.http.get<WebApiResponse<T>>(`${this.getUrl()}/${id}`, { headers: this.getHeaders() });
    this.Retorno.subscribe((data) => this.Retorno = data.Model);
    return this.Retorno;
  }

  delete(id: number): Observable<T> {
    this.http.delete<WebApiResponse<T>>(`${this.getUrl()}/${id}`, { headers: this.getHeaders() });
    this.Retorno.subscribe((data) => this.Retorno = data.Model);
    return this.Retorno;
  }

  protected getUrl(): string {
    return `${this.baseUrl}${this.controllerUrl}`;
  }
}
