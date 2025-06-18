import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreAuthRoutingModule } from './pre-auth-routing.module';
import { LocalStorageService } from '../../services/local-storage.service';

@NgModule({
    declarations: [],
    imports: [CommonModule, PreAuthRoutingModule],
})
export class PreAuthModule {}
