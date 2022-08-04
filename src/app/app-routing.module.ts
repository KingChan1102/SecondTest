import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CricticComponent } from './crictic/crictic.component';
import { DetailsComponent } from './details/details.component';
import { FavmComponent } from './favm/favm.component';
import { FavsComponent } from './favs/favs.component';
import { LazyserComponent } from './lazyser/lazyser.component';
import { LoginComponent } from './login/login.component';
import { MdetailsComponent } from './mdetails/mdetails.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PopMoviesComponent } from './pop-movies/pop-movies.component';
import { PopTvComponent } from './pop-tv/pop-tv.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { TvComponent } from './tv/tv.component';
import { TvsComponent } from './tvs/tvs.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path:"tvs",component:TvsComponent, children:[
    {path:"tv",component:TvComponent},
    {path:"ptv",component:PopTvComponent},
    {path:'',redirectTo:'/tvs/tv',pathMatch:'full'}
  ]},
  {path:"movies",component:MoviesComponent, children:[
    {path:"tmovies",component:TopMoviesComponent},
    {path:"pmovies",component:PopMoviesComponent},
    {path:'',redirectTo:'/movies/tmovies',pathMatch:'full'}
  ]},
  {path:"favs",component:FavsComponent},
  {path:"favm",component:FavmComponent},
  {path:"profile",component:UserprofileComponent},
  {path:"Login",component:LoginComponent},
  {path:"lazy",component:LazyserComponent},
  {path:"SignUp",component:SignUpComponent},
  {path:"userprofile/:username",component:UserprofileComponent},
  {path:"tv/:id",component:DetailsComponent},
  {path:"tmovies/:id",component:MdetailsComponent},
  {path:"tvs/ptv/:id",component:DetailsComponent},
  {path:"Crictic",component:CricticComponent},
  {path:'',redirectTo:'/Login',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
