import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.scss']
})
export class MyImageComponent {

  @Input() image!: { src: string, alt: string };

  constructor() { }
}
