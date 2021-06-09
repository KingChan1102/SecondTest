import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { YtlinksService } from '../ytlinks.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  mySubscription1:Subscription;
  mySubscription2:Subscription;
  videoPlayer:any;

  constructor(private ar:ActivatedRoute,private video:YtlinksService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    this.mySubscription1=this.video.getYtlink(id).subscribe(
      data=>{
        this.videoPlayer=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+data.videoId);
      },
      err=>{
        console.log("err is ",err);
      }
    )
  }

}
