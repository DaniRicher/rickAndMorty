import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { DetallesComponent } from './detalles/detalles.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'personajes', component: PersonajesComponent, data: { titulo: 'Personajes'} },
      { path: 'detalles', component: DetallesComponent, data: { titulo: 'Detalles'} },
      { path: 'favoritos', component: FavoritosComponent, data: { titulo: 'Favoritos'} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
