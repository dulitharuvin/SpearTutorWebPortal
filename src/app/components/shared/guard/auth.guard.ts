import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../../services/auth.service';
import { UserService } from './../../../services/user.service';
import * as _ from 'lodash';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
        private userService: UserService,
        private router: Router) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.userService.authenticated) {
            console.log('my roles ' + this.authService.userRoles);
            
            console.log('my authguard ' + this.userService.currentUserId);
            this.userService.userRefLogedIn.valueChanges()
                .take(1)
                .map(user => _.has(_.get(user, 'roles'), 'admin'))
                .do(authorized => {
                    if (!authorized) {
                        console.log('route prevented!')
                        this.router.navigate(['/login']);
                        return false;
                    }
                    this.router.navigate(['/not-found']);
                    return true;
                })
        }
        this.router.navigate(['/login']);
        return false;
    }

    // canActivate() {
    //     if (localStorage.getItem('isLoggedin')) {
    //         return true;
    //     }

    //     this.router.navigate(['/login']);
    //     return false;
    // }
}
