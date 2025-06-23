import { Component, inject, OnInit } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { Note } from '../../models/note.model';
import {ActivatedRoute} from '@angular/router';
import { NoteService } from '../../services/note.service';
import { LocalStorageService } from '../../services/local-storage.service';
import {MatIconModule} from '@angular/material/icon';


@Component({
    selector: 'app-category',
    imports: [NoteComponent, MatIconModule],
    templateUrl: './category.component.html',
    styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
    private readonly route = inject(ActivatedRoute);
    private readonly noteService = inject(NoteService);
    private readonly localstorageService = inject(LocalStorageService);

    selectedFolderId: string | null = '';
    allNotes:any[] = []

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
            next:(notesRes) => {
                console.log('Notes', notesRes);
                this.allNotes = notesRes;
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
