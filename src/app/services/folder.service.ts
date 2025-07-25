import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FolderService {
    private readonly API_ENDPOINT = environment.apiUrl;
    private readonly router = inject(Router);
    private readonly http = inject(HttpClient);
    private readonly localstorageService = inject(LocalStorageService);

    constructor() {}

    createFolder(userId:string, title:any):Observable<any> {
        return this.http.post(this.API_ENDPOINT + `auth/user/${userId}/folder/`, title)
    }

    getAllFolders(userId:string) : Observable<any> {
        return this.http.get(this.API_ENDPOINT + `auth/user/${userId}/folders/`);
    }

    updateFolderTitle() {}

    deleteFolder(userId:string, folderId:string): Observable<any> {
        return this.http.delete(this.API_ENDPOINT + `auth/user/${userId}/folder/${folderId}`);
    }
}
