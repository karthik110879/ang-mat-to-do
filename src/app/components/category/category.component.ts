import { Component, OnInit } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { Note } from '../../models/note.model';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';
import { Folder } from '../../models/sidenav.model';

@Component({
  selector: 'app-category',
  imports: [NoteComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
 selectedFolderName:string | null = '';
constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
   this.route.paramMap.subscribe(params => {
      this.selectedFolderName = params.get('category'); // Reactively update on route changes
      console.log('MENU NAME ',this.selectedFolderName );
      //call API to get the selected route data

      //we pick from ls

    });
  }

  addNewNote() {
    const newNote = new Note('','',false)
    console.log('New note ',newNote );

  }
}
