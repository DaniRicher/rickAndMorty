import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public prueba: any[] = []

  constructor( private obtenerPersonajes: PersonajesService ) { }

  ngOnInit(): void {
    this.obtenerPersonajes.obtenerPersonajes()
        .subscribe( ({results}: any) => {
          console.log(results);
          this.prueba = results;
        });
  }

}
