import createNumber from './number';

const store = {
  debug: true,
  state: {
    screen: 'welcome', // enum: 'welcome', 'picker'
    howManyNumbers: 10,
    numbers: [],
    pointer: null,
    cardFlipped: false,
    cardAnimating: false,
  },
  generateNumbersAction() {
    if (this.debug) console.log('generateNumbersAction triggered');
    const state = this.state;
    const count = state.howManyNumbers;
    for (let i = 0; i < count; i += 1) {
      state.numbers.push(createNumber({ assigned: false, value: i + 1 }));
    }
  },
  setHowManyNumbersAction(newValue) {
    if (this.debug) console.log('setHowManyNumbersAction triggered with', newValue);
    const state = this.state;
    state.howManyNumbers = newValue;
  },
  setPointerAction(newValue) {
    if (this.debug) console.log('setPointerAction triggered with', newValue);
    const state = this.state;
    state.pointer = newValue;
  },
  setScreenAction(newValue) {
    if (this.debug) console.log('setScreenAction triggered with', newValue);
    const state = this.state;
    state.screen = newValue;
  },
  flipCardAction() {
    const state = this.state;
    state.cardFlipped = !state.cardFlipped;
  },
  // generateNewPointerAction() {
  //   if (this.debug) console.log('generateNewPointerAction triggered');
  //   const state = this.state;
  //   const state.numbers;
  //   for (let i = 0; i < count; i += 1) {
  //     state.numbers.push(createNumber({ assigned: false, value: i + 1 }));
  //   }
  // }
};

export default store;
