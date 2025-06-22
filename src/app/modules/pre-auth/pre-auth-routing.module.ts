import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreAuthComponent } from './pre-auth.component'; // make sure this exists
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { notLoggedInGuard } from '../../guards/login.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        canActivate: [notLoggedInGuard],
        component: LoginComponent,
    },
    {
        path: 'signup',
        canActivate: [notLoggedInGuard],
        component: RegisterComponent,
    },
    {
        path: 'forgot-password',
        canActivate: [notLoggedInGuard],
        component: ForgotPasswordComponent,
    },
    // {
    //   path: '**',
    //   component: PreAuthComponent
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PreAuthRoutingModule {}
