import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {
  
  
  constructor() { }
  private favs=[];
  private favIdsArray=[];
  private watchLater=[];
  private watchLaterIds=[];

  addToFavs(show:any){
    this.favs.push(show);

    let showId=show.id;

    this.favIdsArray.push(showId);
  }

  deleteFromFavs(showId:String){

    let index=this.favs.indexOf(showObj => showObj.id===showId);
    this.favs.splice(index,1);

    let indexId=this.favIdsArray.indexOf(showId);
    this.favIdsArray.splice(index,1);

  }

  getFavs(){
    return this.favs;
    
  }

  isFav(showId:String){
    return this.favIdsArray.includes(showId);
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
