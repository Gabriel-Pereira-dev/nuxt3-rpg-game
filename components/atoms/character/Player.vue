<template>
  <div class="player" alt="cleber" title="cleber" id="idPlayer"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CharacterSides } from "~~/rpg-game/types/CharacterSides";
import { CharacterPosition } from "../../../models/Character";
const sides = {
  down: 0,
  left: -30,
  right: -60,
  up: -90,
};
let havePower = false;
export default defineComponent({
  props: {
    position: {
      type: Object as () => CharacterPosition,
      default: { x: 0, y: 0 },
    },
    size: {
      type: Number,
      default: 30,
    },
    side: {
      type: String as PropType<CharacterSides>,
      default: "down",
    },
  },
  mounted() {
    document.addEventListener("click", this.clickEvent);
  },
  computed: {
    topPosition() {
      return `${this.position.y * this.size}px`;
    },
    leftPosition() {
      return `${this.position.x * this.size}px`;
    },
    playerSize() {
      return `${this.size}px`;
    },
    playerSidePos() {
      return this.side ? `${sides[this.side]}px` : "0px";
    },
  },
  methods: {
    clickEvent(event: MouseEvent) {
      console.log(event.target);
      console.log(havePower);
      var v = document.getElementById("idPlayer");
      if (!havePower) {
        v?.classList.add("power");
        havePower = true;
      } else {
        v?.classList.remove("power");
        havePower = false;
      }
    },
  },
});
</script>

<style scoped>
.player {
  height: v-bind("playerSize");
  width: v-bind("playerSize");
  position: absolute;
  background-image: url("~/assets/char.png");
  /* background-color: red; */
  background-position: 0px v-bind("playerSidePos");
  top: v-bind("topPosition");
  left: v-bind("leftPosition");
}
.power {
  border-block-color: rgb(0, 252, 210);
  border-style: groove;
  border-radius: 20px;
  animation: spin 2s linear infinite;
}

.power-wrapper:active .power {
  animation: spin 2s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
