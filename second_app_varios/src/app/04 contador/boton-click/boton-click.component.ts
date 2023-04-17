import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-click',
  templateUrl: './boton-click.component.html',
  styleUrls: ['./boton-click.component.scss']
})
export class BotonClickComponent {

  age: number = 0

  sumador() {
    console.log("prueba contador");
    this.age++
  }

  restador() {
    console.log("prueba contador");
    this.age--
  }
}
