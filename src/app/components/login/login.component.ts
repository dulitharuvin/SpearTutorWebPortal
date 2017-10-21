import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from './../../router.animations';

import { AuthService } from './../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;

    constructor(public router: Router,
        private authService: AuthService) {

    }

    ngOnInit() {
    }

    loginUser() {
        this.authService.emailLogin(this.email, this.password).then(response => {
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/dashboard']);
        })
            .catch(error => console.log(error));
    }

}
