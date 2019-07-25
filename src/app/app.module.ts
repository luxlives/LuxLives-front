import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './user-module/signup-component/signup.component';
import { LoginComponent } from './user-module/login-component/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
import { StreamerSignupComponent } from './user-module/streamer-signup-component/streamer-signup.component';
import { FeedModule } from './feed/feed.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    StreamerSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    FeedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
