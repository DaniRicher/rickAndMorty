import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { PersonajesComponent } from './personajes/personajes.component';
import { DetallesComponent } from './detalles/detalles.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { LocacionPersonajeComponent } from './locacion-personaje/locacion-personaje.component';
import { PrimeNgModule } from '../primeng/prime-ng.module';


@NgModule({
  declarations: [
    MainComponent,
    PersonajesComponent,
    DetallesComponent,
    FavoritosComponent,
    LocacionPersonajeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class PagesModule { }
