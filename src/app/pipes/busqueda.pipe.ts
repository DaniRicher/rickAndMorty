import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../interfaces/personaje.interface';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform( personajes: any, search: string ): Result[] {

    if( search.length === 0) {
      return personajes;
    }

    let expresion = new RegExp(`${ search }.*`, 'i' )
    let busqueda = personajes.filter( (elem:any) => expresion.test(elem.name) );

    return busqueda;
  }

}
