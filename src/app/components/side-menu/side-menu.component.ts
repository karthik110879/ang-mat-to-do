import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { Folder } from '../../models/folder.model';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { AddFolderComponent } from '../add-folder/add-folder.component';
import { FolderService } from '../../services/folder.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { IFolder } from '../../interfaces/folder.interface.model';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { NotificationService } from '../../services/notification.service';



@Component({
    selector: 'app-side-menu',
    imports: [
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatDividerModule,
        MatToolbarModule,
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
      private readonly activatedRouter = inject(ActivatedRoute);
      private readonly localStorageService = inject(LocalStorageService);
      private readonly folderService = inject(FolderService);
      private readonly notificationService = inject(NotificationService);


    selectedNavMenu!:IFolder;

    folders: IFolder[] = [];

    settings: IFolder =  {
            id : '',
            name : 'Settings',
            createdUserId: '',
            updated : new Date('2/20/16'),
            path : 'settings',
    }

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
        this.settings.id = this.localStorageService.getUserSettingsId(),
        this.settings.name = 'Settings',
        this.settings.path = 'settings',
        this.settings.createdUserId = this.localStorageService.getLoginUserId(),

        this.activatedRouter.paramMap.subscribe(params => {
            console.log('activatedRouter ==>',params.get('category'));
        })

        this.notificationService.refreshFoldersObs.subscribe((data) => {
            if (data) {
                this.getAllFolders(this.localStorageService.getLoginUserId());
            }
        })
        const uiserId = this.localStorageService.getLoginUserId();
        this.getAllFolders(uiserId);
    }

    onSelect(folder: IFolder) {
        console.log('folder', folder);
        //set the currentNav selection
        this.selectedNavMenu = folder;
        //Navigate to the selected path
        this.router.navigate(['/auth/folder/', folder.id]);
    }

    onSelectSettings(settings:IFolder) {
        console.log('SETTINGS', settings);
        this.selectedNavMenu = settings;
        this.router.navigate(['/auth/settings/', this.localStorageService.getUserSettingsId()]);
    }
    onAddNewFolder() {
        const dialogRef = this.dialogService.open(AddFolderComponent);
        dialogRef.afterClosed().subscribe((d) => {
            console.log('After Closed ==>', d);
        });
    }

    openDeleteFolderAlert(event:any, folder:IFolder) {
            event.stopPropagation();

            const dialogRef = this.dialogService.open(ConfirmationComponent, {
                data: {
                    title: 'Delete folder?',
                    message: 'Would you like to delete this folder?',
                    confirmText: 'Yes',
                    cancelText: 'No'
                }
            });

            dialogRef.afterClosed().subscribe((d) => {
                console.log('After Closed ==>', d);
                if(d) {
                    // Perform delete action
                    console.log('File deleted');
                    this.onDeleteFolder(folder);
                }
            });
        }

    onDeleteFolder(folder:IFolder) {
        console.log('Delete Folder', folder);
        this.folderService.deleteFolder(this.localStorageService.getLoginUserId(), folder.id).subscribe({
            next:(data) => {
                console.log('data',data);
                this.folders = [...this.folders];
                this.folders = this.folders.filter(f => f.id !== folder.id);
                // this.folders = [...this.folders];
                this.notificationService.showSuccess('Folder deleted successfully');
                //announce refresh to the parent component
                this.notificationService.refreshfolder(true);
            },
            error:(error) => {
                console.log('error',error);
                this.notificationService.showError('Error deleting folder', error.message);
            }
        })
    }

    getAllFolders(userId:string) {
        this.folderService.getAllFolders(userId).subscribe({
            next:(data) => {
                this.folders = [];
                console.log('data',data);
                data.forEach((fldr:any) => {
                    const folder:IFolder = {
                        id: fldr.folderId,
                        createdUserId: fldr.userId,
                        name: fldr.name,
                        path: `${fldr.name.toLowerCase()}`,
                    }

                    this.folders.push(folder);
                });
                if(this.folders.length > 0) {
                    this.selectedNavMenu = this.folders[0];
                    this.onSelect(this.selectedNavMenu);
                } else {
                    // folders are empty
                }
            },
            error:(error) => {
                console.log('error',error);
            }
        })
    }
}
