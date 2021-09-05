import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TratedService {

  constructor(private hc:HttpClient) { }

  getUsers():Observable <any>{
    return this.hc.get <any>('https://imdb-api.com/en/API/Top250TVs/k_2pm80c04');
  }

  getPopularTv():Observable <any>{
    return this.hc.get <any>('https://imdb-api.com/en/API/MostPopularTVs/k_2pm80c04')
  }

  getTopMovies():Observable<any>{
    return this.hc.get <any>("https://imdb-api.com/en/API/Top250Movies/k_2pm80c04")
  }

  getPopularMovies():Observable<any>{
    return this.hc.get <any>("https://imdb-api.com/en/API/MostPopularMovies/k_2pm80c04")
  }
  
}
