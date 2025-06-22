import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ILoginUser, INewUser } from '../interfaces/user.interface.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly API_ENDPOINT = environment.apiUrl;
    private readonly router = inject(Router);
    private readonly http = inject(HttpClient);
    private readonly localstorageService = inject(LocalStorageService);

    constructor() {}

    isUserAuthenticated() {}

    register(newUser: INewUser): Observable<any> {
        return this.http.post<INewUser>(
            this.API_ENDPOINT + `auth/register`,
            newUser
        );
    }

    login(user:ILoginUser): Observable<any> {
         return this.http.post<ILoginUser>(
            this.API_ENDPOINT + `auth/login`,
            user
        );
    }

    toLogin(user:ILoginUser) {
        this.login(user).subscribe({
            next: (authData) => {
                console.log('AUTH DATA', authData);
                this.localstorageService.setAuthData(authData);

                this.router.navigate(['auth']);
            },
            error:(error) => {
                console.log('Error while Login', error);
            }
        })
    }
}
