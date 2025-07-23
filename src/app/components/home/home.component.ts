import { Component, inject, OnInit } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NoteEditorComponent } from '../note-editor/note-editor.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
    selector: 'app-home',
    imports: [CategoryComponent, SettingsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    private readonly actRouter = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private readonly dialogService = inject(MatDialog);


    itemId:string | null = '';
    isSettingsVisible:boolean = false;
    constructor() {}

    ngOnInit(): void {
        this.actRouter.paramMap.subscribe((params) => {
            if(params.get('settingId')) {
                this.isSettingsVisible = this.router.url.includes('auth/settings') ? true : false;
            }
            if(params.get('folderId')) {
                this.itemId = params.get('folderId');
            }
            console.log('MENU NAME ', this.itemId);
        });
    }

    openNewNote(event: any) {
        console.log('openNewNote', event);
        const dialogRef = this.dialogService.open(NoteEditorComponent, {
            data: {
                folderId: this.itemId,
                type: 'new'
            }
        });

        dialogRef.afterClosed().subscribe((d) => {
            console.log('After Closed ==>', d);
        });
    }
}
