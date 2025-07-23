import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NoteService {
    private readonly API_ENDPOINT = environment.apiUrl;
    private readonly router = inject(Router);
    private readonly http = inject(HttpClient);
    private readonly localstorageService = inject(LocalStorageService);

    constructure() {}

    getAllNotes(userId: string, folderId: string): Observable<any> {
        return this.http.get(
            this.API_ENDPOINT + `auth/user/${userId}/folders/${folderId}/notes`
        );
    }

    createNote(
        userId: string,
        folderId: string,
        notePayload: any
    ): Observable<any> {
        return this.http.post(
            this.API_ENDPOINT + `auth/user/${userId}/folder/${folderId}/note`,
            notePayload
        );
    }

    updateNote(
        userId: string,
        folderId: string,
        noteId: string,
        updatedNotePayload: any
    ): Observable<any> {
        return this.http.post(
            this.API_ENDPOINT + `auth/user/${userId}/folders/${folderId}/notes/${noteId}`,
            updatedNotePayload
        );
    }

    deleteNote(
        userId: string,
        folderId: string,
        noteId: string
    ): Observable<any> {
        return this.http.delete(
            this.API_ENDPOINT + `auth/user/${userId}/folders/${folderId}/notes/${noteId}`
        );
    }
}
