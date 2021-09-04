import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TratedService } from '../trated.service';
import AOS from 'aos';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  
  mySubscription:Subscription;
  shows:any;
  p=1;
  sorter="Rating";
  constructor(private topTv:TratedService) { 
    console.log("ho")
  }

  ngOnInit(): void {

    AOS.init({
      offset: 150,
      duration:1000,
      mirror:true
    })
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

  onPageChange(page: number){
    this.p=page;
    window.scrollTo({
      top:0,
      left:0,
      behavior: 'smooth'
    })
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
