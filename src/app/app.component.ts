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

    /**
     * Event handler fired when component is initialized
     */
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

    /**
     * Returns current route for using in view
     * Also changes document title
     */
    get route() {
        const rt = this.router.url;

        if(rt == '/recover-passwd')
            document.title = this.title = 'Password recovery';
        else
            document.title = this.title = 'Login';

        return rt;
    }

    /**
     * Returns login form's email field
     */
    get email() {
        return this.loginForm.get('email');
    }

    /**
     * Returns login form's password field
     */
    get password(){
        return this.loginForm.get('password');
    }

    /**
     * Returns password recovery form's email field
     */
    get recover(){
        return this.recoverForm.get('email');
    }

    /**
     * Method responsible for handling
     * the login form's submit event
     *
     * @param value Login form's value
     */
    handleLogin(value) {

        if(!this.loginForm.touched || this.loginForm.invalid)
            return;

        console.log('handleLogin');
    }

    /**
     * Method responsible for handling the
     * password recovery form's submit event
     *
     * @param value Password recovery form's value
     */
    handlePasswdRecover(value) {

        if(!this.recoverForm.touched || this.recoverForm.invalid)
            return;

        console.log('handlePasswdRecover');
    }
}
