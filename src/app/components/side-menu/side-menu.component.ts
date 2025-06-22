import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Route, Router, RouterModule } from '@angular/router';
import { Folder } from '../../models/folder.model';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { AddFolderComponent } from '../add-folder/add-folder.component';



@Component({
    selector: 'app-side-menu',
    imports: [
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatDividerModule,
        MatToolbarModule,
        DatePipe,
        FormsModule,
        CommonModule,
        RouterModule,
    ],
    templateUrl: './side-menu.component.html',
    styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent implements OnInit {
      private readonly dialogService = inject(MatDialog);
      private readonly router = inject(Router);


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

    constructor() {}

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

    onAddNewFolder() {
        const dialogRef = this.dialogService.open(AddFolderComponent);
        dialogRef.afterClosed().subscribe((d) => {
            console.log('After Closed ==>', d);
        });
    }
}
