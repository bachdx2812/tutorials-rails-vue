<template>
  <div>
    <div
      class="alert"
      v-for="alert in notifications"
      :key="alert.content"
      :class="`alert-${alert.type}`"
      role="alert"
    >{{ alert.content }}</div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("global");

export default {
  computed: {
    ...mapState(['notifications'])
  },
};
</script>

<style>
</style>