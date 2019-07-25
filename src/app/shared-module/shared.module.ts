import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSidebarComponent } from './top-sidebar-component/top-sidebar.component';

@NgModule({
  declarations: [
    TopSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopSidebarComponent
  ]
})
export class SharedModule { }
