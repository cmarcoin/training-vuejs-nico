<template>
  <div class="container">
    <section v-if="isLoading">
      <b-spinner type="grow" label="Spinning"></b-spinner>
    </section>
    <section v-else>
      <h1>Produits version 2</h1>
      <AppTable :items="products">
        <template #heading-isChecked>
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            @change="checkEverything"
          />
        </template>
        <template #col-image="{ value }">
          <img :src="value" width="150" alt="" />
        </template>
        <template #col-isChecked="{ value }">
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            v-model="value.isChecked"
          />
        </template>
      </AppTable>
      <AppTablePagination></AppTablePagination>
    </section>
  </div>
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
      products: null,
      values: false
    };
  },
  mounted() {
    axios
      .get("http://localhost:3001/products")
      .then(response => (this.products = response.data))
      .finally(() => {
        this.isLoading = false;
      });
  },
  methods: {
    checkEverything(event) {
      this.products.forEach(
        product => (product.isChecked = event.target.checked)
      );
    }
  }
};
</script>

<style></style>
