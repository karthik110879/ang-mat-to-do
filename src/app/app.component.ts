import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatSidenavModule, MatButtonModule, SideMenuComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  @ViewChild('drawer') drawer!: MatDrawer;

  sidNavService = inject(SidenavService)

  title = 'to-do';

  ngOnInit(): void {
    console.log('drawer', this.sidNavService);

    if(this.drawer) {
      this.drawer.toggle();
    }
  }
}
