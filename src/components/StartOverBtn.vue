<template>
  <button class="button" v-on:click="go">Start Over?</button>
</template>

<script>
export default {
  name: 'StartOverBtn',
  data() {
    return {};
  },
  methods: {
    go() {
      this.$root.setPage('welcome');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    font-size: 1rem;
    color: #ccc;
    border: none;
    padding: 4px 10px;
    margin: 10px 0;
    cursor: pointer;
  }
  button:hover {
    color: #999;
  }
</style>
