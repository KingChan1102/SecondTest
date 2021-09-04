import { Component,OnInit,Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondApp';

  constructor(private ar: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router,public us:UserService) {

  }

  userLogout(){
    localStorage.clear();
    this.us.userLoginStatus=false;
    this.router.navigateByUrl("Login")
  }


  
}
