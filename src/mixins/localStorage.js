export default {
  methods: {
    /**
     *
     * @param {*} key
     * @description "toto"
     * @returns "tata"
     *
     */
    getStorage(key) {
      return JSON.parse(localStorage.getItem(key));
    },
    setStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    removeStorage(key) {
      localStorage.removeItem(key);
    },
    hasStorage(key) {
      return !!this.getStorage(key);
    },
    setMultipleStorage(array) {
      if (Array.isArray(array)) {
        array.forEach((key, value) => {
          this.setStorage(key, value);
        });
      }
    },
    removeMultipleStorage(array) {
      if (Array.isArray(array)) {
        array.forEach(key => {
          this.removeStorage(key);
        });
      }
    },
    clearStorage(key) {
      localStorage.clear(key);
    }
  }
};
