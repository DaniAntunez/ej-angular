import { DiscoI } from '../interfaces/disco.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.component.html',
  styleUrls: ['./coleccion.component.scss']
})

export class ColeccionComponent {
  listado: DiscoI[] = [
    {
      imagen: 'https://i.ebayimg.com/images/g/AJIAAOSwcnhj2UDv/s-l1600.jpg',
      titulo: 'Bad',
      grupo: 'Michel Jackson'
    },
    {
      imagen: 'https://i.ebayimg.com/images/g/1~IAAOSwABRiOF~P/s-l1600.jpg',
      titulo: 'Sweet Child O Mine',
      grupo: 'Guns N Roses'
    },
    {
      imagen: 'https://i.ebayimg.com/images/g/6M0AAOSwd0pkCdld/s-l1600.jpg',
      titulo: 'Atlanta 79',
      grupo: 'KISS'
    },
  ];

  addDisco(disco: DiscoI) {
    this.listado = [...this.listado, disco]
  }
}
