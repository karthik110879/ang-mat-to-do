import { Component , OnInit, OnDestroy, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxEditorComponent, NgxEditorMenuComponent, Editor } from 'ngx-editor';
import { NoteEditorComponent } from '../note-editor/note-editor.component';


@Component({
  selector: 'app-note',
  imports: [FormsModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent implements  OnInit, OnDestroy{

  readonly dialogService = inject(MatDialog);

  ngOnInit(): void {
  }


  opeNote(event:any) {
    console.log('event',event);
    const dialogRef = this.dialogService.open(NoteEditorComponent);

    dialogRef.afterClosed().subscribe(d => {
      console.log('After Closed ==>', d);

    })

  }

  ngOnDestroy(): void {

  }
}
