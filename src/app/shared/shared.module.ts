import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../primeng/prime-ng.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
