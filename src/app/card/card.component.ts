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
  favs=[];
  favIds=[]

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
    // console.log(this.extras.isFav(id))
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

  deleteFavs(show){
    this.extras.deleteFromFavs(show.id).subscribe(
      res=>{
        alert(res["message"])
        this.extras.update();
        this.isInFavs(show.id);
      },
      err=>{
        console.log("err is",err)
      }
    );
  }

  deleteWatchLater(id:String){
    this.extras.deleteFromWatchLater(id);
  }


}
