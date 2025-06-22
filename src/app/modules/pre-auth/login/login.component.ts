import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ILoginUser } from '../../../interfaces/user.interface.model';

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
    private readonly router = inject(Router);
    private readonly lsService = inject(LocalStorageService);
    private readonly authService = inject(AuthService);
    private readonly fb = inject(FormBuilder);


    loginForm!:FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.buildForm()
    }

    private buildForm() {
        this.loginForm = this.fb.group({
            email:['',[Validators.required]],
            password:['',[Validators.required]],
        })
    }

    onLogin() {
        if(!this.loginForm.valid) return;

        const formValues = this.loginForm.value;
        const loginUser:ILoginUser = {
            email: formValues.email,
            password: formValues.password
        }
        this.authService.toLogin(loginUser);
    }

    goToSignup() {
        console.log('On SIGNUP');
        this.router.navigate(['signup']);

    }

    goToForgotPassword() {
        this.router.navigate(['forgot-password']);
    }

}
