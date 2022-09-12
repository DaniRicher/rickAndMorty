import { NgModule } from '@angular/core';

//PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';




@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    CarouselModule,
    ConfirmDialogModule,
    ImageModule,
    InputTextModule,
    ProgressSpinnerModule,
    TableModule,
    TabMenuModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
