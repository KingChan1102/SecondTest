import { Component, OnInit,Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TratedService } from '../trated.service';
import { YtlinksService } from '../ytlinks.service';
import {DomSanitizer} from '@angular/platform-browser'
import { Router } from '@angular/router';
import {ExtrasService} from '../extras.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() showObj:any;

  mySubscription:Subscription;
  mySubscription1:Subscription;
  detail:any;
  videoPlayer:any;
  from:any;

  constructor(private router:Router,private extras:ExtrasService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.from=this.ar.snapshot.url[0].path;
  }


  onSelectId(id:String){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['tv/'+id]);
  }); 
    // if(this.from === "tv"){
    //   this.router.navigateByUrl("tvs/tv/"+id);
    // }
    // if(this.from === "ptv"){
    //   this.router.navigateByUrl("tvs/ptv/"+id);

    // }
    // console.log(id);
  }

  isInFavs(id:String):boolean{
    return this.extras.isFav(id);
  }

  isInWatchLater(id:String):boolean{
    return this.extras.isWatchLater(id);
  }
  
  addToFavs(show:any){
    this.extras.addToFavs(show);
  }

  addToWatchLater(show:any){
    this.extras.addToWatchLater(show);
  }

  deleteFavs(id:String){
    this.extras.deleteFromFavs(id);
  }

  deleteWatchLater(id:String){
    this.extras.deleteFromWatchLater(id);
  }

  

}
