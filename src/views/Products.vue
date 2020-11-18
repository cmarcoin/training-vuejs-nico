<template>
  <section v-if="isLoading">
    <b-spinner type="grow" label="Spinning"></b-spinner>
  </section>
  <section v-else>
    <p>{{ products }}</p>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isLoading: true,
      products: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:3001/products")
      .then(response => (this.products = response.data))
      .finally(() => {
        this.isLoading = false;
      });
  }
};
</script>

<style></style>
