import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { SeriesModule } from './series/series.module';
import { SharedModule } from './shared/shared.module';
import { SongsModule } from './songs/songs.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MoviesModule,
    SeriesModule,
    SongsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
