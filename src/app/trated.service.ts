import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TratedService {

  constructor(private hc:HttpClient) { }

  getUsers():Observable <any>{
    return this.hc.get <any>('https://imdb-api.com/en/API/Top250TVs/k_e4ttl3ui');
  }

  getPopularTv():Observable <any>{
    return this.hc.get <any>('https://imdb-api.com/en/API/MostPopularTVs/k_e4ttl3ui')
  }

  getTopMovies():Observable<any>{
    return this.hc.get <any>("https://imdb-api.com/en/API/Top250Movies/k_e4ttl3ui")
  }

  getPopularMovies():Observable<any>{
    return this.hc.get <any>("https://imdb-api.com/en/API/MostPopularMovies/k_e4ttl3ui")
  }
  
}
