import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AbouUsComponent } from './abou-us/abou-us.component';
import { CreatMovieComponent } from './creat-movie/creat-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path:"", component: MovieListComponent
  },
  {
    path:"about-us", component: AbouUsComponent
  },
  {
    path:"create-movie", component: CreatMovieComponent
  },
  {
    path:"movie/:id", component: MovieDetailsComponent
  },
  {
    path:"**", component: MovieListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
