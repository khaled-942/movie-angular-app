import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movieItem: any = {};
  @Output() sendMovie = new EventEmitter<object>();
  hello: string = 'Hello from child';
  constructor() {}
  sendData() {
    console.log('from child', this.movieItem);
    this.sendMovie.emit(this.movieItem);
  }

  ngOnInit(): void {}
}
