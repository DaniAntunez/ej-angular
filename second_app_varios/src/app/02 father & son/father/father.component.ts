import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent {

  inputText: string = "";

  keyUp(letra: string): void {
    this.inputText = letra;
    console.log(letra);
    
  }
  
}
