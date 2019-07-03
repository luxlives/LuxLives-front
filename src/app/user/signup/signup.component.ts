import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Signup } from './signup';
import * as $ from 'jquery'
import { InvokeErrorService } from 'src/app/shared/errors/invoke-error.service';

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
    this.controllerUrl = ""
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: [''],
      password: [''],
      email: [''],
      birthday: [''],
      gender: ['']
    });
  }

  validade_password(password) {
    if ($("#confirmacao-senha")[0].value == password) return false
    return true
  }

  submit() {
    this.auth = this.signupForm.getRawValue() as Signup;
    this.auth.email = this.auth.email.toLowerCase();
    if (this.validade_password(this.auth.password)) {
      this.invokeError.password_mismatch();
      return;
    }
    console.log(this.auth)
  }
}
