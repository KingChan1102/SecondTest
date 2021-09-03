import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router:Router,private user:UserService) { }

  ngOnInit(): void {
  }

  onSignUp(userCredentials): void{
    console.log(userCredentials);
    this.user.createUser(userCredentials).subscribe(
      res=>{
        if(res.message==="user is created"){
          alert("user created")
          this.router.navigateByUrl("/Login")
        }

        else if(res.message==="user already existed"){
          alert("Already a User");
          this.router.navigateByUrl("/Login");
        }

        else{
          alert("Something went wrong");
        }
      },
      err=>{
        alert("err is occured in sign up")
      }
    );
    
  }

}
