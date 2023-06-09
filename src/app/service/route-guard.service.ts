import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedauthenticationService } from '../auth/hardcodedauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(public hardcodedauthentication: HardcodedauthenticationService,
    public router:Router
    ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedauthentication.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }

}
