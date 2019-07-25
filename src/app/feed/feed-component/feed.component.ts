import { Component, OnInit } from '@angular/core';
import { Livestream } from './livestream';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent extends BaseService<any> implements OnInit {

  auth: any
  livestream: Livestream;

  constructor(
    protected http: HttpClient,
    protected formBuilder: FormBuilder
    ) { 
      super(http);
      this.controllerUrl = "lives"
      this.getData();
    }

  ngOnInit() { }

  getData() {
    this.controllerUrl = this.controllerUrl + '/ordem/iddesc/pag/0'
    this.get().subscribe(data => {
      this.auth = data
      this.livestream = this.auth.data
      console.log(this.livestream)
    })
  }

}
