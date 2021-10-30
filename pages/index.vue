<template>
  <div class="index">
    <MoleculesMap></MoleculesMap>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      nome: "Gabriel",
    };
  },
  mounted() {
    if (document !== undefined && document.body !== undefined) {
      document.body.classList.add("index");
    }
  },
});
</script>
<style>
.index {
  background-color: #24282f;
  min-height: max-content;
  min-width: max-content;
  color: white;
  margin: 0px;
}
</style>
