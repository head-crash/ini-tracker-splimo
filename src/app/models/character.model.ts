export interface Character {
  id: string;
  name: string;
  int: number;
  hp: number;
  tick: number;
  state: CharacterState;
  color: {
    bg: string;
    border: string;
  }
}

export type CharacterState = 'active' | 'standBy' | 'waiting'