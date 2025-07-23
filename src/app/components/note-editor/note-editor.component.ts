import { Component, inject, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { Editor, NgxEditorComponent, NgxEditorMenuComponent, Toolbar } from 'ngx-editor';
import { NoteService } from '../../services/note.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    selector: 'app-note-editor',
    imports: [
        MatButtonModule,
        MatDialogModule,
        NgxEditorComponent,
        NgxEditorMenuComponent,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './note-editor.component.html',
    styleUrl: './note-editor.component.scss',
     encapsulation: ViewEncapsulation.None,
})
export class NoteEditorComponent implements OnInit, OnDestroy {
    readonly dailogContent = inject(MAT_DIALOG_DATA);
    readonly localstorageService = inject(LocalStorageService);
    private readonly dialogRef = inject(MatDialogRef<NoteEditorComponent>);
    readonly noteService = inject(NoteService);
    readonly fb = inject(FormBuilder);

    newNoteTitie:string = '';
    folderId:string = '';
    editor!: Editor;
    toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];
    html!: '';
    userId!:string;
    noteForm!:FormGroup;

    ngOnInit(): void {
        this.noteForm = this.fb.group({
            title: [''],
            content: [this.dailogContent.content || '', [Validators.required]],
        })
        this.userId = this.localstorageService.getLoginUserId();
        this.newNoteTitie = !this.dailogContent ? 'New Note' :  this.dailogContent.title
        this.editor = new Editor({
            content: '',
            history: true,
        });


        console.log('dailogContent', this.dailogContent);
        this.folderId = this.dailogContent.folderId;
        this.html = !this.dailogContent ? '' : this.dailogContent.content;
    }

    onSaveNote() {
        const newNote = {
            title: '',
            content: this.noteForm.controls['content'].value
        }
        if (this.dailogContent.type === 'new') {
            newNote.title = this.noteForm.controls['title'].value;
        } else {
            newNote.title = this.dailogContent.title;
        }
        console.log('newNote', newNote, this.dailogContent.type);
        if(this.dailogContent.type !== 'new') {
            this.noteService.updateNote(
                this.userId,
                this.folderId,
                this.dailogContent.noteId,
                newNote
            ).subscribe({
                next:(data) => {
                    console.log('data',data);
                    this.dialogRef.close();
                },
                error: (error) => {
                    console.log('error',error);
                }
            })
            return;
        } else {

            this.noteService.createNote(this.userId, this.folderId, newNote).subscribe({
                next:(data) => {
                    console.log('data',data);

                    this.dialogRef.close();
                },
                error: (error) => {
                    console.log('error',error);

                }
            })
        }
    }

    ngOnDestroy(): void {
        this.editor.destroy();
    }
}
