import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavService } from '../../services/sidenav.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-header',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, FormsModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    private readonly sidenavService = inject(SidenavService);
    private readonly authService = inject(AuthService);
    constructor() {}

    toggleSideNav(event: any) {
        console.log(event);
        this.sidenavService.toggle();
    }

    onLogout() {
        this.authService.logout();
    }
}
