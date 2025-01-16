import { Component, HostListener, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: `
  `,
  imports: [],
})
export class HeaderComponent {
  isMobileMenuOpen: boolean = false;
  isUserMenuOpen: boolean = false;

  toggleMobileMenu() {
    console.log('Toggle mobile menu: current state is', this.isMobileMenuOpen);
    this.isMobileMenuOpen = !this.isMobileMenuOpen
  }

  toggleUserMenu() {
    console.log('Toggle user menu current state is', this.isUserMenuOpen);
    this.isUserMenuOpen = !this.isUserMenuOpen
  }

  closeUserMenu() {
    console.log('Close user menu current state is', this.isUserMenuOpen);
    this.isUserMenuOpen = false;
  }

  openLoginDialog() {
    console.log('Open login dialog');
  }

  user: User = {
    avatar: 'https://randomuser.me/api/portraits/med/men/89.jpg',
    name: 'John Doe',
    email: 'john.doe@mail.com'
  }

  // Listener für Klicks außerhalb des User-Menüs
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    const userMenuButton = document.getElementById('user-menu-button');

    if (userMenuButton && !userMenuButton.contains(target)) {
      this.closeUserMenu();
    }
  }
}