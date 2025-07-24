import { Component, inject, Inject } from '@angular/core';
import {
    MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog'

export interface ConfirmDialogData {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

@Component({
    selector: 'app-confirmation',
    imports: [MatDialogActions, MatDialogContent],
    templateUrl: './confirmation.component.html',
    styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  readonly dialogRef = inject(MatDialogRef<ConfirmationComponent>);
  readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);



    onConfirm(): void {
        this.dialogRef.close(true);
    }

    onCancel(): void {
        this.dialogRef.close(false);
    }


}
