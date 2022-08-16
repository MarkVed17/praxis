import { useState } from "react";

const todos = [
  {
    id: 1,
    title: "NeoG assignments",
    completed: false
  },
  {
    id: 2,
    title: "Pair programming session",
    completed: true
  },
  {
    id: 3,
    title: "Project submission",
    completed: false
  },
  {
    id: 4,
    title: "Coding practice",
    completed: true
  }
];

export const TodosFilter = () => {
  const [todosList, setTodosList] = useState({
    list: todos,
    isSelected: "all"
  });

  const { list, isSelected } = todosList;

  const filterTodos = (filterBy) => {
    switch (filterBy) {
      case "Completed":
        return setTodosList({
          list: todos.filter((todo) => (todo.completed ? true : false)),
          isSelected: "completed"
        });

      case "Incomplete":
        return setTodosList({
          list: todos.filter((todo) => (!todo.completed ? true : false)),
          isSelected: "incomplete"
        });
      case "All":
        return setTodosList({ list: todos, isSelected: "all" });
      default:
        return todos;
    }
  };

  return (
    <>
      <h1>Todos List</h1>
      <button
        onClick={(e) => filterTodos(e.target.innerText)}
        style={{
          border:
            isSelected === "completed" ? "1px solid red" : "1px solid black"
        }}
      >
        Completed
      </button>
      <button
        onClick={(e) => filterTodos(e.target.innerText)}
        style={{
          border:
            isSelected === "incomplete" ? "1px solid red" : "1px solid black"
        }}
      >
        Incomplete
      </button>
      <button
        onClick={(e) => filterTodos(e.target.innerText)}
        style={{
          border: isSelected === "all" ? "1px solid red" : "1px solid black"
        }}
      >
        All
      </button>
      <ul>
        {list.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <h4>Completed: {todo.completed ? "✅" : "❌"}</h4>
          </div>
        ))}
      </ul>
    </>
  );
};
