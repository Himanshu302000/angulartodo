import { Component,OnInit } from '@angular/core';
import { HardcodedauthenticationService } from '../auth/hardcodedauthentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(public hardcodedauthentication:HardcodedauthenticationService)
  {

  }

  ngOnInit(){
    this.hardcodedauthentication.LogOut();
  }
}
