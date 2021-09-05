import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Extras2Service {

  un=localStorage.getItem("username");

  private favoMovies=[];

  constructor(private hc:HttpClient) {
    this.hc.get(`/user/show-movies/${localStorage.getItem("username")}`).subscribe(
      res=>{
        for(let s of res["message"].movies){
          this.favoMovies.push(s.id)
        }
      },
      err=>{
        console.log("err is err")
      }
    )
    console.log(this.favoMovies)
   }


   private favs=[];
  private favIdsArray=[];
  
  update(){
    this.hc.get(`/user/show-movies/${localStorage.getItem("username")}`).subscribe(
      res=>{
        
        let favoMoviesLength=this.favoMovies.length
        if(favoMoviesLength===0){this.favoMovies.push(res["message"].movies[favoMoviesLength].id)}
        else{
          for(let i=0;i<favoMoviesLength;i++){
            if(i==this.favoMovies.length-1){
              try{this.favoMovies.push(res["message"].movies[favoMoviesLength].id);}
              catch{}
            }
            else{
              this.favoMovies[i]=res["message"].movies[i].id
            }
          }
          this.favoMovies.splice(res["message"].movies.length,(favoMoviesLength-res["message"].movies.length))
          console.log(this.favoMovies)
        }
        }
        ,
      err=>{
        console.log("err is ",err)
      }
    )

  }

  addToFavs2(userShowObj):Observable<any>{
    
    return this.hc.post("/user/add-to-favm",userShowObj);

  }

  deleteFromFavs(showId:String):Observable<any>{

    return this.hc.put(`/user/delete-movies/${localStorage.getItem("username")}`,{id:showId});

  }

  getFavShows(username):Observable<any>{
    
    return this.hc.get(`/user/show-movies/${username}`)
  }

  isFav(showId:String){

    return this.favoMovies.includes(showId);
  }







}
