<template>
  <section v-if="isLoading">
    <b-spinner type="grow" label="Spinning"></b-spinner>
  </section>
  <section v-else>
    <AppListing :items="products" />
  </section>
</template>

<script>
import axios from "axios";
import AppListing from "../components/AppListing";

export default {
  components: {
    AppListing
  },
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
