import { Component, inject, OnInit } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { Note } from '../../models/note.model';
import { CategoryComponent } from '../category/category.component';
import { routes } from '../../app.routes';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NoteEditorComponent } from '../note-editor/note-editor.component';

@Component({
    selector: 'app-home',
    imports: [CategoryComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    private readonly actRouter = inject(ActivatedRoute);
    private readonly dialogService = inject(MatDialog);


    itemId: string | null = null;

    constructor() {}

    ngOnInit(): void {
        this.actRouter.paramMap.subscribe((params) => {
            this.itemId = params.get('folderId'); // Reactively update on actRouter changes
            console.log('MENU NAME ', this.itemId);
        });
    }

    openNewNote(event: any) {
        console.log('openNewNote', event);
        const dialogRef = this.dialogService.open(NoteEditorComponent, {
            data: {
                folderId: this.itemId,
                type: 'new'
            }
        });

        dialogRef.afterClosed().subscribe((d) => {
            console.log('After Closed ==>', d);
        });
    }
}
