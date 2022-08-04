import { Component, OnInit } from '@angular/core';
import { YtlinksService } from '../ytlinks.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lazyser',
  templateUrl: './lazyser.component.html',
  styleUrls: ['./lazyser.component.css']
})
export class LazyserComponent implements OnInit {
  flag=0;
  p=1;

  temp:any;
  temp2;
  shows:any;


  constructor(private service:YtlinksService,private router:Router) { }

  ngOnInit(): void { 
    
    if(localStorage.getItem("searchTerm")!==null){
      this.onSearch(localStorage.getItem("searchTerm"))
      console.log(localStorage.getItem("searchTerm")+"hello")
    }

  }



  onSearch(searchTerm){
    localStorage.setItem("searchTerm",searchTerm);
    this.flag=1;
    this.temp2=searchTerm;
    
    console.log(searchTerm)
    this.service.getSearches(searchTerm.search).subscribe(
      res=>{
        this.temp=res;
        this.shows=this.temp.results;
        console.log(this.shows);
      },
      err=>{
        console.log("err is ",err)
      }
    )


  }

  onSelectId(showId){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['tv/'+showId]);
  }); 

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
