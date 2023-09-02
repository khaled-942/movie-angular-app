import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { AbouUsComponent } from './abou-us/abou-us.component';
import { CreatMovieComponent } from './creat-movie/creat-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CurrencyPipe } from './currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MovieListComponent,
    MovieCardComponent,
    AbouUsComponent,
    CreatMovieComponent,
    MovieDetailsComponent,
    CurrencyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
