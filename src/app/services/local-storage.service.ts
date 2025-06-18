import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor(
        private httpClient: HttpClient
    ){}

    setEmptyStore() {
        return localStorage.setItem('notes', JSON.stringify([]));
    }

    getDummyUser() {
        return this.httpClient.get(`/assets/static/dev-user.json`);
    }

    setDummyUser(data:any) {
        localStorage.setItem('authData', JSON.stringify(data));
    }

    isAuthAvailable():boolean {
        return !JSON.stringify(localStorage.getItem('authData')) ? false : true;
    }
}
