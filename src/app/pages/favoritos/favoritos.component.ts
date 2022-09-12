import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/personaje.interface';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  providers: [ ConfirmationService, MessageService ]
})
export class FavoritosComponent implements OnInit {

  public personajesFav: any[] = [];
  public cargando:boolean = true;
  public responsiveOptions = [
    {
      breakpoint: '1200',
      numVisible: 4,
      numScroll: 4
    },
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

  constructor( private localStorageService: LocalStorageService,
               private router: Router,
               private confirmation: ConfirmationService,
               private message: MessageService ) { }

  ngOnInit(): void {

    setTimeout(() => {

      this.personajesFav = this.localStorageService.cargarLocalStorage();
      this.cargando = false;

    }, 500);

  }

  obtenerInfoPersonaje( id: number ) {
    this.router.navigate([`/main/personajes/${ id }`]);
  }

  eliminarPersonaje( personaje: Result ) {

    const { id, name } = personaje;

    this.confirmation.confirm({
      message: `Seguro que desea eliminar a ${ name } de sus favoritos`,
      defaultFocus: 'reject',
      accept: () => {
        this.message.add({ severity:'info', 
                           summary:'Confirmado', 
                           detail:'Ha sido eliminado de sus favoritos con éxito'});

        //Descartando el personaje por id
        let personajes = this.personajesFav.filter( data => data.id !== id );
        this.personajesFav = personajes;

        //Guardando nuevo arreglo en el localStorage
        let nuevoLocal = JSON.stringify( this.personajesFav );
        localStorage.setItem('personajesFav', nuevoLocal );

      },
      reject: (type:any) => {
        switch(type) {
          case ConfirmEventType.REJECT:
              this.message.add({severity:'error', summary:'Cancelado', detail:'No ha sido eliminado'});
          break;
          case ConfirmEventType.CANCEL:
              this.message.add({severity:'error', summary:'Cancelado', detail:'No ha sido eliminado'});
          break;
        }
      }
    });
  }

}
