/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Form = ({ addNewTodo }) => {
  const [todoName, setTodoName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoName) return;
    const newTodo = { todoName, completed: false, id: Date.now() };
    addNewTodo(newTodo);
    setTodoName("");
  };
  return (
    <form className="mb-4 d-flex flex-column col-6" onSubmit={handleSubmit}>
      <input
        type="text"
        className="my-2 py-1 "
        placeholder="todo..."
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button className="col-2 p-2 px-4">Add</button>
    </form>
  );
};

export default Form;
