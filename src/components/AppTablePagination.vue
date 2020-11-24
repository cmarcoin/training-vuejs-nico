<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage == 1 }">
          <a class="page-link" href="#" @click="pageNav(-1)">Previous</a>
        </li>
        <li
          class="page-item"
          :class="{ active: i == currentPage }"
          v-for="i in index"
          :key="i"
        >
          <a class="page-link" @click="$emit('change', i)">{{ i }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage == index }">
          <a class="page-link" href="#" @click="pageNav(1)">Next</a>
        </li>
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
    totalRows: {
      type: Number,
      default: 0
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
  methods: {
    pageNav(direction) {
      this.$emit("change", this.currentPage + direction);
    }
  },
  computed: {
    index() {
      return Math.ceil(this.totalRows / this.perPage);
    }
  }
};
</script>

<style></style>
