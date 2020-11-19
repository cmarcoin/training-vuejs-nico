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
        <tr v-for="(item, index) in items" :key="index">
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
    }
  },
  computed: {
    headings() {
      return Object.keys(this.items[0]);
    }
  }
};
</script>

<style></style>
