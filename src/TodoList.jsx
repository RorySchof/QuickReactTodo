import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className='list'>
      {todos.length === 0 && <p>No Todos</p>}

      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          completed={todo.completed}
          title={todo.title}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
