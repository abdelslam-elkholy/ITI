/* eslint-disable react/prop-types */
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, makeDone }) => {
  const todoos = todos;
  return (
    <ul
      className="list-unstyled m-3 d-flex  flex-column "
      style={{ minHeight: "40vh" }}
    >
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          makeDone={makeDone}
        />
      ))}
    </ul>
  );
};

export default TodoList;
