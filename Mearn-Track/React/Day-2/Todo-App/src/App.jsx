import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => setTodos((prevTodos) => [...prevTodos, todo]);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const makeDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <Header>
        <Form addNewTodo={addTodo} />
      </Header>
      <TodoList todos={todos} deleteTodo={deleteTodo} makeDone={makeDone} />
      <Footer />
    </>
  );
};

export default App;
