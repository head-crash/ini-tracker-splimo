import { Injectable, signal } from '@angular/core';
import { MenuItem } from '../models/menuItem.model';
import { settings } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  menu = signal<MenuItem[]>([]);
  isMobileMenuOpen = signal<boolean>(false);

  constructor() {
    this.menu.set(settings.navigation.staticMenu);
  }

  addMenuItem(menuItem: MenuItem) {
    if (this.menu().filter(item => item.label === menuItem.label).length > 0) {
      return;
    }
    this.menu.update(menu => [...menu, menuItem]);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen())
  }

}
