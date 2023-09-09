import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http : HttpClient) { }
  getMovies(){
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&sort_by=vote_average.desc&api_key=${environment.api_key}`)
  }
  getMoviesByPages(num:number){
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${num}&sort_by=vote_average.desc&api_key=${environment.api_key}`)
  }
}
