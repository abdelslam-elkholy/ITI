import React from "react";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <ul className="list-unstyled m-3 " style={{ minHeight: "40vh" }}>
      <Todo />
      <Todo />
      <Todo />
    </ul>
  );
};

export default TodoList;
