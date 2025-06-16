import { Component, OnInit } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { Note } from '../../models/note.model';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [NoteComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
 itemId: string | null = null;

constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
  //  this.itemId = this.route.snapshot.paramMap.get('category');
   this.route.paramMap.subscribe(params => {
      this.itemId = params.get('category'); // Reactively update on route changes
      console.log('MENU NAME ',this.itemId );
    });
    console.log('MENU NAME ',this.route );
  }


  addNewNote() {
    const newNote = new Note('','',false)
    console.log('New note ',newNote );

  }
}
