import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { routerTransition } from '../router.animations';
import { AuthService } from './../../services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    fullName: string;
    email: string;
    password: string;
    repeatPassword: string;

    @ViewChild('userSignUpForm') userSignUpForm: any;

    constructor(public authService: AuthService,
        private router: Router) {

    }

    ngOnInit() { }

    signup() {
        this.authService.signup(this.email, this.password)
            .then(value => {
                this.userSignUpForm.reset();
                console.log('Success!', value.uid);
                this.router.navigate(['login']);
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
        this.email = this.password = '';
    }

}
