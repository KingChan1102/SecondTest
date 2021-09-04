import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TratedService } from '../trated.service';
import { YtlinksService } from '../ytlinks.service';
import {DomSanitizer} from '@angular/platform-browser'
import { Router } from '@angular/router';
import {ExtrasService} from '../extras.service';
import {Extras2Service} from '../extras2.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-mcard',
  templateUrl: './mcard.component.html',
  styleUrls: ['./mcard.component.css']
})
export class McardComponent implements OnInit {

  @Input() showObj:any

  mySubscription:Subscription;
  mySubscription1:Subscription;
  detail:any;
  videoPlayer:any;
  from:any;
  favs=[];
  favIds=[]

  constructor(private router:Router,private extras:Extras2Service,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.from=this.ar.snapshot.url[0].path;

  }

  onSelectId(id:String){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['tmovies/'+id]);
  }); 
    
  }

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

}
