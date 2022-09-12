import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { PersonajesComponent } from './personajes/personajes.component';
import { DetallesComponent } from './detalles/detalles.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PrimeNgModule } from '../primeng/prime-ng.module';
import { LocationComponent } from './location/location.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    MainComponent,
    PersonajesComponent,
    DetallesComponent,
    FavoritosComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    PrimeNgModule,
    ComponentsModule
  ]
})
export class PagesModule { }
