<template>
  <button class="button" v-on:click="go">Ready!</button>
</template>

<script>
export default {
  name: 'ReadyBtn',
  data() {
    return {};
  },
  methods: {
    go() {
      this.$root.generateNumbers();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    font-weight: bold;
    font-size: 1.8rem;
    color: #fff;
    border: none;
    /*border-radius: 6px;*/
    background: #9ECC33;
    padding: 6px 14px;
    margin: 10px 0;
    cursor: pointer;
  }
</style>
