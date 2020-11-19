<template>
  <div class="m-5">
    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    >
      <template v-slot:cell(Image)="{ row }">
        {{ row }}
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 5,
      currentPage: 1
    };
  },
  props: {
    items: {
      type: Array
    }
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
};
</script>

<style></style>
