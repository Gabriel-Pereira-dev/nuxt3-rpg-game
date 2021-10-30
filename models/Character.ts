import { CharacterSides } from "../types/CharacterSides";
export interface Character {
  name: string;
  position: CharacterPosition;
  side?: CharacterSides;
  moveKeys?: CharacterMoveKeys;
}

export interface CharacterMoveKeys {
  left: string;
  right: string;
  down: string;
  up: string;
}

export interface CharacterPosition {
  x: number;
  y: number;
}
