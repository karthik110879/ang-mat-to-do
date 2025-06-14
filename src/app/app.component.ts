import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatSidenavModule, MatButtonModule, SideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  @ViewChild('drawer') drawer!: MatDrawer;

  title = 'to-do';

  ngOnInit(): void {
    console.log('drawer', this.drawer);

    if(this.drawer) {
      this.drawer.toggle();
    }
  }
}
