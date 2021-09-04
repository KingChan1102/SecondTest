import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { YtlinksService } from '../ytlinks.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import {ExtrasService} from '../extras.service';
import {Extras2Service} from '../extras2.service'


@Component({
  selector: 'app-mdetails',
  templateUrl: './mdetails.component.html',
  styleUrls: ['./mdetails.component.css']
})
export class MdetailsComponent implements OnInit {
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

  constructor(private ar: ActivatedRoute, private video: YtlinksService, private sanitizer: DomSanitizer, private router: Router,private extras:Extras2Service) { }

  ngOnInit(): void {
    window.scrollTo(0,0);

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

  isInFavs(id:String):boolean{
    
    return this.extras.isFav(id);

  }

  addToFavs(show:any){
    let username=localStorage.getItem("username");
    let newUserProductObj={username,show}
    console.log(newUserProductObj);
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
  
  ngOnDestroy() {
    this.mySubscription1.unsubscribe();
    this.mySubscription2.unsubscribe();
  }
}
