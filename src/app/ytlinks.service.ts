import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YtlinksService {

  constructor(private hc:HttpClient) { }
  getYtlink(id:String):Observable <any>{
    return this.hc.get('https://imdb-api.com/en/API/YouTubeTrailer/k_ee883y1o/'+id);
  }
  
  getShowDetails(id:String):Observable <any>{
    return this.hc.get("https://imdb-api.com/en/API/Title/k_ee883y1o/"+id);
  }

  getEpisodes(id:String,seasonNum:String):Observable <any>{
    return this.hc.get("https://imdb-api.com/en/API/SeasonEpisodes/k_ee883y1o/"+id+"/"+seasonNum);
  }

  getSearches(searchTerm){
    console.log("https://imdb-api.com/API/Search/k_ee883y1o/"+searchTerm);
    return this.hc.get("https://imdb-api.com/en/API/SearchSeries/k_ee883y1o/"+searchTerm);
  }
}
