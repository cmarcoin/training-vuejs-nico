<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item" v-for="i in index" :key="i">
          <a class="page-link" @click="$emit('change', i)">{{ i }}</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  model: {
    prop: "currentPage",
    event: "change"
  },
  props: {
    totalRows: Number,
    perPage: Number,
    currentPage: Number
  },
  computed: {
    index() {
      return Math.ceil(this.totalRows / this.perPage);
    }
  }
};
</script>

<style></style>
