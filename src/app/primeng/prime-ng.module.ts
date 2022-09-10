import { NgModule } from '@angular/core';

//PrimeNg
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';




@NgModule({
  exports: [
    ButtonModule,
    TabMenuModule,
    TableModule
  ]
})
export class PrimeNgModule { }
