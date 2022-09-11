import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Personajes', icon: 'pi pi-fw pi-home', routerLink: 'personajes'},
      {label: 'Favoritos', icon: 'pi pi-fw pi-star', routerLink: 'favoritos'},
    ]
  }

}
