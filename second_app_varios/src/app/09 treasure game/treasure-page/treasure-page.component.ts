import { Component } from '@angular/core';

@Component({
  selector: 'app-treasure-page',
  templateUrl: './treasure-page.component.html',
  styleUrls: ['./treasure-page.component.scss']
})
export class TreasurePageComponent {
  filas: any;
  columnas: any;
  tabla: boolean;
  imagenSrc: string[][];
  filasArray: any[];
  columnasArray: any[];
  treasure: any[];
  intentos: any;

  constructor(){
    this.filas;
    this.columnas;
    this.tabla = false;
    this.imagenSrc = [];
    this.filasArray = [];
    this.columnasArray = [];
    this.treasure = [];
    this.intentos = 0;
  }

  getRandom(num: number) {
    return Math.floor(Math.random() * num);
  }

  pintarTabla(event: any){
    this.filasArray = Array.from({length: this.filas});
    this.columnasArray = Array.from({length: this.columnas});
    this.imagenSrc = [];
    this.tabla = true;
    this.treasure [0] = this.getRandom(this.filas);
    this.treasure [1] = this.getRandom(this.columnas);
    this.intentos = 0;

    for(let i=0; i<this.filas; i++) {
      this.imagenSrc[i] = [];
      for(let j=0; j<this.columnas; j++) {
        this.imagenSrc[i][j] = "assets/treasure/x.png";
      }
    }
  }

  voltearImagen(fila: number, columna: number) {
    if (this.imagenSrc[fila][columna] === "assets/treasure/skull.png") {
      this.imagenSrc[fila][columna] = "assets/treasure/x.png";
    } else {
      this.imagenSrc[fila][columna] = "assets/treasure/skull.png";
    } 
    
    if ((this.treasure [0] == fila) && (this.treasure [1] == columna)) {
      this.imagenSrc[fila][columna] = "assets/treasure/chest.png";
      alert('Encontraste el tesoro!!');
    }
  }

  resetTabla() {
    this.filas = "";
    this.columnas = "";
    this.tabla = false;
    this.intentos = 0;
  }

  contador() {
    this.intentos++;
  }

}