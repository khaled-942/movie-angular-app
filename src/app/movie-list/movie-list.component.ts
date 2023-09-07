import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
import { Movies } from '../interface/interfaces';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  moviesList?: Movies[]
  reciveMovie(movieItem: any) {
    console.log('from parent', movieItem);
    this.router.navigate([`movie/${movieItem.id}`]);
  }

  constructor(private router: Router, private movieServices : MovieServiceService) {}

  ngOnInit(): void {
    this.movieServices.getMovies().subscribe((data:any)=>{
      this.moviesList = data.results
      console.log(this.moviesList);
    })
  }
  redirect() {
    this.router.navigate(['/about-us']);
  }
  ngAfterViewInit() {
    
  }
}
