
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsServiceService {

  constructor(private hc:HttpClient) { }

  addToComments(commentObj):Observable<any>{
    console.log(commentObj);

    return this.hc.post("/user/add-to-comments",commentObj);
  }

  getComments(id):Observable<any>{
    console.log(id);
    console.log("get comments")
    return this.hc.get(`user/get-comments/${id}`);
  }
}
