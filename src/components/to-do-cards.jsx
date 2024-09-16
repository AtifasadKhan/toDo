/* eslint-disable react/prop-types */
const TodoCards = (props) => {
  const { children, delTodo, index, editTodo } = props;
  return (
    <li className='todoItem'>
      <p>{children}</p>
      <div className='actionsContainer'>
        <button onClick={() => editTodo(index)}>
          <i className='fa-regular fa-pen-to-square'></i>
        </button>
        <button onClick={() => delTodo(index)}>
          <i className='fa-solid fa-trash'></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCards;
