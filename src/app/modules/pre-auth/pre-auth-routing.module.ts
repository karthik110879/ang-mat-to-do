import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreAuthComponent } from './pre-auth.component'; // make sure this exists

const routes: Routes = [
  {
    path: '',
    component: PreAuthComponent
  },
  // {
  //   path: 'login',
  //   component: PreAuthComponent
  // },
  // {
  //   path: 'signup',
  //   component: PreAuthComponent
  // },
  // {
  //   path: 'forgot-password',
  //   component: PreAuthComponent
  // },
  // {
  //   path: 'about',
  //   component: PreAuthComponent
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreAuthRoutingModule {}
