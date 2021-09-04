import { Component, OnInit } from '@angular/core';
import {TratedService} from "../trated.service";
import { Subscription } from 'rxjs';
import AOS from 'aos';


@Component({
  selector: 'app-pop-tv',
  templateUrl: './pop-tv.component.html',
  styleUrls: ['./pop-tv.component.css']
})
export class PopTvComponent implements OnInit {

  mySubscription:Subscription;
  shows:any;
  p=1;
  sorter="Rating";

  constructor(private topTv:TratedService) { }

  ngOnInit(): void {
    AOS.init({
      offset: 150,
      duration:1000,
      mirror:true
    })
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
    this.sorter="Old";
    this.shows.sort(function(a,b) {return Number(a.year) - Number(b.year)});
  }

  sortByYearNew(){
    this.sorter="New"
    this.shows.sort(function(a,b) {return Number(b.year) - Number(a.year)})
  }

  sortByRating(){
    this.sorter="Rating"
    this.shows.sort(function(a,b) {return Number(b.imDbRating) - Number(a.imDbRating)})
  }

  sortByAlpha(){
    this.sorter="A-Z"
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
