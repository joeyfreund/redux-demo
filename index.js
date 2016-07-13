'use strict';

var Redux = require('redux');

var store = Redux.createStore((state, action) => {
  if (! state){
    return { part1: 42, part2: 'a'};
  }

  switch (action.type) {
    case 'ACTION_1':
      return {
        part1 : state.part1 + 1,
        part2 : state.part2
      };

    case 'ACTION_2':
      return {
        part1 : state.part1,
        part2 : state.part2 + action.foo
      };
    default:
      return state;
  }

});



console.log('The initial state is', store.getState());

// Dispatch some actions ...
for (var i = 0; i < 10; i++) {
  let action_num = (1 + (i % 2));
  setTimeout(() => {
    store.dispatch({type: 'ACTION_' + action_num, foo: 'bar'});
  }, 100 * i);
}


store.subscribe(() => {
  console.log('Something happened, and the current state is ', store.getState());
});
