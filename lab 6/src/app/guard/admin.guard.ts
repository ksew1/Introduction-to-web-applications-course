import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { getAuth } from '@angular/fire/auth';
import { RoleService } from '../role.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  roles: any
  constructor(private router: Router, private roleService: RoleService) {
    this.roleService.currentData.subscribe((data) => (this.roles = data.roles))
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (getAuth().currentUser != null && this.roles.admin == true) {
      return true;
    }
    this.router.navigate(['home']) ;
    return false;
  }
}
