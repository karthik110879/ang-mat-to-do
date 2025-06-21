import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ILoginUser, INewUser } from '../interfaces/user.interface.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly API_ENDPOINT = environment.apiUrl;
    private readonly http = inject(HttpClient);

    constructor() {}

    isUserAuthenticated() {}

    register(newUser: INewUser): Observable<any> {
        return this.http.post<INewUser>(
            this.API_ENDPOINT + `auth/register`,
            newUser
        );
    }

    login(user:ILoginUser) {
         return this.http.post<ILoginUser>(
            this.API_ENDPOINT + `auth/login`,
            user
        );
    }
}
