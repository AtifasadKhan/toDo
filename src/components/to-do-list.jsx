/* eslint-disable react/prop-types */
import TodoCards from './to-do-cards';

const TodoList = (props) => {
  const { todos } = props;
  return (
    <ul className='main'>
      {todos.map((item, index) => {
        return (
          <TodoCards {...props} key={index} index={index}>
            <p>{item}</p>
          </TodoCards>
        );
      })}
    </ul>
  );
};

export default TodoList;
