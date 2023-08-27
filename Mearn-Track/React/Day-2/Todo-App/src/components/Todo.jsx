/* eslint-disable react/prop-types */
import React from "react";

const Todo = ({ todo, deleteTodo, makeDone }) => {
  return (
    <li className="mb-2">
      <input
        type="checkbox"
        value={todo.completed}
        onChange={() => makeDone(todo.id)}
      />
      <span
        style={todo.completed ? { textDecoration: "line-through" } : {}}
        className="mx-3  text-center"
      >
        {todo.todoName}
      </span>
      <button className=" border-0" onClick={() => deleteTodo(todo.id)}>
        {" "}
        ❌️{" "}
      </button>
    </li>
  );
};

export default Todo;
