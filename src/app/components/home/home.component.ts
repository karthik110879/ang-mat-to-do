import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoteComponent } from '../note/note.component';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-home',
  imports: [NoteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {


  addNewNote() {
    const newNote = new Note('','',false)
    console.log('New note ',newNote );

  }
}
