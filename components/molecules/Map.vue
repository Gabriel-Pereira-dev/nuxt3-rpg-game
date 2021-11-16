<template>
  <div class="map">
    <AtomsCharacterPlayer 
      :position="{
        x: player.character.position.x,
        y: player.character.position.y,
      }"
      :side="player.character.side"
    ></AtomsCharacterPlayer>
    <AtomsCharacterHealthBar></AtomsCharacterHealthBar>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { UseCharacter } from "~~/rpg-game/composables/useCharacter";
import { Character } from "~~/rpg-game/models/Character";


export default defineComponent({
  props: {
    characters: {
      type: Array as PropType<UseCharacter[]>,
      default: null,
    },
  },
  setup() {
    const character = useCharacter({
      name: "Gabriel",
      position: { x: 3, y: 5 },
      side: "down",
      moveKeys: {
        down: "ArrowDown",
        up: "ArrowUp",
        left: "ArrowLeft",
        right: "ArrowRight",
      },
    } as Character) as UseCharacter;
    return { player: character as UseCharacter };
  },
  mounted() {
    if (window !== undefined) {
      window.addEventListener("keydown", this.handleKeyDown);
    }
  },
  methods: {
    handleKeyDown(e: KeyboardEvent) {
      
      console.log(JSON.stringify(this.player.character.position, null, 2));

      console.log(e.code);

      switch (e.code) {
        case "KeyA":
        case "ArrowLeft":
          this.player.moveLeft();
          break;
        case "KeyD":
        case "ArrowRight":
          this.player.moveRight();
          break;
        case "KeyS":
        case "ArrowDown":
          this.player.moveDown();
          break;
        case "KeyW":
        case "ArrowUp":
          this.player.moveUp();
          break;
      }
    },
  },
});
</script>

<style scoped>
.map {
  background-image: url("~/assets/map.png");
  height: 480px;
  width: 480px;
  background-position: left top;
  background-size: 100%;
}
</style>

function useFoo() { throw new Error("Function not implemented."); }
