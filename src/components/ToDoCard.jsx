import { useState, useEffect } from "react";

function TodoCard() {
  // Step 1: Initialize todos from localStorage if available
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : []; // convert string to array
  });

  const [task, setTask] = useState("");

  // Step 2: Whenever todos change, save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Step 3: Add a new task
  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  // Step 4: Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // Step 5: Delete the last task
  const deleteLastTodo = () => {
    setTodos(todos.slice(0, -1)); // removes last item
  };

  return (
    <div className="card">
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteLastTodo} disabled={todos.length === 0}>
        Delete Last
      </button>

      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoCard;
