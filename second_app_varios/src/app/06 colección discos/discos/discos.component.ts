import { DiscoI } from '../interfaces/disco.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.scss']
})

export class DiscosComponent {

  @Input() listado!: DiscoI[];

}
