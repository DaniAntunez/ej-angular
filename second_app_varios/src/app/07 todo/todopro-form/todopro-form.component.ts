import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todopro-form',
  templateUrl: './todopro-form.component.html',
  styleUrls: ['./todopro-form.component.scss']
})
export class TodoproFormComponent {

  @Output() saveEmitter = new EventEmitter();

  text: string = "";

  save() {
    console.log("hijo emitiendo: "+this.text);
    this.saveEmitter.emit(this.text);
  }
  
}
