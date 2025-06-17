import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-pre-auth',
    imports: [RouterModule],
    templateUrl: './pre-auth.component.html',
    styleUrl: './pre-auth.component.scss',
})
export class PreAuthComponent {
    private readonly router = inject(Router);

    onLogin() {
        this.router.navigate(['auth']);
    }
}
