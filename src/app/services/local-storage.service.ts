import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    private http = inject(HttpClient);

    constructor() {}

    setEmptyStore() {
        return localStorage.setItem('notes', JSON.stringify([]));
    }

    getDummyUser() {
        return this.http.get(`../../assets/static/dev-user.json`);
    }

    setDummyUser(data:any) {
        return localStorage.setItem('authData', JSON.stringify(data));
    }
}
