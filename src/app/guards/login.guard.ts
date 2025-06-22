import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const loginGuard: CanActivateFn = (route, state) => {
    console.log('route, state', route, state);

    const router = inject(Router);
    const localStorageService = inject(LocalStorageService);
    const isAuthUser = localStorageService.isUserAuthenticated();

    if(isAuthUser) {
        // router.navigate(['/auth']);
        return true;
    } else {
        router.navigate(['/login']);
        return false;
    }
};

export const notLoggedInGuard: CanActivateFn = () => {
  const router = inject(Router);

  const localStorageService = inject(LocalStorageService);

  const authData = localStorageService.isUserAuthenticated();

  if (authData) {
    router.navigate(['/auth']);
    return false;
  } else {
    return true;
  }
};
