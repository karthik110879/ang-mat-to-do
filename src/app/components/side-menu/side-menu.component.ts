import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Route, Router, RouterModule } from '@angular/router';
import { Folder } from '../../models/folder.model';



@Component({
    selector: 'app-side-menu',
    imports: [
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatDividerModule,
        DatePipe,
        FormsModule,
        CommonModule,
        RouterModule,
    ],
    templateUrl: './side-menu.component.html',
    styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent implements OnInit {

    selectedNavMenu!:Folder;

    folders: Folder[] = [
        {
            id: '',
            name: 'Home',
            updated: new Date('1/1/16'),
            path: 'home',
        },
        {
            id: '',
            name: 'Recipes',
            updated: new Date('1/17/16'),
            path: 'recipes',
        },
        {
            id: '',
            name: 'Work',
            updated: new Date('1/28/16'),
            path: 'work',
        },
    ];
    notes: Folder[] = [
        {
            id: '',
            name: 'Vacation Itinerary',
            updated: new Date('2/20/16'),
            path: '',
        },
        {
            id: '',
            name: 'Kitchen Remodel',
            updated: new Date('1/18/16'),
            path: '',
        },
        {
            id: '',
            name: 'New Project Idea',
            updated: new Date('1/18/16'),
            path: '',
        },
    ];

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.selectedNavMenu = this.folders[0]
    }

    onSelect(folder: Folder) {
        console.log('folder', folder);

        //set the currentNav selection
        this.selectedNavMenu = folder;
        //Navigate to the selected path
        this.router.navigate(['/auth/folder/', folder.path]);
    }
}
