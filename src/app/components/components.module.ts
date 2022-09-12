import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { PrimeNgModule } from '../primeng/prime-ng.module';



@NgModule({
  declarations: [
    ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    ScrollToTopComponent
  ]
})
export class ComponentsModule { }
