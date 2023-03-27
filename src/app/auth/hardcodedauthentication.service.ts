import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) 
export class HardcodedauthenticationService {

  constructor() { }

  authenticate(username:string,password:string)
  {
    //console.log(this.isUserLoggedIn());
    if(username.length==0 || password.length==0) return false;
    sessionStorage.setItem('authenticateUser',username);
    //console.log(this.isUserLoggedIn());

    return true;
  }

  isUserLoggedIn()
  {
    let user = sessionStorage.getItem('authenticateUser');
    //console.log(user);
    return !(user == null);
  }

  LogOut()
  {
    sessionStorage.removeItem('authenticateUser');
  }
}
