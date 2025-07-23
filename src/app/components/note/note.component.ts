import { Component, OnInit, OnDestroy, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NoteEditorComponent } from '../note-editor/note-editor.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoteService } from '../../services/note.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    selector: 'app-note',
    imports: [FormsModule, MatButtonModule, MatIconModule],
    templateUrl: './note.component.html',
    styleUrl: './note.component.scss',
})
export class NoteComponent implements OnInit, OnDestroy {
    readonly dialogService = inject(MatDialog);
    readonly localstorageService = inject(LocalStorageService);
    readonly noteService = inject(NoteService);

    @Input() noteMeta!:any;

    userId: string = '';

    constructor(){}

    ngOnInit(): void {
        console.log('noteMeta', this.noteMeta);
        this.userId = this.localstorageService.getLoginUserId();
    }

    opeNote(event: any) {
        console.log('event', event);
        const dialogRef = this.dialogService.open(NoteEditorComponent, {
            // inside data add type as update along with note meta
            // so that we can differentiate between new and update
            // and use it in note-editor.component.ts
            data: {
                ...this.noteMeta,
                type: 'update'
            }
        });

        dialogRef.afterClosed().subscribe((d) => {
            console.log('After Closed ==>', d);
        });
    }

    onDeleteNotes(event:any) {
        event.stopPropagation();
        console.log('onDeleteNotes', event);
        // Implement delete functionality here
        // You can call a service to delete the note
        // and then refresh the note list
        // For now, just log the event
        console.log('Delete Note', this.noteMeta);
        this.noteService.deleteNote(this.noteMeta.userId, this.noteMeta.folderId, this.noteMeta.noteId).subscribe({
            next: (data) => {
                console.log('Note deleted successfully', data);

            },
            error: (error) => {
                console.error('Error deleting note', error);
            }
        })
    }

    ngOnDestroy(): void {}
}
