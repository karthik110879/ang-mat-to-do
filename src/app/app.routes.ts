import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import(`./modules/pre-auth/pre-auth.module`).then(
                (m) => m.PreAuthModule
            ),
    },
    {
        path: 'auth',
        canActivate: [loginGuard],
        loadChildren: () =>import(`./modules/post-auth/post-auth.module`).then((m) => m.PostAuthModule),
    },
];
