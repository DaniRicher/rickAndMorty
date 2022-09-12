import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Result } from '../../interfaces/location.interfaces';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public cargando: boolean = true;

  public locationId: Result[] = [];
  public id: number = 0;

  constructor( private location: LocationService, 
               private activateRoute: ActivatedRoute,
               private locationRuta: Location ) { }

  ngOnInit(): void {
    this.paramsId();
    this.obtenerLocation()
  }

  paramsId() {
    this.activateRoute.params
        .subscribe( ({ id }) => {
          this.id = id;
        });
  }

  obtenerLocation() {
    this.location.obtenerLocation( this.id )
        .subscribe( (location) => {
          this.locationId.push(location);
          this.cargando = false;
        });
  }

  irAtras() {
    this.locationRuta.back();
  }

}
