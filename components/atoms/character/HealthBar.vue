<template>
  <div class="health-bar" data-total="1000" data-value="1000">
    <div class="bar" id="hp">
      <div class="hit"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    document.addEventListener("click", this.clickEvent);
  },
  data() {
    return { a: 1 };
  },
  methods: {
    clickEvent(event: MouseEvent) {
      console.log(event.target);

      var v = document.getElementById("hp");
      v.style.width = "10px";
    },
  },
});
</script>

<style>
.health-bar {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100px;
  height: 20px;
  padding: 5px;
  background: #ddd;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  position: relative;
}
.bar {
  background: #c54;
  width: 100%;
  height: 10px;
  position: relative;

  transition: width 0.5s linear;
}

.hit {
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 0px;

  transition: width 0.5s linear;
}
</style>