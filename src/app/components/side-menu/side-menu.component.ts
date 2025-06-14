import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-side-menu',
  imports: [MatSidenavModule , MatListModule, MatIconModule, MatDividerModule, DatePipe],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
folders: Section[] = [
    {
      name: 'Home',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
    {
      name: 'New Project Idea',
      updated: new Date('1/18/16'),
    },
  ];
}
