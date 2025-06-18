import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
    selector: 'app-login',
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    //  private readonly router = inject(Router);
    //  private readonly lsService = inject(LocalStorageService);
    constructor(
        private router: Router,
        private lsService: LocalStorageService
    ) {}

    onLogin() {
        //set ls storage
        if(!this.lsService.isAuthAvailable()) {

            this.lsService.getDummyUser().subscribe((d) => {
                console.log('D ==>', d);
                this.lsService.setDummyUser(d)
                this.router.navigate(['auth']);
            });
        } else {
            this.router.navigate(['auth']);
        }
    }

    goToSignup() {
        console.log('On SIGNUP');
        this.router.navigate(['signup']);

    }

    goToForgotPassword() {
        this.router.navigate(['forgot-password']);
    }

}
