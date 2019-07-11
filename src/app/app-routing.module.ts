import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user-module/login-component/login.component';
import { SignupComponent } from './user-module/signup-component/signup.component';
import { FeedComponent } from './feed/feed-component/feed.component';
import { StreamerSignupComponent } from './user-module/streamer-signup-component/streamer-signup.component';

const routes: Routes = [ 
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/feed',
  },

  /* Feed */
  {
    path: 'feed',
    component: FeedComponent
  },

  /* Conta */
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'streamer/signup',
    component: StreamerSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
