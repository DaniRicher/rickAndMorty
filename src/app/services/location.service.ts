import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Result } from '../interfaces/location.interfaces';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor( private http: HttpClient ) { }

  obtenerLocation( id: number ) {
    const url = `${ base_url }/location/${ id }`
    return this.http.get<Result>( url );
  }
}
