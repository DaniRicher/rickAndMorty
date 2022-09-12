import { Injectable } from '@angular/core';
import { Result } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  guardarLocalStorage( key: string, personaje: any[] ) {

    return localStorage.setItem( key, JSON.stringify( personaje ));

  }

  cargarLocalStorage() {

    if( localStorage.getItem('personajesFav') ) {

      return JSON.parse( localStorage.getItem('personajesFav')! );

    } 
    
  }

}
