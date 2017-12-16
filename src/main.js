// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';

function randomWholeNum(upperLimit) {
  // Will be a whole number between 0 and (upperLimit - 1)
  return Math.floor(Math.random() * upperLimit);
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: store.state,
  // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    unassigned() {
      return this.numbers.filter(n => n.assigned === false);
    },
    unassignedCount() {
      return this.unassigned.length;
    },
    done() {
      return !this.unassigned.length;
    },
  },
  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    generateNumbers() {
      store.generateNumbersAction();
      store.setPointerAction(null);
      store.flipCardAction(false);
      this.setPage('picker');
    },
    getNewNumber() {
      if (!this.done) {
        const cursor = randomWholeNum(this.unassigned.length);
        const num = this.unassigned[cursor];
        num.setAssigned();
        store.setPointerAction(num);
        // return num;
      } else {
        store.setPointerAction(null);
      }
    },
    setHowManyNumbers(val) {
      const value = val && val.trim();
      if (!value) {
        return;
      }
      store.setHowManyNumbersAction(val);
    },
    setPage(val) {
      store.setScreenAction(val);
    },
    flipCard() {
      store.flipCardAction();
    },
  },
});
