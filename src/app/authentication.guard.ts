import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private _router:Router,private _cookieToken:CookieService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const authenticateToken = this._cookieToken.get('jwtToken')
    if(authenticateToken === ""){
      this._router.navigate(["/login"])
      return false
    }
    else{ 
      return true
    }
  }
  
}
