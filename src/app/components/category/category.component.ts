import { Component, inject, OnInit } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { Note } from '../../models/note.model';
import {
    Router,
    Event,
    NavigationStart,
    NavigationEnd,
    NavigationError,
    ActivatedRoute,
} from '@angular/router';
import { Folder } from '../../models/sidenav.model';
import { NoteService } from '../../services/note.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    selector: 'app-category',
    imports: [NoteComponent],
    templateUrl: './category.component.html',
    styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
    private readonly route = inject(ActivatedRoute);
    private readonly noteService = inject(NoteService);
    private readonly localstorageService = inject(LocalStorageService);

    selectedFolderId: string | null = '';
    constructor() {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.selectedFolderId = params.get('folderId'); // Reactively update on route changes
            console.log('MENU NAME ', this.selectedFolderId);
            //get all notes under this folder
            this.getAllNotes(this.selectedFolderId);

            //we pick from ls
        });
    }

    getAllNotes(folderId: any) {
        const userId = this.localstorageService.getLoginUserId();

        this.noteService.getAllNotes(userId, folderId).subscribe({
            next:(Notes) => {
                console.log('Notes', Notes);
            },
            error:(error) => {
                console.log('error', error);
            }
        })
    }

    addNewNote() {
        const newNote = new Note('', '', false);
        console.log('New note ', newNote);
    }
}
