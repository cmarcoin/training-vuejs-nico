<template>
  <div class="container">
    <section v-if="isLoading">
      <b-spinner type="grow" label="Spinning"></b-spinner>
    </section>
    <section v-else>
      <h1>Produits version 2</h1>
      <div>
        <AppTablePagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
        />
      </div>
      <AppTable
        :items="products"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template #heading-image>
          <input
            type="range"
            id="volume"
            name="volume"
            v-model="width"
            max="300"
            min="1"
          />
        </template>
        <template #heading-isChecked>
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            @change="checkEverything"
          />
        </template>
        <template #col-image="{ value }">
          <img :src="value.image" :width="width" alt="" />
        </template>
        <template #col-isChecked="{ value }">
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            v-model="value.isChecked"
          />
        </template>
      </AppTable>
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
      currentPage: 1,
      perPage: 3,
      width: 150
    };
  },
  mounted() {
    axios
      .get("http://localhost:3001/products")
      .then(response => (this.products = response.data))
      .finally(() => {
        this.isLoading = false;
      });

    if (localStorage.currentPage) {
      this.currentPage = localStorage.currentPage;
    }
  },
  computed: {
    rows() {
      return this.products.length;
    }
  },
  watch: {
    currentPage: newCurrentPage => {
      localStorage.currentPage = newCurrentPage;
    }
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
