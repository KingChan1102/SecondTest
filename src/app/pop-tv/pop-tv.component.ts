import { Component, OnInit } from '@angular/core';
import {TratedService} from "../trated.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pop-tv',
  templateUrl: './pop-tv.component.html',
  styleUrls: ['./pop-tv.component.css']
})
export class PopTvComponent implements OnInit {

  mySubscription:Subscription;
  shows:any;
  p=1;

  constructor(private topTv:TratedService) { }

  ngOnInit(): void {
    this.mySubscription=this.topTv.getPopularTv().subscribe(
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
