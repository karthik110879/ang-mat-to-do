import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        // canActivate: [],
        loadChildren: () =>
            import(`./modules/pre-auth/pre-auth.module`).then(
                (m) => m.PreAuthModule
            ),
    },
    {
        path: 'auth',
        // canActivate: [],
        loadChildren: () =>
            import(`./modules/post-auth/post-auth.module`).then(
                (m) => m.PostAuthModule
            ),
    },
];
