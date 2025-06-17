import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SidenavService } from './services/sidenav.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    @ViewChild('drawer') drawer!: MatDrawer;

    sidNavService = inject(SidenavService);

    title = 'to-do';

    ngOnInit(): void {
        console.log('drawer', this.sidNavService);

        if (this.drawer) {
            this.drawer.toggle();
        }
    }
}
