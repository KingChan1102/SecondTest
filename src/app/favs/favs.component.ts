import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {ExtrasService} from '../extras.service';
import { YtlinksService } from '../ytlinks.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit {

  public favShows:any[]
  private favShowsDetails=[];
  private mySubscription:Subscription;
  p=1;


  constructor(private favs:ExtrasService,private details:YtlinksService,private router:Router) { 
  //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
  //     return false;
  //   }

  //   this.router.events.subscribe((evt) => {
  //     if (evt instanceof NavigationEnd) {
  //        // trick the Router into believing it's last link wasn't previously loaded
  //        this.router.navigated = false;
  //        // if you need to scroll back to top, here is the right place
  //        window.scrollTo(0, 0);
  //     }
  // });
  }

  ngOnInit(): void {


    this.favShows=this.favs.getFavs();

    console.log(this.favShows);

    }

  

}
