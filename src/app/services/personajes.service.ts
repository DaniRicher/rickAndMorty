import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Personaje, Result } from '../interfaces/personaje.interface';
import { map, of } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private personajes: Result[] = [];

  constructor( private http: HttpClient ) { }

  obtenerPersonajes() {

    if( this.personajes.length > 0) {

      return of(this.personajes);

    } else {

      const url = `${ base_url }/character`;
      return this.http.get<Personaje>( url )
          .pipe(
            map( ({ results }) => {
              results.forEach( ({ episode }) => {

                episode.reverse().splice(1);
                episode[0] = episode[0].split('/').pop()!
                
              });

              return this.personajes = results;

            })
          );
    }

  }

  obtenerPersonajeById( id: number ) {

    const url = `${ base_url }/character/${ id }`;
    return this.http.get( url );
    
  }


}
