import { useState } from 'react';
import TodoList from './components/to-do-list';
import TodoInput from './components/todo-inputs';

function App() {
  const [todo, setTodo] = useState([]);
  const [todoVal, setTodoVal] = useState([]);

  const addTodoFunc = (item) => {
    const newList = [...todo, item];
    setTodo(newList);
  };

  const delTodo = (index) => {
    const newTodo = todo.filter((item, todoindex) => {
      return todoindex != index;
    });
    setTodo(newTodo);
  };

  const editTodo = (index) => {
    const editedOne = todo[index];
    setTodoVal(editedOne);
    delTodo(index);
  };
  return (
    <>
      <TodoInput
        todoVal={todoVal}
        setTodoVal={setTodoVal}
        addTodoFunc={addTodoFunc}
      />
      <TodoList todos={todo} delTodo={delTodo} editTodo={editTodo} />
    </>
  );
}

export default App;
