import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { DetallesComponent } from './detalles/detalles.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'personajes', component: PersonajesComponent, data: { titulo: 'Personajes'} },
      { path: 'personajes/:id', component: DetallesComponent, data: { titulo: 'Detalles'} },
      { path: 'location/:id', component: LocationComponent, data: { titulo: 'Localización'} },
      { path: 'favoritos', component: FavoritosComponent, data: { titulo: 'Favoritos'} },
      { path: '**', redirectTo: 'personajes' }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
