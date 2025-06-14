import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Editor, NgxEditorComponent } from 'ngx-editor';

@Component({
  selector: 'app-note-editor',
  imports: [MatButtonModule, MatDialogModule, NgxEditorComponent, FormsModule],
  templateUrl: './note-editor.component.html',
  styleUrl: './note-editor.component.scss',
})
export class NoteEditorComponent implements OnInit, OnDestroy {
  editor!: Editor;
  html!: '';

  ngOnInit(): void {
    this.editor = new Editor({
      content: '',
      history: true,
    });
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
