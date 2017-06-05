import expect from 'expect';
import deepFreeze from 'deep-freeze';

// Not pure function
// const toggleTodo = (todo) => {
//   todo.completed = !todo.completed;
//   return todo;
// };

const toggleTodo = (todo) => {
  // ES5
  // return {
  //   id: todo.id,
  //   text: todo.text,
  //   completed: !todo.completed
  // };

  // ES6
  // return Object.assign({}, todo, {
  //   completed: !todo.completed
  // });

  // ES7 support spread in object
  return {
    ...todo,
    completed: !todo.completed
  };
};


const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();

console.log('All tests passed!');
