import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SidenavService } from '../../services/sidenav.service';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-post-auth',
	imports: [
		RouterOutlet,

		MatSidenavModule,
		MatButtonModule,
		SideMenuComponent,
		HeaderComponent
	],
	templateUrl: './post-auth.component.html',
	styleUrl: './post-auth.component.scss',
})
export class PostAuthComponent implements OnInit {

	@ViewChild('drawer') drawer!: MatDrawer;
	sidNavService = inject(SidenavService);

	ngOnInit(): void {
	  console.log('drawer', this.sidNavService);

    if (this.drawer) {
      this.drawer.toggle();
    }
	}
}
