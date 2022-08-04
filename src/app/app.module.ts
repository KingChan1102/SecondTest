import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvComponent } from './tv/tv.component';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SortPipe } from './sort.pipe';
import { FavsComponent } from './favs/favs.component';
import { TvsComponent } from './tvs/tvs.component';
import { PopTvComponent } from './pop-tv/pop-tv.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoviesComponent } from './movies/movies.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { PopMoviesComponent } from './pop-movies/pop-movies.component';
import { McardComponent } from './mcard/mcard.component';
import { MdetailsComponent } from './mdetails/mdetails.component';
import { FavmComponent } from './favm/favm.component';
import { LazyserComponent } from './lazyser/lazyser.component';
import { LazySermComponent } from './lazy-serm/lazy-serm.component';
import { CricticComponent } from './crictic/crictic.component';
import { EventsComponent } from './events/events.component';




@NgModule({
  declarations: [
    AppComponent,
    TvComponent,
    CardComponent,
    DetailsComponent,
    SortPipe,
    FavsComponent,
    TvsComponent,
    PopTvComponent,
    LoginComponent,
    SignUpComponent,
    UserprofileComponent,
    PageNotFoundComponent,
    MoviesComponent,
    TopMoviesComponent,
    PopMoviesComponent,
    McardComponent,
    MdetailsComponent,
    FavmComponent,
    LazyserComponent,
    LazySermComponent,
    CricticComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    LoadingBarRouterModule,
    LoadingBarModule
  ],
  providers: [
    {provide :LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
