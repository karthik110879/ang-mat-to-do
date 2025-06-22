import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { INewUser } from '../../../interfaces/user.interface.model';

@Component({
    selector: 'app-register',
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
    private readonly router = inject(Router);
    private readonly authService = inject(AuthService);
    private readonly fb = inject(FormBuilder);

    registrationForm!: FormGroup;

    constructor() {}

    ngOnInit(): void {
        //call build form
        this.buildForm();
    }

    private buildForm() {
        this.registrationForm = this.fb.group(
            {
                username: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(6)]],
                confirmPassword: ['', [Validators.required]],
            },
            { validators: this.passwordMatchValidator }
        );
    }

    private passwordMatchValidator(form: FormGroup) {
        const password = form.get('password')?.value;
        const confirmPassword = form.get('confirmPassword')?.value;
        return password === confirmPassword ? null : { passwordMismatch: true };
    }

    goToLogin() {
        this.router.navigate(['login']);
    }

    onRegister() {
        if (!this.registrationForm.valid) return;

        // this.authService.register()
        console.log('this.registrationForm', this.registrationForm.value);
        const formValues = this.registrationForm.value;
        const newUser : INewUser = {
            email: formValues.email,
            username: formValues.username,
            password: formValues.password
        };

        this.authService.register(newUser).subscribe(d=> {
            console.log(d);
            if(d) {
               this.goToLogin();
            }

        })
    }
}
