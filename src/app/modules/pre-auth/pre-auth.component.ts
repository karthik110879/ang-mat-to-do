import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-auth',
  imports: [],
  templateUrl: './pre-auth.component.html',
  styleUrl: './pre-auth.component.scss'
})
export class PreAuthComponent {
  private readonly router = inject(Router);

  onLogin() {
    this.router.navigate(['auth'])
  }

}
