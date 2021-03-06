const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => (
        // when click the button, dispatch INCREMENT action to store,
        // when the action through reducer add state
        // notice listener to ReactDOM rerender
        store.dispatch({
          type: 'INCREMENT'
        })
      )}
      onDecrement={() => (
        store.dispatch({
          type: 'DECREMENT'
        })
      )}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);

render();
