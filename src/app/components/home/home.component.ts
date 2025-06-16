import { Component, OnInit } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { Note } from '../../models/note.model';
import { CategoryComponent } from '../category/category.component';
import { routes } from '../../app.routes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent implements OnInit {
itemId: string | null = null;

constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
  //  this.itemId = this.route.snapshot.paramMap.get('category');
  //  this.route.paramMap.subscribe(params => {
  //     this.itemId = params.get('category'); // Reactively update on route changes
  //     console.log('MENU NAME ',this.itemId );
  //   });
  //   console.log('MENU NAME ',this.route );
  }


}
