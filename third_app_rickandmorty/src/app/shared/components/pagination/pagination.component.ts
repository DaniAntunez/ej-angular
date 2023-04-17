import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() changePageEmitter = new EventEmitter();
  page: number = 1;

  constructor() { }

  ngOnInit(): void { }

  // prevPage() {
  //   console.log(this.page);
  //   this.page --;
  // }

  // nextPage() {
  //   console.log(this.page);
  //   this.page ++;
  // }

  changePage(newPage: number) {
    this.page = newPage;
    this.changePageEmitter.emit(newPage);
  }
}
