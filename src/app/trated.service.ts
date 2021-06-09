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
}
