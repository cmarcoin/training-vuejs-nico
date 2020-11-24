<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-for="(heading, index) in headings" :key="index" scope="col">
            <slot :name="`heading-${heading}`" :value="heading">{{
              heading
            }}</slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in displayedItems" :key="index">
          <td v-for="(value, idx) in item" :key="idx">
            <slot :name="`col-${idx}`" :value="item">{{ value }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    perPage: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 0
    }
  },
  computed: {
    headings() {
      return Object.keys(this.items[0]);
    },
    displayedItems() {
      let to = this.currentPage * this.perPage;
      let from = to - this.perPage;
      return this.items.slice(from, to);
      // const chunkedItems = [];
      // let index = 0;
      // while (index < this.items.length) {
      //   chunkedItems.push(this.items.slice(index, this.perPage + index));
      //   index += this.perPage;
      // }

      // return chunkedItems[this.currentPage - 1];
    }
  }
};
</script>

<style></style>
