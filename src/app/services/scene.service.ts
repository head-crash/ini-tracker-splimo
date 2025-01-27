import { Injectable, signal } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class SceneService {
  characters = signal<Character[]>([])
  constructor() { }

  public addCharacter(character?: Character) {
    if (!character) {
      // add random character
        const palette = [
          'zinc',
          'red',
          'orange',
          'amber',
          'yellow',
          'lime',
          'green',
          'emerald',
          'teal',
          'cyan',
          'sky',
          'blue',
          'indigo',
          'violet',
          'purple',
          'fuchsia',
          'pink',
          'rose',
        ]
        const shade = [
          '400',
          '600',
          '800'
        ]
        const color = `${palette[Math.floor(Math.random() * palette.length)]}-${shade[Math.floor(Math.random() * shade.length)]}`;
        character = {
          id: Math.random().toString(36).substring(7),
          name: 'New Character',
          tick: 0,
          hp: 0,
          int: 0,
          state: 'active',
          color: {
            bg: `bg-${color}`,
            border: `border-${color}`
          }
        }
        console.log('Add random character', character)
      }
    if (this.characters().filter(char => char.id === character.id).length > 0) {
      return;
    }
    this.characters.update(characters => [...characters, character]);
  }

  public resetScene() {
    this.characters.set([]);
  }
}
