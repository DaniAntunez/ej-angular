import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

    lista = {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuK35FEGZgyZ4bipd4Emlf9MRZgue7cIszA&usqp=CAU',
      title: 'Mario',
      price: 100
    }
}
