import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FavsComponent } from './favs/favs.component';
import { PopTvComponent } from './pop-tv/pop-tv.component';
import { TvComponent } from './tv/tv.component';
import { TvsComponent } from './tvs/tvs.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';

const routes: Routes = [
  {path:"tvs",component:TvsComponent, children:[
    {path:"tv",component:TvComponent},
    {path:"ptv",component:PopTvComponent},
    {path:'',redirectTo:'/tvs/tv',pathMatch:'full'}
  ]},
  {path:"favs",component:FavsComponent},
  {path:"Watch",component:WatchLaterComponent},
  {path:"tv/:id",component:DetailsComponent},
  {path:"tvs/ptv/:id",component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
