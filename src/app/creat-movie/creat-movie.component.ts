import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-movie',
  templateUrl: './creat-movie.component.html',
  styleUrls: ['./creat-movie.component.scss']
})
export class CreatMovieComponent implements OnInit {
  constructor() { }
  model:any
  submitMovie(values:any){
    console.log(values)
  }
  ngOnInit(): void {
  }

}
