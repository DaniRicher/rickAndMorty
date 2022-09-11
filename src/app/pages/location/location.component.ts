import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Location, Result } from '../../interfaces/location.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public locationId: Result[] = [];
  public id: number = 0;

  constructor( private location: LocationService, 
               private activateRoute: ActivatedRoute ) { }

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
          console.log(this.locationId);
        });
  }

}
