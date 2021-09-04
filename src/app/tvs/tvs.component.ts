import { Component, OnInit } from '@angular/core';
import AOS from 'aos'

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent implements OnInit {
  un=localStorage.getItem("username");

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
