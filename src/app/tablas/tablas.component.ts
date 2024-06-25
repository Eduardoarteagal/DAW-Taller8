import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tablas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tablas.component.html',
  styleUrl: './tablas.component.css'
})
export class TablasComponent {
  datos = [
    { id: 1, nombre: 'Luis', edad: 15 },
    { id: 2, nombre: 'Fernanado', edad: 45 },
    { id: 3, nombre: 'Paz', edad: 26 }
  ];

}
