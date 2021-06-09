import { Component, OnInit,Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TratedService } from '../trated.service';
import { YtlinksService } from '../ytlinks.service';
import {DomSanitizer} from '@angular/platform-browser'
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  onSelectId(id:String){
    this.router.navigateByUrl("card/"+id);
  }
}
