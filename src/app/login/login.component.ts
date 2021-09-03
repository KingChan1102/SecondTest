import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private user:UserService) { }

  ngOnInit(): void {
  }

  onLogin(userCredentials){
    
    this.user.loginUser(userCredentials).subscribe(
      res=>{
        if(res.message==="Login successful"){
          localStorage.setItem("token",res.token)
          localStorage.setItem("username",res.username)
          localStorage.setItem("UserObj",JSON.stringify(res.userObj))
          this.user.userLoginStatus=true;

          alert("Login Sucessful");
          this.router.navigateByUrl(`userprofile/${res.username}`);
        }
        else if(res.message==="Wrong Password"){
          alert("Enter Correct Password");
        }
        else{
          alert("Not valid username");
        }
      },
      err=>{
        alert("Error occured while logging in")
      }
    )

  }

  signUp(): void{
    this.router.navigateByUrl("/SignUp");
  }
}