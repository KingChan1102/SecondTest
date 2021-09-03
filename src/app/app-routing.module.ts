import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FavsComponent } from './favs/favs.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PopTvComponent } from './pop-tv/pop-tv.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TvComponent } from './tv/tv.component';
import { TvsComponent } from './tvs/tvs.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';

const routes: Routes = [
  {path:"tvs",component:TvsComponent, children:[
    {path:"tv",component:TvComponent},
    {path:"ptv",component:PopTvComponent},
    {path:'',redirectTo:'/tvs/tv',pathMatch:'full'}
  ]},
  {path:"favs",component:FavsComponent},
  {path:"Watch",component:WatchLaterComponent},
  {path:"Login",component:LoginComponent},
  {path:"SignUp",component:SignUpComponent},
  {path:"userprofile/:username",component:UserprofileComponent},
  {path:"tv/:id",component:DetailsComponent},
  {path:"tvs/ptv/:id",component:DetailsComponent},
  {path:'',redirectTo:'Login',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
