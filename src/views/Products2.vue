<template>
  <section v-if="isLoading">
    <b-spinner type="grow" label="Spinning"></b-spinner>
  </section>
  <section v-else>
    <h1>Produits version 2</h1>
    <AppTable></AppTable>
    <AppTablePagination></AppTablePagination>
  </section>
</template>

<script>
import axios from "axios";
import AppTable from "../components/AppTable";
import AppTablePagination from "../components/AppTablePagination";

export default {
  components: {
    AppTable,
    AppTablePagination
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
