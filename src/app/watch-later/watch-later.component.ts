import { Component, OnInit } from '@angular/core';
import {ExtrasService} from '../extras.service';
import { YtlinksService } from '../ytlinks.service';

@Component({
  selector: 'app-watch-later',
  templateUrl: './watch-later.component.html',
  styleUrls: ['./watch-later.component.css']
})
export class WatchLaterComponent implements OnInit {

  watchLater:any[]=[];

  p=1;

  constructor(private wacthLtr:ExtrasService) { }

  ngOnInit(): void {

    console.log("watch later ngOnInit");
    this.watchLater=this.wacthLtr.getWatchLater();

  }



}
