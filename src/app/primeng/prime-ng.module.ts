import { NgModule } from '@angular/core';

//PrimeNg
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';



@NgModule({
  exports: [
    ButtonModule,
    TabMenuModule,
  ]
})
export class PrimeNgModule { }
