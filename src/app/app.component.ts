import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Login';
    user: any = {
      email: '',
      password: '',
    };

    loginForm:FormGroup = null;
    recoverForm:FormGroup = null;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder
        ) {

    }

    ngOnInit() {

        this.loginForm = this.formBuilder.group({
            'email': new FormControl(this.user.email, [
                Validators.required,
                Validators.email,
                Validators.minLength(10),
            ]),
            'password': new FormControl(this.user.password, [
                Validators.required,
                Validators.minLength(6),
            ]),
        });

        this.recoverForm = this.formBuilder.group({
            'email': new FormControl(this.user.email, [
                Validators.required,
                Validators.email,
                Validators.minLength(10),
            ]),
        })

    }

    get route() {
        const rt = this.router.url;

        if(rt == '/recover-passwd')
            document.title = this.title = 'Password recovery';
        else
            document.title = this.title = 'Login';

        return rt;
    }

    get email() {
        return this.loginForm.get('email');
    }

    get password(){
        return this.loginForm.get('password');
    }

    get recover(){
        return this.recoverForm.get('email');
    }

    handleLogin(value) {

        if(!this.loginForm.touched || this.loginForm.invalid)
            return;

        console.log('handleLogin');
    }

    handlePasswdRecover(value) {

        if(!this.recoverForm.touched || this.recoverForm.invalid)
            return;

        console.log('handlePasswdRecover');
    }
}
