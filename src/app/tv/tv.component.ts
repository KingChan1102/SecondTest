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
  constructor(private topTv:TratedService) { }

  ngOnInit(): void {
    console.log(1);
    this.mySubscription=this.topTv.getUsers().subscribe(
      data=>{
        this.shows=data.items;
      },
      err=>{
        console.log("err is",err);
      }
    )
  }
  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
