<template>
  <div class="range">
    <span class="start">1</span>
    <span class="hyphen">&ndash;</span>
    <input class="end"
      autofocus autocomplete="off"
      type="number"
      v-model="sharedState.howManyNumbers">
  </div>
</template>

<script>
export default {
  name: 'Range',
  data() {
    return {
      sharedState: this.$root.$data,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .range {
    margin: 0 0 14px;
  }
  .start {
    display: inline-block;
    font-family: 'Bungee', sans-serif;
    font-size: 4rem;
  }
  .hyphen {
    display: inline-block;
    /*font-family: 'Bungee', sans-serif;*/
    font-size: 4rem;
  }
  .end {
    display: inline-block;
    font-family: 'Bungee', sans-serif;
    font-size: 4rem;
    border: 1px solid #ddd;
    color: #2c3e50;
    width: 108px;
    padding: 0 0 0 10px;
  }
</style>
