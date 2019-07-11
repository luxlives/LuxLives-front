import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Signup } from './signup';
import * as $ from 'jquery'
import { InvokeErrorService } from 'src/app/shared/errors-service/invoke-error.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent extends BaseService<any> implements OnInit {

  auth: Signup;
  signupForm: FormGroup;

  constructor(
    protected http: HttpClient,
    protected formBuilder: FormBuilder,
    private invokeError: InvokeErrorService
  ) {
    super(http);
    this.controllerUrl = "usuarios/cadastro"
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      nome: [''],
      password: [''],
      email: [''],
      dataNasc: [''],
      genero: [''],
      tipo: [''],
      login: ['']
    });

    $('.name-field').focus();
  }

  validade_password(password) {
    if ($("#confirmacao-senha")[0].value == password) return false
    return true
  }

  submit() {
    this.auth = this.signupForm.getRawValue() as Signup;
    this.auth.email = this.auth.email.toLowerCase();
    this.auth.tipo =  'Basic Signup'
    this.auth.dataNasc = this.dateParse(this.auth.dataNasc);

    if (this.validade_password(this.auth.password)) {
      this.invokeError.password_mismatch();
      return;
    }

    // TODO preparar mensagens de sucesso que venham da API
    
    this.post(this.auth);
  }
}
