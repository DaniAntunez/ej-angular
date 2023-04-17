import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  data = [
    {
      name: "Aprender Angular",
      isDone: false
    },
    {
      name: "Aprender JS",
      isDone: true
    },
    {
      name: "Encontrar trabajo",
      isDone: false
    }
  ]

  cambiaDone(item: any) {
    console.log("cambiaDone");
    item.isDone = !item.isDone
  }

}
