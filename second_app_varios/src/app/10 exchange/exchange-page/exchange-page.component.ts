import { Component } from '@angular/core';
import { ExchangeService } from 'src/shared/services/exchange.service';

interface Valores {
  [key: string]: number;
}

@Component({
  selector: 'app-exchange-page',
  templateUrl: './exchange-page.component.html',
  styleUrls: ['./exchange-page.component.scss']
})
export class ExchangePageComponent {

  datos: Valores = {};
  monedas: string[] = [];
  monedaSeleccionada: string = 'EUR';
  numero: number = 1;
  exchanges: any; 


  constructor(private ExchangeService: ExchangeService) {}

  ngOnInit() {
    this.ExchangeService.getdata().subscribe((data: any) => {
      this.datos = data.rates;
      this.monedas = Object.keys(this.datos);
      this.actualizarValor();
      this.exchanges = data;
      console.log(this.exchanges);
      
    });
  }

  actualizarValor() {
    if (this.numero < 1) {
      this.numero = 1;
    }
    const tasa = this.datos[this.monedaSeleccionada];
    for (const moneda in this.datos) {
      this.datos[moneda] = this.numero * (this.datos[moneda] / tasa);
    }
  }

  actualizarSeleccion(clave: string) {
    this.monedaSeleccionada = clave;
  }

}
