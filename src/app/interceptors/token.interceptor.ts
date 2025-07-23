import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const lsService = inject(LocalStorageService);
    const router = inject(Router);
    if(!lsService.getAuthToken()) {
        lsService.clearAuthData();
        router.navigate(['/login']);
    }

    const newRequest = req.clone({
        setHeaders: {
            Authorization: `Bearer ${lsService.getAuthToken()}`
        }
    })
    return next(newRequest);
};
