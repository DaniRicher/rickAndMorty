import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public personajes: any[] = [];
  public episodiosDePersonaje: any = []


  constructor( private obtenerPersonajes: PersonajesService,
               private router: Router ) { }

  ngOnInit(): void {
    this.mostrarPersonaje();
  }

  mostrarPersonaje() {
    this.obtenerPersonajes.obtenerPersonajes()
    .subscribe( (personajes) => {

      console.log(personajes);
      this.personajes = personajes;

    });
  }

  irALocation( url: string ) {

    const id = url.split('/').pop();
    this.router.navigate([`/main/location/${ id }`]);

  }


}
