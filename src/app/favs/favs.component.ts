import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExtrasService } from '../extras.service';
import { UserService } from '../user.service';
import { YtlinksService } from '../ytlinks.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit {

  public favShows: any[]
  private favShowsDetails = [];
  private mySubscription: Subscription;
  p = 1;


  constructor(private extras: ExtrasService, private details: YtlinksService, private router: Router, private userService: UserService) {
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
    this.extras.getFavShows(localStorage.getItem("username")).subscribe(
      res => {
        if (res["message"] === "No shows Yet") {
          alert("No shows added");
        }
        else {
          this.favShows = res["message"].shows;
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

  // onSelectId(id:String){
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['tv/'+id]);
  // }); 
  onSelectId(id: String) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['tv/' + id]);
    });
  }

  isInFavs(id: String): boolean {
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
