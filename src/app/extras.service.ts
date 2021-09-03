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

    // this.extras.getFavShows(localStorage.getItem("username")).subscribe(
    //   res=>{
    //     this.favs=res["message"].shows
    //     for(let s of this.favs){
    //       this.favoShows.push(s.id);
    //     }
    //   },
    //   err=>{
    //     console.log("err is ",err)
    //   }
    // )

    // return this.favIds.includes(id);

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
  private watchLater=[];
  private watchLaterIds=[];


  
  addToFavs(show:any){

    this.favs.push(show);

    let showId=show.id;

    this.favIdsArray.push(showId);

  }

  update(){

    // this.favoShows.splice(0,this.favoShows.length)

    this.hc.get(`/user/show-favs/${localStorage.getItem("username")}`).subscribe(
      res=>{
        // for(let s of res["message"].shows){
        //   this.favoShows.push(s.id)
        // }
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
    // this.hc.get(`/user/show-favs/${this.un}`).subscribe(
    //   res=>{
    //     if(res["message"]==="No shows Yet"){
          
    //     }
    //     else{
    //       let favorites=res["message"].shows;
    //       // for (let favos of favorites){
    //       //   this.favoShows.push(favos.id);
    //       // }
    //     }
    //   },
    //   err=>{
    //     console.log("err is ",err)
    //   }
    // )
    return this.favoShows.includes(showId);
  }

  addToWatchLater(show:any){
    this.watchLater.push(show);
    this.watchLaterIds.push(show.id);
  }

  deleteFromWatchLater(showId:String){
    let index=this.watchLater.indexOf(show=>show.id===showId);
    this.watchLater.splice(index,1);

    let indexId=this.watchLaterIds.indexOf(showId);
    this.watchLaterIds.splice(index,1);
  }

  getWatchLater():any[]{
    return this.watchLater;
  }

  isWatchLater(showId:String){
    let val=this.watchLaterIds.includes(showId);
    return val;
  }
}
