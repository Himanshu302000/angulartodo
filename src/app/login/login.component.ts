import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username="Himanshu";
  password="password";
  error_message:any;
  invalidLogin=false;
  constructor(private router:Router)
  {

  }
  handleLogin()
  {
    //console.log(this.username+" "+this.password);
    if(this.username.length==0 || this.password.length==0)
    {
      this.invalidLogin=true;
      this.error_message="Please type both username and password";
    }
    else
    {
      this.error_message="login successfull";
      this.invalidLogin=false;
    }

    if(!this.invalidLogin)
    {
      this.router.navigate(['welcome',this.username]);
    }

  }
}
