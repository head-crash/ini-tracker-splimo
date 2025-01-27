import { Component, input, signal } from '@angular/core';
import { Character } from '../../models/character.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-character-card',
  imports: [NgClass],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {
  char = input.required<Character>();
}
