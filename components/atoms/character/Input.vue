<template>
  <div class="input">
    <input :type="inputType" :placeholder="placeholder" :disabled="disabled" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inputType: {
      type: String,
      default: "text",
    },
  },
});
</script>

<style scoped>
.input {
}
</style>
