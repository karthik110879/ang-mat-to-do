import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    private readonly toastr = inject(ToastrService);

    refreshNotesObs:Subject<void> = new Subject<void>();
    refreshFoldersObs:Subject<boolean> = new Subject<boolean>();
    refreshnotes = this.refreshFoldersObs.asObservable();
    refreshfolders = this.refreshNotesObs.asObservable();
    constructor() {}

    showSuccess(title:string, desc?:string) {
        this.toastr.success(
            desc,
            title,
            {
                timeOut: 3000,
            }
        );
    }

    showError(title:string, desc?:string) {
        this.toastr.error(
            desc,
            title,
            {
                timeOut: 3000,
            }
        );
    }

    showInfo(title:string, desc?:string) {
        this.toastr.info(
            desc,
            title,
            {
                timeOut: 3000,
            }
        );
    }

    showWarning(title:string, desc?:string) {
        this.toastr.warning(
            desc,
            title,
            {
                timeOut: 3000,
            }
        );
    }

    refreshfolder(data:boolean = false) {
        this.refreshFoldersObs.next(data);
    }

    refreshNotes() {
        this.refreshNotesObs.next();
    }
}
