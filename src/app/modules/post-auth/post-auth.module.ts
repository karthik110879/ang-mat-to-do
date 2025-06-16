import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostAuthRoutingModule } from './post-auth-routing.module';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostAuthRoutingModule,

    MatSidenavModule,
		MatButtonModule,
		SideMenuComponent,
		HeaderComponent,
    MatDrawer
  ]
})
export class PostAuthModule { }
