import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {ExtrasService} from '../extras.service';
import {Extras2Service} from '../extras2.service'
import { UserService } from '../user.service';
import { YtlinksService } from '../ytlinks.service';

@Component({
  selector: 'app-favm',
  templateUrl: './favm.component.html',
  styleUrls: ['./favm.component.css']
})
export class FavmComponent implements OnInit {
  public favShows:any[]
  private favShowsDetails=[];
  private mySubscription:Subscription;
  p=1;

  constructor(private extras: Extras2Service, private details: YtlinksService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.extras.getFavShows(localStorage.getItem("username")).subscribe(
      res => {
        if (res["message"] === "No shows Yet") {
          alert("No movies added");
        }
        else {
          this.favShows = res["message"].movies;
          for (let show of this.favShows) {
            console.log(show.id);
          }
        }
      },
      err => {
        console.log("err is ", err);
      }
    )

    console.log(this.favShows);

  }

  onSelectId(id:String){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['tv/'+id]);
  }); }

  isInFavs(id:String):boolean{
    return this.extras.isFav(id);
  }

  deleteFavs(id: String) {
    this.extras.deleteFromFavs(id).subscribe(
      res => {
        alert(res["message"])
        this.extras.update();
        this.isInFavs(id)
        this.ngOnInit()
      },
      err => {
        console.log("err is", err)
      }
    );
  }

  onPageChange(page: number){
    this.p=page;
    window.scrollTo({
      top:0,
      left:0,
      behavior: 'smooth'
    })
  }

}
