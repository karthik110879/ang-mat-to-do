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
        if(!JSON.stringify(localStorage.getItem('authData'))) {
            return false;
        }
        return true
    }

    isUserAuthenticated():boolean {
        const authData = this.getAuthData();
        if(!authData || !authData.token || authData.token=='' || !authData.user ) return false;
        return true;
    }

    setAuthData(data:any){
        localStorage.setItem('authData', JSON.stringify(data));
    }

    clearAuthData(){
        localStorage.removeItem('authData');
    }

    getAuthData(){
        let authData = localStorage.getItem('authData')
        if(!authData) return null;
        return JSON.parse(authData);
    }

    getLoginUserId() {
        const authData = this.getAuthData();
        return authData?.user?.id;
    }
}
