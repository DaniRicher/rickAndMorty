import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { ActivatedRoute } from '@angular/router';
import { Result, Info } from '../../interfaces/personaje.interface';
import { PersonajeID } from '../../interfaces/personajesID.interfaces';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  private id: number = 0;
  public personajes: any = [];
  public episodiosDePersonaje: any = [];

  constructor( private obtenerPersonajeById: PersonajesService,
               private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.paramsId();
    this.obtenerPersonaje();
    this.episodiosPersonaje();
  }

  paramsId() {
    this.activateRoute.params
        .subscribe( ({ id }) => {
          this.id = id;
        });
  }

  obtenerPersonaje() {
    this.obtenerPersonajeById.obtenerPersonajeById( this.id )
      .subscribe( (data:any) => {
        this.personajes.push(data);
        console.log(data);
      })
  }

  episodiosPersonaje() {
    this.obtenerPersonajeById.obtenerPersonajeById( this.id )
        .subscribe( ({episode}:any) => {
          episode.forEach((info:any) => {
            this.episodiosDePersonaje.push(info.split('/').pop());
          });
        })
  }

}
