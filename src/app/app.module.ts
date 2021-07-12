import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvComponent } from './tv/tv.component';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SortPipe } from './sort.pipe';
import { FavsComponent } from './favs/favs.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { TvsComponent } from './tvs/tvs.component';
import { PopTvComponent } from './pop-tv/pop-tv.component';

@NgModule({
  declarations: [
    AppComponent,
    TvComponent,
    CardComponent,
    DetailsComponent,
    SortPipe,
    FavsComponent,
    WatchLaterComponent,
    TvsComponent,
    PopTvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    CarouselModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
