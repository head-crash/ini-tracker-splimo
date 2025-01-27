import { Component, HostListener, inject, input, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user.model';
import { NavigationService } from '../../services/navigation.service';
import { SceneService } from '../../services/scene.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: `
  `,
  imports: [RouterLink],
})
export class HeaderComponent {
  isUserMenuOpen: boolean = false;
  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen
  }

  closeUserMenu() {
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

  // Listener for clicks outside the user menu
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    const userMenuButton = document.getElementById('user-menu-button');

    if (userMenuButton && !userMenuButton.contains(target)) {
      this.closeUserMenu();
    }
  }
  scene = inject(SceneService);
  navigation = inject(NavigationService)
}