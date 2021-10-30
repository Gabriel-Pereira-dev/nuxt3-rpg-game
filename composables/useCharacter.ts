import { useState } from "#app";
import { CharacterPosition, Character } from "../models/Character";
import { mapSpots } from "../data/mapSpots";

export interface UseCharacter {
  character: Character;
  moveLeft(): void;
  moveRight(): void;
  moveDown(): void;
  moveUp(): void;
}

export const useCharacter = ({ name, position, moveKeys, side }: Character) => {
  const character = useState("character", () => {
    return {
      name,
      position: { x: position.x, y: position.y },
      side,
      moveKeys: {
        down: moveKeys?.down,
        up: moveKeys?.up,
        left: moveKeys?.left,
        right: moveKeys?.right,
      },
    } as Character;
  });

  // const changeKey = () =
  const moveLeft = () => {
    character.value.side = "left";
    if (
      canMove({
        x: character.value.position.x - 1,
        y: character.value.position.y,
      })
    ) {
      character.value.position.x -= 1;
    }
  };
  const moveRight = () => {
    character.value.side = "right";
    if (
      canMove({
        x: character.value.position.x + 1,
        y: character.value.position.y,
      })
    ) {
      character.value.position.x += 1;
    }
  };
  const moveDown = () => {
    character.value.side = "down";
    if (
      canMove({
        x: character.value.position.x,
        y: character.value.position.y + 1,
      })
    ) {
      character.value.position.y += 1;
    }
  };
  const moveUp = () => {
    character.value.side = "up";
    if (
      canMove({
        x: character.value.position.x,
        y: character.value.position.y - 1,
      })
    ) {
      character.value.position.y -= 1;
    }
  };

  const canMove = (position: CharacterPosition): boolean => {
    if (
      mapSpots[position.y][position.x] !== undefined &&
      mapSpots[position.y][position.x] === 1
    ) {
      return true;
    }
    return false;
  };
  return {
    character: character.value,
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
  } as UseCharacter;
};
