import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../auth/hardcodedauthentication.service';

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
  constructor(private router:Router, private hardcodedauthenticationservice:HardcodedauthenticationService)
  {

  }
  handleLogin()
  {
    //console.log(this.hardcodedauthenticationservice.authenticate(this.username,this.password));
    
    if(!this.hardcodedauthenticationservice.authenticate(this.username,this.password))
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
