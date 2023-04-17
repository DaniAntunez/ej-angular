import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todopro-list',
  templateUrl: './todopro-list.component.html',
  styleUrls: ['./todopro-list.component.scss']
})
export class TodoproListComponent {

  @Input() data!: any

}
