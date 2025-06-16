import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAuthComponent } from './post-auth.component';
import { HomeComponent } from '../../components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PostAuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: HomeComponent,
      },
      {
        path: 'folder/:category/:categoryId',
        component: HomeComponent,
      },
      {
        path: 'folder/:category/:categoryId',
        component: HomeComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostAuthRoutingModule {}
