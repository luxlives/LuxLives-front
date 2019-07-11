import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvokeErrorService {

  constructor() { }

  password_mismatch(){
    alert('As senhas não conferem')
  }

}
