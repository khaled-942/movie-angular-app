import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
import { Movies } from '../interface/interfaces';
import { PagesService } from '../pages.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  moviesList?: Movies[];
  currentPage!: number;
  reciveMovie(movieItem: any) {
    console.log('from parent', movieItem);
    this.router.navigate([`movie/${movieItem.id}`]);
  }

  constructor(
    private router: Router,
    private movieServices: MovieServiceService,
    private page: PagesService
  ) {}

  ngOnInit(): void {
    this.movieServices.getMovies().subscribe((data: any) => {
      this.moviesList = data.results;
      console.log(this.moviesList);
    });
    this.page.pageObserv.subscribe((page) => {
      this.currentPage = page;
    });
  }
  redirect() {
    this.router.navigate(['/about-us']);
  }
  ngAfterViewInit() {}

  pagination(pageNum: number) {
    this.page.setPages(pageNum);
    this.movieServices
      .getMoviesByPages(this.currentPage)
      .subscribe((data: any) => {
        this.moviesList = data.results;
        console.log(this.moviesList);
      });
  }

  // backPage() {
  //   if (this.currentPage >= 1) {
  //     this.currentPage -= 1;
  //   } else {
  //     this.currentPage = 1;
  //   }
  //   this.page.setPages(this.currentPage);
  //   this.movieServices
  //     .getMoviesByPages(this.currentPage)
  //     .subscribe((data: any) => {
  //       this.moviesList = data.results;
  //       console.log(this.moviesList);
  //     });
  // }

  // nextPage() {
  //   if (this.currentPage <= 3) {
  //     this.currentPage += 1;
  //   } else {
  //     this.currentPage = 3;
  //   }
  //   this.page.setPages(this.currentPage);
  //   this.movieServices
  //     .getMoviesByPages(this.currentPage)
  //     .subscribe((data: any) => {
  //       this.moviesList = data.results;
  //       console.log(this.moviesList);
  //     });
  // }
}
