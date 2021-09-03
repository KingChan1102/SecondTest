import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { YtlinksService } from '../ytlinks.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import {ExtrasService} from '../extras.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  mySubscription1: Subscription;
  mySubscription2: Subscription;
  mySubscription3: Subscription;
  videoPlayer: any;
  details: any;
  epidata: any[];
  id: any;
  from: any;
  favs=[];
  favIds=[]

  constructor(private ar: ActivatedRoute, private video: YtlinksService, private sanitizer: DomSanitizer, private router: Router,private extras:ExtrasService) {


    // console.log('hi')
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
    window.scrollTo(0,0);

  //   console.log("hi");
  //     this.router.routeReuseStrategy.shouldReuseRoute = function () {
  //     return false;
  //   }

  //   this.router.events.subscribe((evt) => {
  //     if (evt instanceof NavigationEnd) {
  //        // trick the Router into believing it's last link wasn't previously loaded
  //        this.router.navigated = false;

  //        // if you need to scroll back to top, here is the right place

  //        window.scrollTo(0, 0);

  //        location.reload();
         
  //     }

  // });
    this.from=this.ar.snapshot.url[1].path;
    this.id = this.ar.snapshot.params.id;

    

    this.mySubscription1 = this.video.getYtlink(this.id).subscribe(
      data => {
        this.videoPlayer = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + data.videoId);
      },
      err => {
        console.log("err is ", err);
      }
    )
    this.mySubscription2 = this.video.getShowDetails(this.id).subscribe(
      data1 => {
        this.details = data1;
      },
      err => {
        console.log("err is ", err);
      }
    );



  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoHeight: true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  totalSeasons(): number {
    let seasons = this.details.tvSeriesInfo.seasons.length;
    console.log(seasons);
    return seasons;
  }

  getEpisodes(season: String) {
    this.video.getEpisodes(this.id, season).subscribe(
      data2 => {
        this.epidata = data2;
        console.log(this.epidata);
      },
      err => {
        console.log("err is", err);
      }
    )
  }

  getSeasonArray() {
    return this.details.tvSeriesInfo.seasons;
  }

  isInFavs(id:String):boolean{
    // this.extras.getFavShows(localStorage.getItem("username")).subscribe(
    //   res=>{
    //     this.favs=res["message"].shows
    //     for(let s of this.favs){
    //       this.favIds.push(s.id);
    //     }
    //   },
    //   err=>{
    //     console.log("err is ",err)
    //   }
    // )

    // return this.favIds.includes(id);
    return this.extras.isFav(id);

  }

  isInWatchLater(id:String):boolean{
    return this.extras.isWatchLater(id);
  }
  
  addToFavs(show:any){
    let username=localStorage.getItem("username");
    let newUserProductObj={username,show}
    console.log(newUserProductObj);
    // this.extras.addToFavs(show);
    this.extras.addToFavs2(newUserProductObj).subscribe(
      res=>{
        alert(res['message'])
        this.extras.update();
        this.isInFavs(show.id)
      },
      err=>{
        console.log("err is ",err)
      }
    )

    // this.extras.update();
    // this.isInFavs(show.id)

  }

  addToWatchLater(show:any){
    this.extras.addToWatchLater(show);
  }

  deleteFavs(id:String){
    this.extras.deleteFromFavs(id).subscribe(
      res=>{
        console.log(res["message"])
        this.extras.update();
        this.isInFavs(id)
      },
      err=>{
        console.log("err is",err)
      }
    );
  }
  deleteWatchLater(id:String){
    this.extras.deleteFromWatchLater(id);
  }


  


  ngOnDestroy() {
    this.mySubscription1.unsubscribe();
    this.mySubscription2.unsubscribe();
  }

}
