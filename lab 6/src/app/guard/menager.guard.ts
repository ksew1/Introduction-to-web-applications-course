import { Injectable, Pipe } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from '../role.service';
import { getAuth } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class MenagerGuard implements CanActivate {
  roles: any;
  constructor(
    private router: Router,
    private roleService: RoleService,
  ) {
    this.roleService.currentData.subscribe((data) => (this.roles = data.roles));
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {


    if (getAuth().currentUser != null && this.roles.menager == true) {
      return true;
    }
    this.router.navigate(['home']);
    return false;
  }
}
