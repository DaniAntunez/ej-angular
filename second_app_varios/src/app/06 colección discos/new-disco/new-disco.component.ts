import { DiscoI } from '../interfaces/disco.interface';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-disco',
  templateUrl: './new-disco.component.html',
  styleUrls: ['./new-disco.component.scss']
})
export class NewDiscoComponent {

  @Output() newDisco = new EventEmitter();
  disco: DiscoI= {
    imagen: '',
    titulo:'',
    grupo: ''
  };

  sendNewDisco(disco: DiscoI){
    console.log(disco);
    this.newDisco.emit(disco);
  }

}
