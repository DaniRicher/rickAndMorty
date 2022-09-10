import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor( private http: HttpClient ) { }

  obtenerPersonajes() {
    const url = `${ base_url }/character`;
    return this.http.get( url );
  }


}
