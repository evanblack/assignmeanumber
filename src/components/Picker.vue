<template>
  <div class="picker">
    <div class="card" v-bind:class="cardClass" v-on:click="getNewNumber">
      <div v-if="sharedState.pointer" class="face front number">
        <span>{{ sharedState.pointer.value }}</span>
      </div>
      <div v-else class="face front done">
        <span>That's it!</span>
      </div>
      <div v-if="sharedState.pointer" class="face back number">
        <span>{{ sharedState.pointer.value }}</span>
      </div>
      <div v-else class="face back done">
        <span>That's it!</span>
      </div>
    </div>
    <span class="numbers-left">Numbers left: {{ unassignedCount }}</span>
  </div>
</template>

<script>
export default {
  name: 'Picker',
  data() {
    return {
      sharedState: this.$root.$data,
    };
  },
  methods: {
    getNewNumber() {
      this.$root.getNewNumber();
    },
  },
  computed: {
    done() {
      return this.$root.done;
    },
    unassignedCount() {
      return this.$root.unassignedCount;
    },
    cardClass() {
      return {
        flipped: this.sharedState.cardFlipped,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .picker {
    
  }
  .card {
    margin: 0 auto 14px;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    transition: transform 1s;
    transform-style: preserve-3d;
    transform-origin: right center;
  }
  .card.flipped {
    transform: translateX( -100% ) rotateY( -180deg );
  }
  .card .face {
    display: block;
    height: 100%;
    width: 100%;
    line-height: 150px;
    text-align: center;
    position: absolute;
    backface-visibility: hidden;
  }
  .card .face.front {
    background: #999;
    color: #fff;
  }
  .card .face.back {
    background: #ddd;
    color: #888;
    transform: rotateY( 180deg );
  }
  .number {
    font-family: 'Bungee', sans-serif;
    font-size: 4rem;
  }
  .done {
    font-family: 'Bungee', sans-serif;
    font-size: 1rem;
  }
</style>
