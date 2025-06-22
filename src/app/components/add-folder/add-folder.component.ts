import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FolderService } from '../../services/folder.service';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
  selector: 'app-add-folder',
  imports: [FormsModule, ReactiveFormsModule,MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './add-folder.component.html',
  styleUrl: './add-folder.component.scss'
})
export class AddFolderComponent implements OnInit{
    private readonly folderService = inject(FolderService);
    private readonly localstorageService = inject(LocalStorageService);
    private readonly formBuilder = inject(FormBuilder);

    addFolderForm!:FormGroup;

    constructor(){}

    ngOnInit(): void {
        this.addFolderForm = this.formBuilder.group({
            name: ['', [Validators.required]]
        })
    }

    onAddFolder(e:any) {
        e.preventDefault();

        if(!this.addFolderForm.valid) return;

        const folderTitle = {
            title: this.addFolderForm.value.name
        };
        this.folderService.createFolder(this.localstorageService.getLoginUserId(),folderTitle).subscribe({
            next:(fldrData) => {
                console.log('fileData',fldrData);
            },
            error:(error) => {
                console.log('error', error);

            }
        })
    }

}
