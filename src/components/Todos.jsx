import axios from "axios";
import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  }, []);

  return (
    <>
      <h2>Total Todos: {todos.length}</h2>
      <h2>
        Completed Todos: {todos.filter((todo) => todo.completed == true).length}
      </h2>
      <h2>
        Uncompleted Todos:{" "}
        {todos.filter((todo) => todo.completed != true).length}
      </h2>
    </>
  );
}

export default Todos;
