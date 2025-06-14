import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private isOpen = signal(true);
  constructor() { }

  toggle() {
    this.isOpen.update((open) => !open);
  }

  open() {
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }

  readonly state  = this.isOpen.asReadonly();

}
