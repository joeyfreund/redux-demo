var Redux = require('redux');

var store = Redux.createStore((state, action) => {
  // console.log('Reducer is called with ', state, 'and', action);
  if (state){
    return state + 1;
  } else {
    return 42;
  }
});



console.log('The initial state is', store.getState());

// Dispatch some actions ...
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    store.dispatch({type: 'TEST_ACTION', foo: 'bar'});
  }, 100 * i);
}


store.subscribe(() => {
  console.log('Something happened, and the current state is ', store.getState());
});
