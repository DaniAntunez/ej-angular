import { Component } from '@angular/core';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.scss']
})
export class PlanetPageComponent {

  planets = [
    {
      id: 1,
      name: 'earth',
      img: 'assets/planets/earth.svg',
      seleccionada: false,
      acertada: false,
    },
    {
      id: 2,
      name: 'jupiter',
      img: 'assets/planets/jupiter.svg',
      seleccionada: false,
      acertada: false,
    },
    {
      id: 3,
      name: 'mars',
      img: 'assets/planets/mars.svg',
      seleccionada: false,
      acertada: false,
    },
    {
      id: 4,
      name: 'mercury',
      img: 'assets/planets/mercury.svg',
      seleccionada: false,
      acertada: false,
    },
    {
    id: 5,
    name: 'saturn',
    img: 'assets/planets/saturn.svg',
    seleccionada: false,
    acertada: false,
    },
    {
      id: 6,
      name: 'uranus',
      img: 'assets/planets/uranus.svg',
      seleccionada: false,
      acertada: false,
    },
    {
      id: 7,
      name: 'earth',
      img: 'assets/planets/earth.svg',
      seleccionada: false,
      acertada: false,
    },
    {
      id: 8,
      name: 'jupiter',
      img: 'assets/planets/jupiter.svg',
      seleccionada: false,
      acertada: false,
    },
    {
      id: 9,
      name: 'mars',
      img: 'assets/planets/mars.svg',
      seleccionada: false,
      acertada: false,
    },
    {
      id: 10,
      name: 'mercury',
      img: 'assets/planets/mercury.svg',
      seleccionada: false,
      acertada: false,
    },
    {
    id: 11,
    name: 'saturn',
    img: 'assets/planets/saturn.svg',
    seleccionada: false,
    acertada: false,
    },
    {
      id: 12,
      name: 'uranus',
      img: 'assets/planets/uranus.svg',
      seleccionada: false,
      acertada: false,
    },
  ];

  constructor() {
    this.planets.sort(() => 0.5 - Math.random());
  }

  seleccionadas: any[] = [];
  iguales: any[] = [];
  intentos: any = 0;
  
  vuelta(card: any) {
    card.seleccionada = !card.seleccionada;
    //meto la carta seleccionada en el array seleccionadas
    if (card.seleccionada) {
      this.seleccionadas.push(card);
    }
    //si la deselecciono la quito del array
    else {
      const index = this.seleccionadas.indexOf(card);
      if (index > -1) {
        this.seleccionadas.splice(index, 1);
      }
    }
    //miro si son iguales
    if (this.seleccionadas[0].name === this.seleccionadas[1].name) {
      this.seleccionadas.forEach((card: any) => {
        card.acertada = true; // cambia la propiedad acertada a true
        card.seleccionada = false; // cambia la propiedad seleccionada a false
        this.iguales.push(card);
      });
    }
    
  //le pongo un temporizador para que de la vuelta si no esta en el array
    setTimeout(() => {
      this.seleccionadas.forEach((card: any) => {
        if (!this.iguales.includes(card)) {
          card.seleccionada = false;
        }
      });
      // reset al array seleccionadas
      this.seleccionadas = [];
      this.intentos++;
    }, 500);

  }

}

