import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {

  @Input() image!: { src: string, alt: string };

  constructor() { }

}
