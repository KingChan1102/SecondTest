import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TratedService } from '../trated.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  
  mySubscription:Subscription;
  shows:any;
  p=1;
  constructor(private topTv:TratedService) { 
    console.log("ho")
  }

  ngOnInit(): void {
    console.log('hi')
    this.mySubscription=this.topTv.getUsers().subscribe(
      data=>{
        this.shows=data.items;
      },
      err=>{
        console.log("err is",err);
      }
    )
  }

  sortByYearOld(){
    this.shows.sort(function(a,b) {return Number(a.year) - Number(b.year)});
  }

  sortByYearNew(){
    this.shows.sort(function(a,b) {return Number(b.year) - Number(a.year)})
  }

  sortByAlpha(){
    this.shows.sort(function(a,b) {
      if(a.title < b.title){
        return -1;
      }
      if(a.title > b.title){
        return 1;
      }
      
    })
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
