import { Component } from '@angular/core';
import { HardcodedauthenticationService } from '../auth/hardcodedauthentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  authenticated=false;
  constructor(public hardcodedauthentication:HardcodedauthenticationService)
  {
    
  }

  ngOnInit(){
    //this.authenticated=this.hardcodedauthentication.isUserLoggedIn();
  }

}
