import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {
  un=localStorage.getItem("username");

  private favoShows=[];
  

  constructor(private hc:HttpClient) {

    this.hc.get(`/user/show-favs/${localStorage.getItem("username")}`).subscribe(
      res=>{
        for(let s of res["message"].shows){
          this.favoShows.push(s.id)
        }
      },
      err=>{
        console.log("err is err")
      }
    )
    console.log(this.favoShows)
    
   }
  private favs=[];
  private favIdsArray=[];
  
  
  

  update(){


    this.hc.get(`/user/show-favs/${localStorage.getItem("username")}`).subscribe(
      res=>{
        
        let favoShowsLength=this.favoShows.length
        for(let i=0;i<favoShowsLength;i++){
          if(i==this.favoShows.length-1){
            try{this.favoShows.push(res["message"].shows[favoShowsLength].id);}
            catch{}
          }
          else{
            this.favoShows[i]=res["message"].shows[i].id
          }
        }
        this.favoShows.splice(res["message"].shows.length,(favoShowsLength-res["message"].shows.length))
        console.log(this.favoShows)
      },
      err=>{
        console.log("err is ",err)
      }
    )

  }

  addToFavs2(userShowObj):Observable<any>{
    
    return this.hc.post("/user/add-to-favs",userShowObj);

  }

  deleteFromFavs(showId:String):Observable<any>{

    return this.hc.put(`/user/delete-favs/${localStorage.getItem("username")}`,{id:showId});

  }

  getFavShows(username):Observable<any>{
    
    return this.hc.get(`/user/show-favs/${username}`)
  }

  isFav(showId:String){

    return this.favoShows.includes(showId);
  }

  
}
