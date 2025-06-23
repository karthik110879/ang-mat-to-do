import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    private readonly toastr = inject(ToastrService);

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
}
