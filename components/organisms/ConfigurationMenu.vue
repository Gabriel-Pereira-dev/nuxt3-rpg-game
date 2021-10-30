<template>
  <div class="container">
    <div class="player1">
      <button>Click</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CharacterMoveKeys } from "~~/rpg-game/models/Character";

export default defineComponent({
  data() {
    return {
      charactersLenght: 1,
      defaultKeys: {
        left: "ArrowLeft",
        right: "ArrowRight",
        down: "ArrowDown",
        up: "ArrowUp",
      } as CharacterMoveKeys,
    };
  },
});
</script>

<style scoped>
.container {
  background-color: #24282f;
  min-height: 100vh;
  min-width: 100vw;
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30rem;
}
</style>
