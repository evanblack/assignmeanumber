<template>
  <div id="app" class="spa-container">
    <div class="spa-scroll" v-bind:class="pageClass">
      <section class="spa-page">
        <div class="spa-page-wrapper">
          <img class="logo" src="./assets/logo.svg" alt="assignmeanumber">
          <Welcome/>
          <Range/>
          <ReadyBtn/>
        </div>
      </section>
      <section class="spa-page">
        <div class="spa-page-wrapper">
          <StartOverBtn/>
          <Picker/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Welcome from './components/Welcome';
import Range from './components/Range';
import Picker from './components/Picker';
import ReadyBtn from './components/ReadyBtn';
import StartOverBtn from './components/StartOverBtn';

export default {
  name: 'app',
  data() {
    return {
      sharedState: this.$root.$data,
    };
  },
  computed: {
    pageClass() {
      return {
        welcome: this.sharedState.screen === 'welcome',
        picker: this.sharedState.screen === 'picker',
      };
    },
  },
  components: {
    Welcome,
    Range,
    Picker,
    ReadyBtn,
    StartOverBtn,
  },
};
</script>

<style>
body {
  overflow: hidden;
}
#app {
  font-family: 'Lato', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.spa-container {
  position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}
.spa-scroll,
.spa-page {
	position: relative;
	width: 100%;
	height: 100%;
}
.spa-scroll {
  top: 0;
	left: 0;
	transition: all 0.6s ease-in-out;
  /* Let's enforce some hardware acceleration */
	transform: translate3d(0, 0, 0);
	backface-visibility: hidden;
}
.spa-scroll.welcome {
  transform: translateY(0%);
}
.spa-scroll.picker {
  transform: translateY(-100%);
}
.spa-page {
  overflow: hidden;
  /*border: 2px solid #ddd;*/
}
.spa-page-wrapper {
  padding-top: 20px;
}
.logo {
  width: 165px;
  margin: 0 0 14px;
}
</style>
