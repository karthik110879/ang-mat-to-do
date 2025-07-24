import { Component, OnInit, OnDestroy, inject, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NoteEditorComponent } from '../note-editor/note-editor.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoteService } from '../../services/note.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

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

    @Output() deleteNote:EventEmitter<boolean> = new EventEmitter(false);
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

    openDeleteAlert(event:any) {
        event.stopPropagation();

        const dialogRef = this.dialogService.open(ConfirmationComponent, {
            data: {
                title: 'Delete note?',
                message: 'Would you like to delete this note?',
                confirmText: 'Yes',
                cancelText: 'No'
            }
        });

        dialogRef.afterClosed().subscribe((d) => {
            console.log('After Closed ==>', d);
            if(d) {
                // Perform delete action
                console.log('File deleted');
                this.onDeleteNotes();
            }
        });
    }

    onDeleteNotes() {

        console.log('Delete Note', this.noteMeta);
        this.noteService.deleteNote(this.noteMeta.userId, this.noteMeta.folderId, this.noteMeta.noteId).subscribe({
            next: (data) => {
                console.log('Note deleted successfully', data);
                //announce refresh to the parent component
                this.deleteNote.emit(true);

            },
            error: (error) => {
                console.error('Error deleting note', error);
            }
        })
    }

    ngOnDestroy(): void {}
}
