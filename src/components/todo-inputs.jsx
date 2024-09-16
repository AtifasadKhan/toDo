const TodoInput = (props) => {
  // eslint-disable-next-line react/prop-types
  const { addTodoFunc, todoVal, setTodoVal } = props;

  return (
    <header>
      <input
        value={todoVal}
        type='text'
        onChange={(e) => {
          setTodoVal(e.target.value);
        }}
        placeholder='add task!'
      />
      <button
        onClick={() => {
          addTodoFunc(todoVal);
          setTodoVal('');
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
