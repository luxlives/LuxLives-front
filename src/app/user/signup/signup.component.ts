import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent extends BaseService<any> implements OnInit {

  signupForm: FormGroup;

  constructor(
    protected http: HttpClient,
    protected formBuilder: FormBuilder
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

  submit() {
    
  }
}
