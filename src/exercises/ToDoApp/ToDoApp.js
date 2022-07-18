import { useState } from "react";

let nextId = 0;

export const ToDoApp = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addToList = () => {
    if (todoInput !== "") {
      setTodos([
        ...todos,
        { id: nextId++, name: todoInput, isComplete: false }
      ]);
      setTodoInput("");
    }
  };

  const handleComplete = (todo) => {
    setTodos((todos) =>
      todos.map((currentTodo) =>
        currentTodo.id === todo.id
          ? { ...currentTodo, isComplete: !currentTodo.isComplete }
          : currentTodo
      )
    );
  };

  return (
    <>
      <h1>TODO List</h1>
      <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button onClick={addToList}>Add</button>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}
          onClick={() => handleComplete(todo)}>
          {todo.name}
        </li>
      ))}
    </>
  );
};
