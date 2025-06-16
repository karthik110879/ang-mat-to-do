import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Route, Router, RouterModule } from '@angular/router';


export interface Section {
  name: string;
  updated: Date;
  path: string;
}

@Component({
  selector: 'app-side-menu',
  imports: [MatSidenavModule, MatListModule, MatIconModule, MatDividerModule, DatePipe, FormsModule, RouterModule, ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  constructor(private router: Router) {}

folders: Section[] = [
    {
      name: 'Home',
      updated: new Date('1/1/16'),
      path: 'home'
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
      path: 'recipes'
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
      path: 'work'
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
      path: ''
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
      path: ''
    },
    {
      name: 'New Project Idea',
      updated: new Date('1/18/16'),
      path: ''
    },
  ];


  onSelect(folder:Section) {
    console.log('folder', folder);
    //get current route
    this.router.navigate(['/folder', folder.path , '255452']);
  }
}
