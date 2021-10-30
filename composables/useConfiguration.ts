import { useState } from "#app";
import { UseCharacter } from "./useCharacter";

const useConfiguration = (charactersConfig: UseCharacter[]) => {
  const characters = useState("characters", () => {
    return charactersConfig;
  });
  return {
    characters: charactersConfig,
  };
};
