import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YtlinksService {

  constructor(private hc:HttpClient) { }
  getYtlink(id:String):Observable <any>{
    return this.hc.get('https://imdb-api.com/en/API/YouTubeTrailer/k_2pm80c04/'+id)
  }
}
