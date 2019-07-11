import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { Signup } from '../signup-component/signup';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InvokeErrorService } from 'src/app/shared/errors-service/invoke-error.service';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { UserService } from '../user.service';
import * as $ from 'jquery'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent extends BaseService<any> implements OnInit {

  auth: Login;
  loginForm: FormGroup;

  constructor(
    protected http: HttpClient,
    protected formBuilder: FormBuilder,
    private invokeError: InvokeErrorService,
    private userService: UserService,
    private router: Router
  ) {
    super(http);
    this.controllerUrl = "auth"
  }
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      senha: ['']
    });

    $(".email-field").focus();
  }

  submit() {

    // TODO implementar retornos e mensagens de erro

    this.auth = this.loginForm.getRawValue() as Login;
    this.post(this.auth).subscribe((data)=>{
      let authToken: string = data.data.token;
      this.userService.setToken(authToken);
      this.router.navigateByUrl('feed');
    });
  }

}
