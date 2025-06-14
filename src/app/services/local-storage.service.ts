import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setEmptyStore() {
    return localStorage.setItem('notes', JSON.stringify([]))
  }

  add() {

  }
  update() {

  }
  delete() {

  }
}
