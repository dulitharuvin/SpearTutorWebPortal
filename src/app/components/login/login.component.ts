import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from './../../router.animations';

import { UserService } from './../../services/user.service';

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
        private userService: UserService) {

    }

    ngOnInit() {
    }

    loginUser() {
        this.userService.emailLogin(this.email,this.password).then(response=>{
            console.log(response);
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/dashboard']);
        })
        .catch(error => console.log(error));
    }

}
