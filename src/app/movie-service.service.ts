import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http : HttpClient) { }
  getMovies(){
    return this.http.get(`${environment.baseUrl}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&page=1&sort_by=primary_release_date.desc&api_key=${environment.api_key}`)
  }
}
