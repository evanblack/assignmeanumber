<template>
  <div class="picker">
    <div class="card" v-bind:class="cardClass">
      <div class="face front" v-on:click="getNewNumber">
        <span v-if="sharedState.pointer || !done" class="next">Get the next number!</span>
        <span v-else class="done">That's it!</span>
      </div>
      <div class="face back" v-on:click="flipCard">
        <span v-if="sharedState.pointer" class="number">{{ sharedState.pointer.value }}</span>
        <span v-else class="done">That's it!</span>
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
      this.$root.flipCard();
    },
    flipCard() {
      this.$root.flipCard();
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
  .next,
  .done {
    font-family: 'Bungee', sans-serif;
    font-size: 1rem;
  }
</style>
