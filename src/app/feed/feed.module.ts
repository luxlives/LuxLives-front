import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed-component/feed.component';import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeedModule { }
