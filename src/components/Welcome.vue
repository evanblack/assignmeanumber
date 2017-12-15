<template>
  <div class="hello">
    <h1>Welcome!</h1>
    <p>How many numbers would you like to assign?</p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      sharedState: this.$root.$data,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  /*font-family: 'Bungee', sans-serif;*/
  font-weight: bold;
  margin: 0 0 14px;
}
p {
  font-size: 1.2rem;
  padding: 0;
  margin: 0 0 14px;
}
</style>
