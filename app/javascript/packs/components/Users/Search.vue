<template>
  <div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Per Page:</label>
      </div>
      <select v-model="perPage">
        <option v-for="option in perPageOptions" :key="option">{{option}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      perPage: 10,
      perPageOptions: [10, 20, 30, 40, 50, 60]
    };
  },
  watch: {
    perPage: function(value) {
      this.$emit("per-page-changed", value);
    }
  }
};
</script>

<style>
</style>