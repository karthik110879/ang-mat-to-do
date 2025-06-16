import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { PreAuthComponent } from './modules/pre-auth/pre-auth.component';
import { PostAuthComponent } from './modules/post-auth/post-auth.component';

export const routes: Routes = [
  {
    path: '',
    // canActivate: [],
    loadChildren: () => import(`./modules/pre-auth/pre-auth.module`).then(m => m.PreAuthModule)
  },
  {
    path: 'auth',
    // canActivate: [],
    loadChildren: () => import(`./modules/post-auth/post-auth.module`).then(m => m.PostAuthModule)
  },
  // {
  //   path: `**`,
  //   // loadChildren:()
  // }
];
