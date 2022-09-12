import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Router } from '@angular/router';
import { Result } from 'src/app/interfaces/personaje.interface';

//Mensajes Personalizados
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { LocalStorageService } from '../../services/local-storage.service';
import { style } from '@angular/animations';
import { __values } from 'tslib';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
  providers: [ ConfirmationService, MessageService ]
})
export class PersonajesComponent implements OnInit {

  @ViewChild('favorito') favorito!: ElementRef;
  @ViewChild('table') table!: ElementRef;

  public cargando: boolean = true;
  public termino: string = '';

  public personajes: Result[] = [];
  public episodiosDePersonaje: any = [];
  public personajesFav: any[] = [];
  public ids: number[] = [];


  constructor( private obtenerPersonajes: PersonajesService,
               private router: Router,
               private message: MessageService,
               private confirmation: ConfirmationService,
               private localStorage: LocalStorageService,
               private render2: Renderer2 ) { }

  ngOnInit(): void {
    this.mostrarPersonajes();
  }

  mostrarPersonajes() {

    this.obtenerPersonajes.obtenerPersonajes()
    .subscribe( (personajes) => {

      setTimeout(() => {

        this.personajes = personajes;
        this.cargando = false;
        
      }, 500);
      
    });
  }

  cargarLocalStorage() {

    this.personajesFav = [];
    this.ids = [];
    if( localStorage.getItem('personajesFav')! ) {
      this.personajesFav = JSON.parse(localStorage.getItem('personajesFav')!);
      this.personajesFav.forEach( ({id}) => {
        this.ids.push(id);
      });
    }

  }

  guardarEnFavoritos( personaje: Result ) {

    this.cargarLocalStorage();
    const { image, id, name } = personaje;
    
    if( this.ids.includes(id) ) {

      return this.message.add({ severity: 'error', summary: 'Error', 
                                detail: 'El personaje ya existe en los favoritos'
      });
    }

    this.confirmation.confirm({
      message: `¿Seguro que desea agregar a ${ name } a sus favoritos?`,
      defaultFocus: 'accept',
      accept: () => {
        
        this.personajesFav.push({ name, id, image });
        this.localStorage.guardarLocalStorage('personajesFav', this.personajesFav);
        this.message.add({ severity: 'success', summary: 'Confirmado', 
                           detail: 'Ha sido agregado a sus favoritos con éxito'
        });
      },
      reject: ( type: any ) => {
        switch( type ) {
          case ConfirmEventType.REJECT:
              this.message.add({severity:'warn', summary:'Cancelado', detail:'No ha sido agregado'});
          break;
          case ConfirmEventType.CANCEL:
              this.message.add({severity:'warn', summary:'Cancelado', detail:'No ha sido agregado'});
          break;
        }
      }
    });

  }

  irALocation( url: string ) {

    const id = url.split('/').pop();
    this.router.navigate([`/main/location/${ id }`]);

  }

  buscar( termino: string ) {

    this.termino = termino;
    
  }

  rastrearPor() {

    const button = this.favorito.nativeElement;
    let table = this.table.nativeElement;
    console.log(this.favorito);
    
    // this.render2.listen

  }


}
